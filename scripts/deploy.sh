#!/bin/bash

# Obsidian Vaultのパスを環境変数から取得
if [ -f .env ]; then
  export $(cat .env | grep -v '^#' | xargs)
fi

if [ -z "$OBSIDIAN_VAULT_PATH" ]; then
  echo "エラー: OBSIDIAN_VAULT_PATH が設定されていません"
  echo ".env ファイルを作成して OBSIDIAN_VAULT_PATH を設定してください"
  echo "例: OBSIDIAN_VAULT_PATH=/Users/yourname/Documents/MyVault"
  exit 1
fi

PLUGIN_DIR="$OBSIDIAN_VAULT_PATH/.obsidian/plugins/obsidian-clip-summarize"

# プラグインフォルダを作成
mkdir -p "$PLUGIN_DIR"

# ファイルをコピー
echo "プラグインをデプロイ中..."
cp main.js "$PLUGIN_DIR/"
cp manifest.json "$PLUGIN_DIR/"
cp styles.css "$PLUGIN_DIR/"

echo "✓ デプロイ完了: $PLUGIN_DIR"
echo ""
echo "次のステップ:"
echo "1. Obsidianを再起動"
echo "2. 設定 > コミュニティプラグイン > Web Clipper Summarizer を有効化"
