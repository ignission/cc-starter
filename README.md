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

### React Native Monorepo（開発中）
モバイル + Webのフルスタック開発向け

- Expo + React Router v7 (SSR)
- PNPM Workspace + Turbo
- 共有UIコンポーネント（packages/ui）
- 共有ユーティリティ（packages/utils）
- 習慣トラッカーアプリの実装例（予定）

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
- **テスト**: Vitest + @vitest/ui

### テンプレート技術
- **フロントエンド**: React Router v7、TypeScript、Tailwind CSS
- **ビルドツール**: Vite
- **パッケージマネージャー**: PNPM
- **コンテナ**: Docker対応（Dockerfile付属）

### 自動化
- **CI/CD**: GitHub Actions + asdf
- **依存関係管理**: Renovate（平日9:00-18:00 JST）
- **リリース**: Changesets

## 開発

### 要件
- Node.js 24.4.0+（asdf推奨）
- PNPM 10.13.1+

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

### テスト実行

```bash
# ユニットテストの実行
pnpm test

# テストカバレッジ確認
pnpm test:coverage

# テンプレートの動作確認
node bin/cli.js create test-project --skip-git
cd test-project
pnpm install
pnpm build
pnpm typecheck
```

## プロジェクト構造

```
cc-starter/
├── bin/
│   └── cli.js           # CLIエントリーポイント
├── lib/
│   ├── create.js        # プロジェクト作成ロジック
│   ├── prompts.js       # インタラクティブプロンプト
│   └── utils.js         # ユーティリティ関数
├── templates/
│   ├── simple-pnpm/     # React Router v7テンプレート
│   └── react-native-monorepo/  # Monorepoテンプレート（開発中）
├── tests/               # ユニットテスト
└── .github/workflows/   # CI/CD設定
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