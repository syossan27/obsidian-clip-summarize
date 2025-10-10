import { Plugin, TFile, Notice } from 'obsidian';
import OpenAI from 'openai';
import { ClipSummarizeSettingTab } from './settings';
import { ClipSummarizeSettings, DEFAULT_SETTINGS } from './types';

export default class ClipSummarizePlugin extends Plugin {
  settings: ClipSummarizeSettings;
  private openai: OpenAI | null = null;

  async onload() {
    await this.loadSettings();

    // OpenAIクライアントの初期化
    this.initializeOpenAI();

    // 設定タブを追加
    this.addSettingTab(new ClipSummarizeSettingTab(this.app, this));

    // ファイル作成イベントの監視
    this.registerEvent(
      this.app.vault.on('create', async (file) => {
        if (this.settings.autoSummarize && file instanceof TFile) {
          await this.handleNewFile(file);
        }
      })
    );

    // コマンド: 手動で要約を生成
    this.addCommand({
      id: 'summarize-current-file',
      name: '現在のファイルを要約',
      callback: async () => {
        const activeFile = this.app.workspace.getActiveFile();
        if (activeFile) {
          await this.summarizeFile(activeFile);
        } else {
          new Notice('アクティブなファイルがありません');
        }
      }
    });

    // リボンアイコンの追加
    this.addRibbonIcon('sparkles', 'Web Clipper要約', async () => {
      const activeFile = this.app.workspace.getActiveFile();
      if (activeFile) {
        await this.summarizeFile(activeFile);
      } else {
        new Notice('アクティブなファイルがありません');
      }
    });

    // プラグインロード完了
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
    // 監視フォルダが設定されている場合、そのフォルダ内のファイルのみ処理
    if (this.settings.watchFolder && !file.path.startsWith(this.settings.watchFolder)) {
      return;
    }

    // 少し待機してファイルの書き込みが完了するのを待つ
    await this.sleep(1000);

    await this.summarizeFile(file);
  }

  async summarizeFile(file: TFile) {
    if (!this.openai) {
      new Notice('OpenAI APIキーが設定されていません');
      return;
    }

    try {
      new Notice('要約を生成中...');

      const content = await this.app.vault.read(file);

      // すでに要約が存在するかチェック
      if (content.includes('## AI要約') || content.includes('summary:')) {
        new Notice('このファイルはすでに要約されています');
        return;
      }

      const summary = await this.generateSummary(content);

      if (summary) {
        await this.insertSummary(file, content, summary);
        new Notice('要約が生成されました');
      }
    } catch (error) {
      console.error('要約生成エラー:', error);
      new Notice('要約の生成に失敗しました');
    }
  }

  async generateSummary(content: string): Promise<string> {
    if (!this.openai) {
      throw new Error('OpenAI client not initialized');
    }

    const lengthInstructions = {
      short: '3〜5行程度の簡潔な要約',
      medium: '1段落（5〜8行）の要約',
      long: '2〜3段落の詳細な要約'
    };

    const prompt = `以下の記事を${lengthInstructions[this.settings.summaryLength]}として日本語で作成してください。重要なポイントを押さえ、読みやすくまとめてください。\n\n${content}`;

    const response = await this.openai.chat.completions.create({
      model: this.settings.model,
      messages: [
        {
          role: 'system',
          content:
            'あなたは優秀な記事要約アシスタントです。記事の重要なポイントを抽出し、分かりやすく要約します。'
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
        newContent = `## AI要約\n\n${summary}\n\n---\n\n${originalContent}`;
        break;
      }
      case 'bottom': {
        newContent = `${originalContent}\n\n---\n\n## AI要約\n\n${summary}`;
        break;
      }
      case 'frontmatter': {
        // Frontmatterの処理
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
    // プラグインアンロード完了
  }
}
