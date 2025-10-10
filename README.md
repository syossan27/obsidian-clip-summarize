# Obsidian Web Clipper Summarizer

Obsidian Web Clipperで保存された記事を自動的にOpenAI APIで要約するプラグインです。

## 特徴

- 🤖 **AI自動要約**: Web Clipperで記事を保存すると、GPTが自動的に要約を生成
- ⚡ **即座に実行**: ファイル作成を検知して自動で処理
- 🎯 **柔軟な設定**: 要約の長さ、挿入位置、監視フォルダなどを細かく設定可能
- 🎨 **複数の出力形式**: ファイル先頭、末尾、またはFrontmatterに要約を挿入
- 🔧 **手動実行も可能**: コマンドパレットやリボンアイコンから任意のファイルを要約

## 機能

### 自動要約

Web Clipperで保存した記事に自動的にAI要約を追加します。設定した監視フォルダ内のファイルのみを処理することも可能です。

### 手動要約

既存のファイルに対しても、コマンドパレットから「現在のファイルを要約」を実行するか、リボンアイコンをクリックすることで要約を生成できます。

### カスタマイズ可能な設定

- **GPTモデル選択**: GPT-4 Turbo / GPT-4 / GPT-3.5 Turbo
- **要約の長さ**: 短い（3-5行）/ 中程度（5-8行）/ 長い（2-3段落）
- **挿入位置**: ファイル先頭 / ファイル末尾 / Frontmatter (YAML)
- **監視フォルダ**: 特定のフォルダのみを自動要約の対象に設定可能

## インストール

### Obsidianコミュニティプラグインから（推奨）

1. Obsidianで **設定** → **コミュニティプラグイン** → **閲覧** を開く
2. "Web Clipper Summarizer" を検索
3. **インストール** → **有効化**

### 手動インストール

1. [最新リリース](https://github.com/syossan27/obsidian-clip-summarize/releases)から `main.js`, `manifest.json`, `styles.css` をダウンロード
2. Obsidian Vaultの `.obsidian/plugins/obsidian-clip-summarize/` フォルダに配置
3. Obsidianでプラグインを有効化

## 初期設定

1. Obsidianの **設定** → **Web Clipper Summarizer** を開く
2. **OpenAI APIキー** を入力
   - APIキーは [OpenAI Platform](https://platform.openai.com/api-keys) で取得できます
3. お好みで以下を設定:
   - GPTモデル（デフォルト: GPT-4 Turbo）
   - 要約の長さ
   - 挿入位置
   - 監視フォルダ

> ⚠️ **注意**: OpenAI APIの利用には料金が発生します。[料金ページ](https://openai.com/pricing)をご確認ください。

## 使い方

### 自動要約

1. プラグインを有効化し、OpenAI APIキーを設定
2. Web Clipperで記事を保存
3. 自動的に要約が生成されます

### 手動要約

- **方法1**: コマンドパレット（`Cmd/Ctrl + P`）→ 「現在のファイルを要約」
- **方法2**: 左サイドバーの星アイコン（✨）をクリック

## 開発

### セットアップ

```bash
npm install
npx lefthook install
```

### 開発モード

```bash
npm run dev
```

### ビルド

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

このプロジェクトはlefthookを使用しています:

- **pre-commit**: lint、format check、type checkを実行
- **pre-push**: 全てのチェックとビルドを実行
- **commit-msg**: Conventional Commits形式をチェック

## ライセンス

MIT

## 作者

Your Name
