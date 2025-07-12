# {{projectName}}

このプロジェクトは@ignission/cc-starterのSimple PNPMテンプレートで作成されました。

## 技術スタック

- **React Router v7** (SPA mode) - 高速な開発体験とルーティング
- **TypeScript** - 型安全な開発
- **Tailwind CSS** - ユーティリティファーストのCSS
- **Vite** - 高速な開発サーバーとビルドツール

## 主要なコマンド

```bash
# 開発サーバーの起動
pnpm dev

# プロダクションビルド
pnpm build

# ビルド後のプレビュー
pnpm start

# 型チェック
pnpm typecheck
```

## プロジェクト構造

```
{{projectName}}/
├── app/
│   ├── routes/
│   │   └── _index.tsx      # ホームページ
│   ├── root.tsx            # アプリケーションのルート
│   ├── entry.client.tsx    # クライアントエントリーポイント
│   └── tailwind.css        # グローバルスタイル
├── public/                 # 静的ファイル
├── .claude/               # Claude Code用の設定
└── package.json
```

## React Router v7の特徴（SPA mode）

このテンプレートはReact Router v7のSPAモードで構成されています：

- **静的ホスティング対応**: Vercel、Netlify、GitHub Pagesなどで簡単にデプロイ可能
- **高速な開発体験**: Viteによる即座のHMR
- **型安全なルーティング**: 自動的な型生成
- **シンプルな構成**: SSRの複雑さなしに、モダンなReactアプリケーションを構築

## 開発の始め方

1. 新しいルートを追加: `app/routes/`ディレクトリに新しいファイルを作成
2. コンポーネントを作成: `app/components/`ディレクトリを作成して再利用可能なコンポーネントを配置
3. スタイリング: Tailwind CSSクラスを使用してスタイリング

## デプロイ

ビルド後の`build/client`ディレクトリを静的ホスティングサービスにデプロイしてください。