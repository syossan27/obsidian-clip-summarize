import { Plugin, TFile, Notice } from 'obsidian';
import OpenAI from 'openai';
import { ClipSummarizeSettingTab } from './settings';
import { ClipSummarizeSettings, DEFAULT_SETTINGS } from './types';

export default class ClipSummarizePlugin extends Plugin {
  settings: ClipSummarizeSettings;
  private openai: OpenAI | null = null;

  async onload() {
    await this.loadSettings();

    // Initialize OpenAI client
    this.initializeOpenAI();

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
          new Notice('No active file');
        }
      }
    });

    // Add ribbon icon
    this.addRibbonIcon('sparkles', 'Summarize with AI', async () => {
      const activeFile = this.app.workspace.getActiveFile();
      if (activeFile) {
        await this.summarizeFile(activeFile);
      } else {
        new Notice('No active file');
      }
    });

    // Plugin loaded
  }

  initializeOpenAI() {
    if (this.settings.openaiApiKey) {
      this.openai = new OpenAI({
        apiKey: this.settings.openaiApiKey,
        dangerouslyAllowBrowser: true
      });
    } else {
      this.openai = null;
    }
  }

  async handleNewFile(file: TFile) {
    // Only process files in the watch folder if set
    if (this.settings.watchFolder && !file.path.startsWith(this.settings.watchFolder)) {
      return;
    }

    // Wait a bit for file write to complete
    await this.sleep(1000);

    await this.summarizeFile(file);
  }

  async summarizeFile(file: TFile) {
    if (!this.openai) {
      new Notice('OpenAI API key is not set');
      return;
    }

    try {
      new Notice('Generating summary...');

      const content = await this.app.vault.read(file);

      // Check if summary already exists
      if (content.includes('## AI Summary') || content.includes('summary:')) {
        new Notice('This file already has a summary');
        return;
      }

      const summary = await this.generateSummary(content);

      if (summary) {
        await this.insertSummary(file, content, summary);
        new Notice('Summary generated successfully');
      }
    } catch (error) {
      console.error('Summary generation error:', error);
      new Notice('Failed to generate summary');
    }
  }

  async generateSummary(content: string): Promise<string> {
    if (!this.openai) {
      throw new Error('OpenAI client not initialized');
    }

    const lengthInstructions = {
      short: 'a concise summary in 3-5 lines',
      medium: 'a summary in 1 paragraph (5-8 lines)',
      long: 'a detailed summary in 2-3 paragraphs'
    };

    const prompt = `Please create ${lengthInstructions[this.settings.summaryLength]} of the following article. Focus on the key points and make it easy to read.\n\n${content}`;

    const response = await this.openai.chat.completions.create({
      model: this.settings.model,
      messages: [
        {
          role: 'system',
          content:
            'You are an excellent article summarization assistant. You extract key points from articles and summarize them clearly.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.3,
      max_tokens: 1000
    });

    return response.choices[0]?.message?.content || '';
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
