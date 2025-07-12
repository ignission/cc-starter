import { existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';
import chalk from 'chalk';
import ora from 'ora';
import { copyTemplate, initGitRepo, installDependencies } from './utils.js';
import { promptForMissingOptions } from './prompts.js';

export async function createProject(projectName, options) {
  // プロジェクトディレクトリのパス
  const projectPath = resolve(process.cwd(), projectName);

  // ディレクトリが既に存在するかチェック
  if (existsSync(projectPath)) {
    throw new Error(`ディレクトリ "${projectName}" は既に存在します`);
  }

  // 対話型プロンプトで不足しているオプションを補完
  const finalOptions = await promptForMissingOptions(options);

  // プロジェクトディレクトリを作成
  const spinner = ora('プロジェクトディレクトリを作成中...').start();
  mkdirSync(projectPath, { recursive: true });
  spinner.succeed('プロジェクトディレクトリを作成しました');

  // テンプレートをコピー
  spinner.start('テンプレートをコピー中...');
  await copyTemplate(finalOptions.template, projectPath, {
    projectName,
    ...finalOptions
  });
  spinner.succeed('テンプレートをコピーしました');

  // Gitリポジトリを初期化
  if (!finalOptions.skipGit) {
    spinner.start('Gitリポジトリを初期化中...');
    await initGitRepo(projectPath);
    spinner.succeed('Gitリポジトリを初期化しました');
  }

  // 依存関係をインストール
  if (!finalOptions.skipInstall) {
    spinner.start('依存関係をインストール中...');
    await installDependencies(projectPath);
    spinner.succeed('依存関係をインストールしました');
  }

  // 完了メッセージ
  console.log('\n' + chalk.green('✨ プロジェクトの作成が完了しました！'));
  console.log('\n次のステップ:');
  console.log(chalk.cyan(`  cd ${projectName}`));
  
  if (finalOptions.skipInstall) {
    console.log(chalk.cyan('  pnpm install'));
  }
  
  console.log(chalk.cyan('  pnpm dev'));
  
  // Claude Code用のメッセージ
  console.log('\n' + chalk.blue('📝 Claude Codeでの開発:'));
  console.log(chalk.gray('  プロジェクトディレクトリに移動して、claude.ai/codeで開いてください'));
  console.log(chalk.gray('  .claude/project.md ファイルにプロジェクトの詳細が記載されています'));
}