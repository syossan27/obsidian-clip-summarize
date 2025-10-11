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

    containerEl.createEl('h2', { text: 'Web Clipper Summarizer Settings' });

    // OpenAI API Key setting
    new Setting(containerEl)
      .setName('OpenAI API Key')
      .setDesc('Enter your OpenAI API key')
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

    // GPT Model selection
    new Setting(containerEl)
      .setName('GPT Model')
      .setDesc('Select the OpenAI model to use')
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
      .setName('Enable Auto-summarize')
      .setDesc('Automatically generate summaries when new files are created')
      .addToggle((toggle) =>
        toggle.setValue(this.plugin.settings.autoSummarize).onChange(async (value) => {
          this.plugin.settings.autoSummarize = value;
          await this.plugin.saveSettings();
        })
      );

    // Watch folder setting
    new Setting(containerEl)
      .setName('Watch Folder')
      .setDesc('Only auto-summarize files in this folder (leave empty for all files)')
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
      .setName('Summary Position')
      .setDesc('Choose where to insert the generated summary')
      .addDropdown((dropdown) =>
        dropdown
          .addOption('top', 'Top of file')
          .addOption('bottom', 'Bottom of file')
          .addOption('frontmatter', 'Frontmatter (YAML)')
          .setValue(this.plugin.settings.summaryPosition)
          .onChange(async (value: 'top' | 'bottom' | 'frontmatter') => {
            this.plugin.settings.summaryPosition = value;
            await this.plugin.saveSettings();
          })
      );

    // Summary length
    new Setting(containerEl)
      .setName('Summary Length')
      .setDesc('Choose the length of the generated summary')
      .addDropdown((dropdown) =>
        dropdown
          .addOption('short', 'Short (3-5 lines)')
          .addOption('medium', 'Medium (5-8 lines)')
          .addOption('long', 'Long (2-3 paragraphs)')
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
