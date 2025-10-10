import { App, PluginSettingTab, Setting } from 'obsidian';
import type ClipSummarizePlugin from './main';

export class ClipSummarizeSettingTab extends PluginSettingTab {
  plugin: ClipSummarizePlugin;

  constructor(app: App, plugin: ClipSummarizePlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;

    containerEl.empty();

    containerEl.createEl('h2', { text: 'Web Clipper Summarizer 設定' });

    // OpenAI APIキー設定
    new Setting(containerEl)
      .setName('OpenAI APIキー')
      .setDesc('OpenAIのAPIキーを入力してください')
      .addText((text) =>
        text
          .setPlaceholder('sk-...')
          .setValue(this.plugin.settings.openaiApiKey)
          .onChange(async (value) => {
            this.plugin.settings.openaiApiKey = value;
            await this.plugin.saveSettings();
            this.plugin.initializeOpenAI();
          })
      );

    // GPTモデル選択
    new Setting(containerEl)
      .setName('GPTモデル')
      .setDesc('使用するOpenAIのモデルを選択してください')
      .addDropdown((dropdown) =>
        dropdown
          .addOption('gpt-4-turbo-preview', 'GPT-4 Turbo')
          .addOption('gpt-4', 'GPT-4')
          .addOption('gpt-3.5-turbo', 'GPT-3.5 Turbo')
          .setValue(this.plugin.settings.model)
          .onChange(async (value) => {
            this.plugin.settings.model = value;
            await this.plugin.saveSettings();
          })
      );

    // 自動要約の有効/無効
    new Setting(containerEl)
      .setName('自動要約を有効化')
      .setDesc('新しいファイルが作成されたときに自動的に要約を生成します')
      .addToggle((toggle) =>
        toggle.setValue(this.plugin.settings.autoSummarize).onChange(async (value) => {
          this.plugin.settings.autoSummarize = value;
          await this.plugin.saveSettings();
        })
      );

    // 監視フォルダ設定
    new Setting(containerEl)
      .setName('監視フォルダ')
      .setDesc('このフォルダ内のファイルのみ自動要約します（空欄の場合は全てのファイル）')
      .addText((text) =>
        text
          .setPlaceholder('例: Clippings')
          .setValue(this.plugin.settings.watchFolder)
          .onChange(async (value) => {
            this.plugin.settings.watchFolder = value;
            await this.plugin.saveSettings();
          })
      );

    // 要約の挿入位置
    new Setting(containerEl)
      .setName('要約の挿入位置')
      .setDesc('生成された要約をどこに挿入するか選択してください')
      .addDropdown((dropdown) =>
        dropdown
          .addOption('top', 'ファイルの先頭')
          .addOption('bottom', 'ファイルの末尾')
          .addOption('frontmatter', 'Frontmatter (YAML)')
          .setValue(this.plugin.settings.summaryPosition)
          .onChange(async (value: 'top' | 'bottom' | 'frontmatter') => {
            this.plugin.settings.summaryPosition = value;
            await this.plugin.saveSettings();
          })
      );

    // 要約の長さ
    new Setting(containerEl)
      .setName('要約の長さ')
      .setDesc('生成する要約の長さを選択してください')
      .addDropdown((dropdown) =>
        dropdown
          .addOption('short', '短い（3〜5行）')
          .addOption('medium', '中程度（5〜8行）')
          .addOption('long', '長い（2〜3段落）')
          .setValue(this.plugin.settings.summaryLength)
          .onChange(async (value: 'short' | 'medium' | 'long') => {
            this.plugin.settings.summaryLength = value;
            await this.plugin.saveSettings();
          })
      );

    // 情報セクション
    containerEl.createEl('h3', { text: '使い方' });
    const usageEl = containerEl.createEl('div', {
      cls: 'setting-item-description'
    });
    usageEl.innerHTML = `
      <p>このプラグインは以下の方法で使用できます：</p>
      <ul>
        <li><strong>自動要約</strong>: Web Clipperで記事を保存すると自動的に要約が生成されます</li>
        <li><strong>手動要約</strong>: コマンドパレット（Cmd/Ctrl+P）から「現在のファイルを要約」を実行</li>
        <li><strong>リボンアイコン</strong>: 左サイドバーの星アイコンをクリック</li>
      </ul>
      <p><em>注意: OpenAI APIの使用には料金が発生します。詳細は<a href="https://openai.com/pricing">OpenAI公式サイト</a>をご確認ください。</em></p>
    `;
  }
}
