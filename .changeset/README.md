# Changesets

このディレクトリはChangesetを使ったバージョン管理とリリース自動化のために使用されます。

## 使い方

### 新しい変更を追加

```bash
pnpm changeset
```

以下の質問に答えてください：
1. どのパッケージを更新するか？ → `@ignission/cc-starter`を選択
2. どのタイプの変更か？
   - `patch` - バグ修正や小さな変更
   - `minor` - 新機能の追加（後方互換性あり）
   - `major` - 破壊的変更
3. 変更の概要を記入

### リリースプロセス

1. mainブランチにマージされると、GitHub ActionsがChangeset PRを自動作成
2. Changeset PRをマージすると、自動的にnpmにパブリッシュ
3. GitHubリリースも自動作成

## 注意事項

- テンプレート内のファイルは無視されます（`templates/**`）
- アクセスは`public`に設定されています
- ベースブランチは`main`です