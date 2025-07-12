---
description: Commit changes with appropriate granularity
allowed-tools: Bash(git add:*), Bash(git commit:*), Bash(git status:*), Bash(git diff:*), Bash(git log:*)
---

## 適切なコミット粒度

### 基本原則
- 1つのコミットには1つの論理的な変更のみを含める
- 関連する変更はまとめて、無関係な変更は分離する
- コミットメッセージから変更内容が明確に理解できる粒度にする

### 良いコミットの例
- ✅ 単一機能の追加: `feat: React Native Monorepoテンプレートを追加`
- ✅ 単一バグの修正: `fix: テンプレートコピー時の変数置換エラーを修正`
- ✅ 関連するリファクタリング: `refactor: プロンプト処理を共通化`
- ✅ 設定の追加: `chore: Biomeの設定を追加`

### 避けるべきコミットの例
- ❌ 複数の無関係な変更: `feat: テンプレート追加、READMEリファクタリング、CI修正`
- ❌ 大きすぎる変更: `feat: CC-Starter全機能を実装`
- ❌ 小さすぎる変更: `fix: タイポ修正` (複数のタイポはまとめる)

### コミット分割の判断基準
1. **機能的な独立性**: 他の変更なしに動作するか
2. **レビューの容易さ**: 差分が理解しやすいサイズか
3. **履歴の追跡性**: 後から特定の変更を見つけやすいか

### 実行例
```bash
# 変更内容を確認
git status
git diff

# 関連する変更のみをステージング
git add lib/create.js
git add lib/prompts.js
git add tests/create.test.js

# コミット
git commit -m "feat: テンプレート選択プロンプトを実装"

# 別の変更を別コミットで
git add templates/react-native-monorepo/
git commit -m "feat: React Native Monorepoテンプレートの基本構造を追加"

# 設定変更は別コミット
git add biome.json package.json
git commit -m "chore: Biomeリンター設定を追加"
```

### CC-Starterプロジェクト特有のコミットタイプ
- `feat`: 新機能（新テンプレート、CLIオプション追加など）
- `fix`: バグ修正（テンプレートのエラー、CLI動作不良など）
- `docs`: ドキュメント（README.md、CLAUDE.md、テンプレート内ドキュメント）
- `chore`: ビルド・設定（GitHub Actions、Renovate、Biome設定など）
- `test`: テスト関連（ユニットテスト、テンプレートテスト）
- `refactor`: リファクタリング（コード整理、型改善など）