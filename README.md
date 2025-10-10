# Obsidian Web Clipper Summarizer

Automatically summarize Web Clipper articles using OpenAI API.

## Features

- 🤖 **AI Auto-summarization**: GPT automatically generates summaries when you save articles with Web Clipper
- ⚡ **Instant Processing**: Detects file creation and processes automatically
- 🎯 **Flexible Configuration**: Customize summary length, insertion position, watch folders, and more
- 🎨 **Multiple Output Formats**: Insert summaries at the top, bottom, or in the frontmatter
- 🔧 **Manual Execution**: Summarize any file via command palette or ribbon icon

## Functionality

### Auto-summarization

Automatically adds AI summaries to articles saved with Web Clipper. You can configure it to only process files in specific watch folders.

### Manual Summarization

For existing files, you can generate summaries by running "Summarize current file" from the command palette or clicking the ribbon icon.

### Customizable Settings

- **GPT Model Selection**: GPT-4 Turbo / GPT-4 / GPT-3.5 Turbo
- **Summary Length**: Short (3-5 lines) / Medium (5-8 lines) / Long (2-3 paragraphs)
- **Insertion Position**: Top of file / Bottom of file / Frontmatter (YAML)
- **Watch Folder**: Set specific folders to auto-summarize

## Installation

### From Obsidian Community Plugins (Recommended)

1. Open Obsidian **Settings** → **Community Plugins** → **Browse**
2. Search for "Web Clipper Summarizer"
3. Click **Install** → **Enable**

### Manual Installation

1. Download `main.js`, `manifest.json`, and `styles.css` from the [latest release](https://github.com/syossan27/obsidian-clip-summarize/releases)
2. Place them in `.obsidian/plugins/obsidian-clip-summarize/` in your Obsidian Vault
3. Enable the plugin in Obsidian

## Initial Setup

1. Open Obsidian **Settings** → **Web Clipper Summarizer**
2. Enter your **OpenAI API Key**
   - You can get an API key from [OpenAI Platform](https://platform.openai.com/api-keys)
3. Optionally configure:
   - GPT Model (default: GPT-4 Turbo)
   - Summary length
   - Insertion position
   - Watch folder

> ⚠️ **Note**: Using the OpenAI API incurs costs. Check the [pricing page](https://openai.com/pricing) for details.

## Usage

### Auto-summarization

1. Enable the plugin and configure your OpenAI API key
2. Save articles with Web Clipper
3. Summaries are automatically generated

### Manual Summarization

- **Method 1**: Command palette (`Cmd/Ctrl + P`) → "Summarize current file"
- **Method 2**: Click the sparkles icon (✨) in the left sidebar

## Development

### Setup

```bash
npm install
npx lefthook install
```

### Development Mode

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Lint & Format

```bash
npm run lint
npm run format
npm run type-check
```

### Git Hooks

This project uses lefthook:

- **pre-commit**: Runs lint, format check, and type check
- **pre-push**: Runs all checks and build
- **commit-msg**: Checks for Conventional Commits format

## License

MIT

## Author

syossan27
