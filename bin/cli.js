#!/usr/bin/env node

import { program } from 'commander';
import chalk from 'chalk';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createProject } from '../lib/create.js';

// Get package.json info
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const packageJson = JSON.parse(
  readFileSync(join(__dirname, '..', 'package.json'), 'utf-8')
);

// Configure CLI
program
  .name('cc-starter')
  .description(packageJson.description)
  .version(packageJson.version);

// Create command
program
  .command('create <project-name>')
  .description('新しいプロジェクトを作成します')
  .option('-t, --template <template>', 'テンプレートを選択します', 'simple-pnpm')
  .option('--skip-install', '依存関係のインストールをスキップします')
  .option('--skip-git', 'Gitリポジトリの初期化をスキップします')
  .action(async (projectName, options) => {
    console.log(chalk.cyan(`\n🚀 ${projectName} を作成中...\n`));
    
    try {
      await createProject(projectName, options);
    } catch (error) {
      console.error(chalk.red(`\n❌ エラーが発生しました: ${error.message}\n`));
      process.exit(1);
    }
  });

// Parse arguments
program.parse();

// Show help if no command provided
if (!process.argv.slice(2).length) {
  program.outputHelp();
}