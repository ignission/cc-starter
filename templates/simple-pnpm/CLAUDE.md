# CLAUDE.md

このファイルは、このプロジェクトでClaude Code (claude.ai/code)が作業する際のガイダンスを提供します。

## 重要な指示

**ユーザーとの会話は必ず日本語で行ってください。**

## プロジェクト概要

React Router v7を使用したシンプルなSSR（サーバーサイドレンダリング）Webアプリケーションです。PNPMを使用して依存関係を管理し、Vite + TypeScript + Tailwind CSSで高速な開発体験を提供します。

## 主要なコマンド

### 開発
```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動（SSRモード）
pnpm dev

# 本番ビルド
pnpm build

# プロダクションサーバーの起動
pnpm start

# 型チェック
pnpm typecheck
```

## プロジェクト構造

- `app/` - アプリケーションのメインコード
  - `root.tsx` - アプリケーションのルートコンポーネント
  - `routes.ts` - ルート定義
  - `routes/` - 各ページのコンポーネント
  - `welcome/` - ウェルカムページのコンポーネント
- `public/` - 静的ファイル
- `vite.config.ts` - Vite設定
- `react-router.config.ts` - React Router設定

## 技術スタック

- **React Router v7** - ルーティングとSSR（サーバーサイドレンダリング）
- **TypeScript** - 型安全性
- **Tailwind CSS** - スタイリング
- **Vite** - ビルドツール
- **PNPM** - パッケージマネージャー

## デプロイメント

このプロジェクトはSSRモードで設定されているため、Node.js環境が必要です。以下のホスティングサービスで動作します：

- **Vercel** - 自動デプロイとサーバーレス関数サポート
- **Render** - 簡単なNode.jsアプリケーションホスティング
- **Railway** - 高速デプロイとスケーリング
- **Fly.io** - グローバル分散型アプリケーション
- **その他のNode.js対応ホスティング**

## 開発ガイドライン

1. **ES Modules**: `type: "module"`でES import/export構文を使用
2. **TypeScript**: 型安全性を重視した開発
3. **Tailwind CSS**: ユーティリティファーストなスタイリング