export type Language =
  | 'en' // English
  | 'ja' // Japanese
  | 'zh' // Chinese (Simplified)
  | 'es' // Spanish
  | 'fr' // French
  | 'de' // German
  | 'ko' // Korean
  | 'pt' // Portuguese
  | 'ru' // Russian
  | 'it' // Italian
  | 'ar' // Arabic
  | 'hi' // Hindi
  | 'nl' // Dutch
  | 'tr' // Turkish
  | 'pl'; // Polish

export interface ClipSummarizeSettings {
  openaiApiKey: string;
  model: string;
  autoSummarize: boolean;
  watchFolder: string;
  summaryPosition: 'top' | 'bottom' | 'frontmatter';
  summaryLength: 'short' | 'medium' | 'long';
  language: Language;
}

export const DEFAULT_SETTINGS: ClipSummarizeSettings = {
  openaiApiKey: '',
  model: 'gpt-4-turbo-preview',
  autoSummarize: true,
  watchFolder: '',
  summaryPosition: 'top',
  summaryLength: 'medium',
  language: 'en'
};
