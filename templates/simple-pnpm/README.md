# {{projectName}}

このプロジェクトは[@ignission/cc-starter](https://github.com/ignission/cc-starter)のSimple PNPMテンプレートで作成されました。

## 開発の始め方

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev

# プロダクションビルド
pnpm build

# ビルド後のプレビュー
pnpm start
```

## 技術スタック

- [React Router v7](https://reactrouter.com/) - SPA mode
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## プロジェクト構造

```
├── app/
│   ├── routes/         # ルートコンポーネント
│   ├── components/     # 再利用可能なコンポーネント
│   ├── root.tsx        # アプリケーションのルート
│   └── entry.client.tsx # クライアントエントリーポイント
├── public/             # 静的ファイル
└── build/              # ビルド出力
```

## デプロイ

このプロジェクトはSPAとして構成されているため、任意の静的ホスティングサービスにデプロイできます：

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

ビルド後の`build/client`ディレクトリの内容をデプロイしてください。