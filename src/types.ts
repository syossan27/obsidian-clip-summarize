export interface ClipSummarizeSettings {
  openaiApiKey: string;
  model: string;
  autoSummarize: boolean;
  watchFolder: string;
  summaryPosition: 'top' | 'bottom' | 'frontmatter';
  summaryLength: 'short' | 'medium' | 'long';
}

export const DEFAULT_SETTINGS: ClipSummarizeSettings = {
  openaiApiKey: '',
  model: 'gpt-4-turbo-preview',
  autoSummarize: true,
  watchFolder: '',
  summaryPosition: 'top',
  summaryLength: 'medium'
};
