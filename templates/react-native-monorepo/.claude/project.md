# {{projectName}}

このプロジェクトは、CC-Starterテンプレートから生成されたReact Native Monorepoプロジェクトです。

## 🏗️ プロジェクト構成

### アプリケーション
- **apps/mobile/** - Expo React Nativeアプリ（タブナビゲーション付き）
- **apps/web/** - React Router v7 SSRモードのWebアプリ

### 共有パッケージ
- **packages/ui/** - クロスプラットフォーム対応の共有UIコンポーネント
- **packages/utils/** - 共有ユーティリティ関数とバリデーション

## 🚀 開発を始める

### 依存関係のインストール
```bash
pnpm install
```

### 開発サーバーの起動

#### モバイルアプリ（Expo）
```bash
pnpm mobile dev
# または
cd apps/mobile && pnpm dev
```

#### Webアプリ
```bash
pnpm web dev
# または  
cd apps/web && pnpm dev
```

#### 全アプリを同時に起動
```bash
pnpm dev
```

## 📦 利用可能なコマンド

### ルートレベル
- `pnpm build` - すべてのアプリをビルド
- `pnpm dev` - すべてのアプリの開発サーバーを起動
- `pnpm mobile` - mobileアプリのコマンドを実行
- `pnpm web` - webアプリのコマンドを実行

### Mobile App（Expo）
- `pnpm mobile dev` - Expo開発サーバーを起動
- `pnpm mobile build` - 本番用ビルド
- `pnpm mobile lint` - ESLintでコードをチェック

### Web App（React Router v7）
- `pnpm web dev` - 開発サーバーを起動
- `pnpm web build` - 本番用ビルド
- `pnpm web start` - ビルドしたアプリを起動
- `pnpm web lint` - ESLintでコードをチェック
- `pnpm web typecheck` - TypeScriptの型チェック

## 🛠️ 技術スタック

### フロントエンド
- **React 19** - UIライブラリ
- **TypeScript** - 型安全性
- **Expo** - React Native開発環境
- **React Router v7** - Web用ルーティング（SSRモード）

### スタイリング
- **React Native StyleSheet** - モバイル用スタイリング
- **Tailwind CSS** - Web用スタイリング

### 開発ツール
- **PNPM Workspace** - モノレポ管理
- **Turbo** - ビルド最適化
- **ESLint** - コード品質チェック
- **Vite** - 高速ビルドツール

## 📱 アプリ概要

### Mobile App
- タブベースのナビゲーション
- ホーム画面とExplore画面
- Expoの最新機能を活用
- 共有UIコンポーネントを使用

### Web App  
- SSRモード対応のReact Router v7
- レスポンシブデザイン
- ホームページとAboutページ
- Tailwind CSSでスタイリング

## 🔧 カスタマイズ

### 新しいルートの追加（Web）
1. `apps/web/app/routes/` に新しいファイルを作成
2. `apps/web/app/routes.ts` にルートを追加

### 新しい画面の追加（Mobile）
1. `apps/mobile/app/` に新しいファイルを作成
2. Expo Routerが自動的にルートを認識

### 共有コンポーネントの追加
1. `packages/ui/src/` に新しいコンポーネントを作成
2. `packages/ui/src/index.ts` にエクスポートを追加

### 共有ユーティリティの追加
1. `packages/utils/src/` に新しいユーティリティを作成
2. `packages/utils/src/index.ts` にエクスポートを追加

## 🧪 テスト

このテンプレートにはテストフレームワークが含まれています：
- **Vitest** - Web アプリ用
- **Jest/React Native Testing Library** - Mobile アプリ用（設定済み）

テストの実行：
```bash
pnpm test  # すべてのテストを実行
pnpm web test  # Web アプリのテストのみ  
pnpm mobile test  # Mobile アプリのテストのみ
```

## 🚢 デプロイ

### Web App
React Router v7のSSRモードで構築されているため、Node.jsサーバーが必要です：
```bash
pnpm web build
pnpm web start
```

### Mobile App
Expoを使用してアプリストアにデプロイ：
```bash
pnpm mobile build
# ExpoのEASを使用してビルド・デプロイ
```

## 📚 学習リソース

- [React Router v7 ドキュメント](https://reactrouter.com/)
- [Expo ドキュメント](https://docs.expo.dev/)
- [PNPM Workspace](https://pnpm.io/workspaces)
- [Turbo ドキュメント](https://turbo.build/)

## 🤝 開発のヒント

1. **コード共有**: 可能な限り`packages/ui`と`packages/utils`を使用
2. **スタイリング**: プラットフォーム固有のスタイリングを心がける
3. **型安全性**: TypeScriptの型定義を積極的に活用
4. **パフォーマンス**: TurboとPNPMの恩恵を最大化

Happy Coding! 🎉