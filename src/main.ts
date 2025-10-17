import { Plugin, TFile, Notice, requestUrl } from 'obsidian';
import { ClipSummarizeSettingTab } from './settings';
import { ClipSummarizeSettings, DEFAULT_SETTINGS } from './types';
import { ErrorCode, SummarizeError, mapOpenAIError } from './errors';
import { t } from './i18n';

export default class ClipSummarizePlugin extends Plugin {
  settings: ClipSummarizeSettings;

  async onload() {
    await this.loadSettings();

    // Add settings tab
    this.addSettingTab(new ClipSummarizeSettingTab(this.app, this));

    // Watch for file creation events
    this.registerEvent(
      this.app.vault.on('create', async (file) => {
        if (this.settings.autoSummarize && file instanceof TFile) {
          await this.handleNewFile(file);
        }
      })
    );

    // Command: Manually summarize current file
    this.addCommand({
      id: 'summarize-current-file',
      name: 'Summarize current file',
      callback: async () => {
        const activeFile = this.app.workspace.getActiveFile();
        if (activeFile) {
          await this.summarizeFile(activeFile);
        } else {
          const error = new SummarizeError(ErrorCode.NO_ACTIVE_FILE, this.settings.language);
          new Notice(error.getDisplayMessage());
        }
      }
    });

    // Add ribbon icon
    this.addRibbonIcon('sparkles', 'Summarize with AI', async () => {
      const activeFile = this.app.workspace.getActiveFile();
      if (activeFile) {
        await this.summarizeFile(activeFile);
      } else {
        const error = new SummarizeError(ErrorCode.NO_ACTIVE_FILE, this.settings.language);
        new Notice(error.getDisplayMessage());
      }
    });

    // Plugin loaded
  }

  async handleNewFile(file: TFile) {
    // 空欄の場合は処理しない
    if (!this.settings.watchFolder) {
      return;
    }

    // アスタリスクの場合は全ディレクトリを対象
    if (this.settings.watchFolder === '*') {
      // Wait a bit for file write to complete
      await this.sleep(1000);
      await this.summarizeFile(file);
      return;
    }

    // 特定のディレクトリのみ対象
    if (!file.path.startsWith(this.settings.watchFolder)) {
      return;
    }

    // Wait a bit for file write to complete
    await this.sleep(1000);

    await this.summarizeFile(file);
  }

  async summarizeFile(file: TFile) {
    const lang = this.settings.language;
    const messages = t(lang);

    try {
      // Check API key
      if (!this.settings.openaiApiKey) {
        throw new SummarizeError(ErrorCode.API_KEY_NOT_SET, lang);
      }

      new Notice(messages.notices.generatingSummary);

      // Read file
      let content: string;
      try {
        content = await this.app.vault.read(file);
      } catch (error) {
        throw new SummarizeError(ErrorCode.FILE_READ_ERROR, lang, error as Error);
      }

      // Check for empty file
      if (!content || content.trim().length === 0) {
        throw new SummarizeError(ErrorCode.CONTENT_EMPTY, lang);
      }

      // Check for existing summary
      if (content.includes('## AI Summary') || content.includes('summary:')) {
        throw new SummarizeError(ErrorCode.FILE_ALREADY_SUMMARIZED, lang);
      }

      // Generate summary
      const summary = await this.generateSummary(content);

      if (!summary || summary.trim().length === 0) {
        throw new SummarizeError(ErrorCode.API_RESPONSE_EMPTY, lang);
      }

      // Insert summary
      try {
        await this.insertSummary(file, content, summary);
        new Notice(messages.notices.summaryGenerated);
      } catch (error) {
        throw new SummarizeError(ErrorCode.FILE_WRITE_ERROR, lang, error as Error);
      }
    } catch (error) {
      // Display with error code if SummarizeError
      if (error instanceof SummarizeError) {
        const message = error.getDisplayMessage();
        console.error('Summary generation error:', error.getDebugInfo());
        new Notice(message);
      } else {
        // Unexpected error
        console.error('Unexpected error:', error);
        const unknownError = new SummarizeError(ErrorCode.UNKNOWN_ERROR, lang, error as Error);
        console.error(unknownError.getDebugInfo());
        new Notice(unknownError.getDisplayMessage());
      }
    }
  }

  async generateSummary(content: string): Promise<string> {
    const lang = this.settings.language;
    const messages = t(lang);

    if (!this.settings.openaiApiKey) {
      throw new SummarizeError(ErrorCode.OPENAI_CLIENT_NOT_INITIALIZED, lang);
    }

    const lengthInstructions = {
      short: messages.prompts.summaryLengthShort,
      medium: messages.prompts.summaryLengthMedium,
      long: messages.prompts.summaryLengthLong
    };

    const prompt = messages.prompts.userPrompt
      .replace('{length}', lengthInstructions[this.settings.summaryLength])
      .replace('{content}', content);

    try {
      const response = await requestUrl({
        url: 'https://api.openai.com/v1/chat/completions',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.settings.openaiApiKey}`
        },
        body: JSON.stringify({
          model: this.settings.model,
          messages: [
            {
              role: 'system',
              content: messages.prompts.systemPrompt
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: 0.3,
          max_tokens: 1000
        })
      });

      if (response.status !== 200) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const errorData = response.json;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        const error: any = new Error(errorData.error?.message || `HTTP ${response.status}`);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        error.status = response.status;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        error.error = errorData.error;
        throw error;
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data = response.json;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
      return data.choices[0]?.message?.content || '';
    } catch (error) {
      // Map OpenAI error to appropriate error code and details
      const { code, details } = mapOpenAIError(error, lang);
      throw new SummarizeError(code, lang, error as Error, details);
    }
  }

  async insertSummary(file: TFile, originalContent: string, summary: string) {
    let newContent = '';

    switch (this.settings.summaryPosition) {
      case 'top': {
        newContent = `## AI Summary\n\n${summary}\n\n---\n\n${originalContent}`;
        break;
      }
      case 'bottom': {
        newContent = `${originalContent}\n\n---\n\n## AI Summary\n\n${summary}`;
        break;
      }
      case 'frontmatter': {
        // Process frontmatter
        const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
        const match = originalContent.match(frontmatterRegex);

        if (match) {
          const frontmatter = match[1];
          const body = match[2];
          newContent = `---\n${frontmatter}\nsummary: "${summary.replace(/"/g, '\\"')}"\n---\n${body}`;
        } else {
          newContent = `---\nsummary: "${summary.replace(/"/g, '\\"')}"\n---\n\n${originalContent}`;
        }
        break;
      }
    }

    await this.app.vault.modify(file, newContent);
  }

  sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async loadSettings() {
    const data = (await this.loadData()) as Partial<ClipSummarizeSettings> | null;
    this.settings = { ...DEFAULT_SETTINGS, ...(data || {}) };
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  onunload() {
    // Plugin unloaded
  }
}
