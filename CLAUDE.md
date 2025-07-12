# CLAUDE.md

このファイルは、このリポジトリでClaude Code (claude.ai/code)が作業する際のガイダンスを提供します。

## 重要な指示

**ユーザーとの会話は必ず日本語で行ってください。**

## プロジェクト概要

CC-Starterは、Claude Code開発に最適化された新規プロジェクトを作成するCLIテンプレートシステムです。`@ignission/cc-starter`としてnpmに公開され、Ignition Code™の受講生が効率的にアプリを構築できるよう支援します。

## 主要なコマンド

### 開発
```bash
# 依存関係のインストール
pnpm install

# CLIのローカルテスト
node bin/cli.js create test-project

# テンプレートのテスト
cd test-project && pnpm build

# テストの実行（実装後）
pnpm test
```

### CLI使用方法
```bash
# 新規プロジェクトの作成
npx @ignission/cc-starter create <project-name>

# オプション付き
npx @ignission/cc-starter create my-app --template react-native-monorepo --skip-install
```

## アーキテクチャ

### コア構造
- `bin/cli.js` - Commander.jsを使用したCLIエントリーポイント
- `lib/` - コアロジック（create.js、prompts.js、utils.js）
- `templates/` - プロジェクトテンプレート
- `.github/workflows/` - 自動依存関係更新とテスト

### テンプレート

**React Native Monorepo** (`templates/react-native-monorepo/`):
- PNPMワークスペースを使用したMonorepo構造
- `apps/mobile/` - Expoアプリ（習慣トラッカーの例）
- `apps/web/` - React Router v7アプリ（SSR mode）
  - APIエンドポイント機能
  - 管理画面用の認証機能
- `packages/ui/` - 共有コンポーネント
- `packages/utils/` - 共有ユーティリティ
- Vite + Turboによる高速ビルド

**Simple PNPM** (`templates/simple-pnpm/`):
- React Router v7（SSR mode）
- Vite開発サーバーによる高速な開発体験
- TypeScriptとTailwind CSS
- クイックスタート用の最小限のセットアップ
- Node.jsベースのホスティング環境に最適（Vercel、Render、Railway等）
- サーバーサイドレンダリングによるSEO対策とパフォーマンス向上

### 実装ガイドライン

1. **ES Modules**: `type: "module"`とES import/export構文を使用
2. **エラーメッセージ**: 日本語で親しみやすい絵文字付きで表示
3. **Async/Await**: すべての非同期操作で使用
4. **テンプレート構造**: 各テンプレートには使用例を含む`.claude/project.md`を必須で含める

### 自動化とCI/CD

- **Renovate**: 依存関係の自動更新（平日9:00-18:00 JST）
- **GitHub Actions**: テンプレートのテストとリリース自動化
- **asdf**: 環境統一（`.tool-versions`使用）

## 現在の実装状況

プロジェクトは基本機能が完成しています：
1. ✅ Commander.jsを使用した基本的なCLI
2. ✅ テンプレート変数を含むファイルコピー機能
3. ✅ Simple PNPMテンプレート（React Router v7）
4. ⏳ React Native Monorepoテンプレート（未実装）
5. ✅ GitHub Actionsのセットアップ
6. ✅ Renovateによる依存関係管理

## テストアプローチ

変更後は必ずテンプレートをテスト：
1. CLIでテストプロジェクトを作成
2. 生成されたプロジェクトで`pnpm install`を実行
3. `pnpm build`が成功することを確認
4. `.claude/project.md`が正しく生成されていることを確認

## 重要な注意事項

- ターゲットは初心者 - エラーメッセージは親しみやすく
- 習慣トラッカーアプリを実装例として含める
- すべてのテンプレートがClaude Codeでシームレスに動作することを確保
- より良いUXのためにインタラクティブなプロンプトを使用