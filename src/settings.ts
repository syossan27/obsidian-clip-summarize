import { App, PluginSettingTab, Setting } from 'obsidian';
import type ClipSummarizePlugin from './main';
import { t } from './i18n';

export class ClipSummarizeSettingTab extends PluginSettingTab {
  plugin: ClipSummarizePlugin;

  constructor(app: App, plugin: ClipSummarizePlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;
    // Ensure language is set, default to 'en' if undefined
    if (!this.plugin.settings.language) {
      this.plugin.settings.language = 'en';
    }
    const messages = t(this.plugin.settings.language);

    containerEl.empty();

    containerEl.createEl('h2', { text: 'Clip Summarize Settings' });

    // Language setting
    new Setting(containerEl)
      .setName(messages.settings.languageName)
      .setDesc(messages.settings.languageDesc)
      .addDropdown((dropdown) =>
        dropdown
          .addOption('en', 'English')
          .addOption('ja', '日本語')
          .addOption('zh', '中文')
          .addOption('es', 'Español')
          .addOption('fr', 'Français')
          .addOption('de', 'Deutsch')
          .addOption('ko', '한국어')
          .addOption('pt', 'Português')
          .addOption('ru', 'Русский')
          .addOption('it', 'Italiano')
          .addOption('ar', 'العربية')
          .addOption('hi', 'हिन्दी')
          .addOption('nl', 'Nederlands')
          .addOption('tr', 'Türkçe')
          .addOption('pl', 'Polski')
          .setValue(this.plugin.settings.language)
          .onChange(async (value) => {
            this.plugin.settings.language = value as any;
            await this.plugin.saveSettings();
            this.display(); // Refresh the settings UI
          })
      );

    // OpenAI API Key setting
    new Setting(containerEl)
      .setName(messages.settings.apiKeyName)
      .setDesc(messages.settings.apiKeyDesc)
      .addText((text) =>
        text
          .setPlaceholder('sk-...')
          .setValue(this.plugin.settings.openaiApiKey)
          .onChange(async (value) => {
            this.plugin.settings.openaiApiKey = value;
            await this.plugin.saveSettings();
          })
      );

    // GPT Model selection
    new Setting(containerEl)
      .setName(messages.settings.modelName)
      .setDesc(messages.settings.modelDesc)
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

    // Auto-summarize toggle
    new Setting(containerEl)
      .setName(messages.settings.autoSummarizeName)
      .setDesc(messages.settings.autoSummarizeDesc)
      .addToggle((toggle) =>
        toggle.setValue(this.plugin.settings.autoSummarize).onChange(async (value) => {
          this.plugin.settings.autoSummarize = value;
          await this.plugin.saveSettings();
        })
      );

    // Watch folder setting
    new Setting(containerEl)
      .setName(messages.settings.watchFolderName)
      .setDesc(messages.settings.watchFolderDesc)
      .addText((text) =>
        text
          .setPlaceholder('e.g., Clippings')
          .setValue(this.plugin.settings.watchFolder)
          .onChange(async (value) => {
            this.plugin.settings.watchFolder = value;
            await this.plugin.saveSettings();
          })
      );

    // Summary position
    new Setting(containerEl)
      .setName(messages.settings.summaryPositionName)
      .setDesc(messages.settings.summaryPositionDesc)
      .addDropdown((dropdown) =>
        dropdown
          .addOption('top', messages.settings.summaryPositionTop)
          .addOption('bottom', messages.settings.summaryPositionBottom)
          .addOption('frontmatter', messages.settings.summaryPositionFrontmatter)
          .setValue(this.plugin.settings.summaryPosition)
          .onChange(async (value: 'top' | 'bottom' | 'frontmatter') => {
            this.plugin.settings.summaryPosition = value;
            await this.plugin.saveSettings();
          })
      );

    // Summary length
    new Setting(containerEl)
      .setName(messages.settings.summaryLengthName)
      .setDesc(messages.settings.summaryLengthDesc)
      .addDropdown((dropdown) =>
        dropdown
          .addOption('short', messages.settings.summaryLengthShort)
          .addOption('medium', messages.settings.summaryLengthMedium)
          .addOption('long', messages.settings.summaryLengthLong)
          .setValue(this.plugin.settings.summaryLength)
          .onChange(async (value: 'short' | 'medium' | 'long') => {
            this.plugin.settings.summaryLength = value;
            await this.plugin.saveSettings();
          })
      );

    // Usage section
    containerEl.createEl('h3', { text: 'Usage' });
    const usageEl = containerEl.createEl('div', {
      cls: 'setting-item-description'
    });

    usageEl.createEl('p', { text: 'This plugin can be used in the following ways:' });

    const ul = usageEl.createEl('ul');
    const li1 = ul.createEl('li');
    li1.createEl('strong', { text: 'Auto-summarize' });
    li1.appendText(
      ': Summaries are automatically generated when you save articles with Web Clipper'
    );

    const li2 = ul.createEl('li');
    li2.createEl('strong', { text: 'Manual summarize' });
    li2.appendText(': Run "Summarize current file" from the command palette (Cmd/Ctrl+P)');

    const li3 = ul.createEl('li');
    li3.createEl('strong', { text: 'Ribbon icon' });
    li3.appendText(': Click the sparkles icon in the left sidebar');

    const noteP = usageEl.createEl('p');
    const noteEm = noteP.createEl('em');
    noteEm.appendText('Note: Using the OpenAI API incurs costs. See the ');
    noteEm.createEl('a', {
      text: 'OpenAI pricing page',
      href: 'https://openai.com/pricing'
    });
    noteEm.appendText(' for details.');
  }
}
