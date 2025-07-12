---
description: Run all quality assurance checks (lint, format, test)
allowed-tools:
  - Bash
---

プロジェクト全体の品質保証チェックを実行します。

## 1. Lintチェック（Biome）
!pnpm lint

## 2. フォーマットチェック（Biome）
!pnpm format

## 3. テスト実行（Vitest）
!pnpm test

## 自動修正オプション

問題が見つかった場合は以下のコマンドで修正：

### 安全な自動修正
!pnpm fix:all  # format + fix

### より積極的な自動修正（unsafe）
!pnpm fix:unsafe

## 補足情報

- **Biome**: コードフォーマットとリントを統合的に管理
- **Vitest**: ユニットテストの実行（lib/内のロジックをテスト）
- **注意**: TypeScriptの型チェックは現在設定されていません（JavaScriptプロジェクトのため）

CLAUDE.mdに記載されている通り、これらすべてのチェックがエラーなく通過する必要があります。