# CC-Starter

Claude Code開発に最適化されたプロジェクトテンプレートシステム

## 概要

**CC-Starter**は、Claude Codeとの対話型開発に最適化されたプロジェクトテンプレートシステムです。Ignition Code™の受講生が効率的にアプリを構築できるよう支援します。

### 主な特徴

- 🚀 **高速セットアップ**: 1コマンドで完全なプロジェクト環境を構築
- 🎯 **Claude Code最適化**: `.claude/project.md`でAI開発をサポート
- 🔄 **自動更新**: Renovateによる依存関係の自動管理
- 📱 **モダンスタック**: React Router v7、TypeScript、Tailwind CSS
- 🛠️ **開発者体験**: Viteによる高速開発とHMR

## クイックスタート

```bash
# プロジェクトを作成
npx @ignission/cc-starter create my-app

# 開発開始
cd my-app
pnpm dev
```

## 利用可能なテンプレート

### Simple PNPM
シンプルなSSRアプリケーション向け

- React Router v7 (SSR mode)
- TypeScript + Tailwind CSS
- Vite開発環境
- Node.jsホスティング対応（Vercel、Render、Railway等）
- SEO対策とパフォーマンス最適化

```bash
npx @ignission/cc-starter create my-app --template simple-pnpm
```

### React Native Monorepo（開発予定）
モバイル + Webのフルスタック開発向け

- Expo + React Router v7 (SSR)
- PNPM Workspace + Turbo
- 共有UIコンポーネント
- API統合準備

## コマンドオプション

```bash
# テンプレート指定
npx @ignission/cc-starter create my-app --template simple-pnpm

# 依存関係インストールをスキップ
npx @ignission/cc-starter create my-app --skip-install

# Git初期化をスキップ
npx @ignission/cc-starter create my-app --skip-git
```

## 技術スタック

### コアライブラリ
- **CLI**: Commander.js + Inquirer.js
- **ファイル操作**: fs-extra + execa
- **UI**: chalk + ora（スピナー）

### テンプレート技術
- **フロントエンド**: React Router v7、TypeScript、Tailwind CSS
- **ビルドツール**: Vite
- **パッケージマネージャー**: PNPM

### 自動化
- **CI/CD**: GitHub Actions + asdf
- **依存関係管理**: Renovate
- **リリース**: Changesets

## 開発

### 要件
- Node.js 20+
- PNPM 8+

### セットアップ

```bash
# リポジトリをクローン
git clone https://github.com/ignission/cc-starter.git
cd cc-starter

# 依存関係をインストール
pnpm install

# CLIをテスト
node bin/cli.js create test-project
```

### テンプレートのテスト

```bash
# テストプロジェクトを作成
node bin/cli.js create test-project --skip-git

# ビルドテスト
cd test-project
pnpm install
pnpm build
pnpm typecheck
```

## ライセンス

MIT License - 詳細は [LICENSE](LICENSE) ファイルを参照してください。

## コントリビューション

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## サポート

- [GitHub Issues](https://github.com/ignission/cc-starter/issues)
- [Ignition Code™](https://ignission.io)