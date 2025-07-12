import inquirer from 'inquirer';
import chalk from 'chalk';

const TEMPLATES = [
  {
    name: 'Simple PNPM - React Router v7 (SPA mode) + TypeScript + Tailwind CSS',
    value: 'simple-pnpm',
    description: 'シンプルなSPAアプリケーション用のテンプレート'
  },
  {
    name: 'React Native Monorepo - Expo + React Router v7 (SSR) + 共有パッケージ',
    value: 'react-native-monorepo',
    description: 'モバイルアプリとWebアプリを含むMonorepo構成'
  }
];

export async function promptForMissingOptions(options) {
  const questions = [];

  // テンプレートの選択
  if (!options.template || !TEMPLATES.find(t => t.value === options.template)) {
    questions.push({
      type: 'list',
      name: 'template',
      message: 'どのテンプレートを使用しますか？',
      choices: TEMPLATES.map(t => ({
        name: t.name,
        value: t.value,
        short: t.value
      })),
      default: 'simple-pnpm'
    });
  }

  // 追加の質問（テンプレート固有の設定など）
  if (questions.length === 0) {
    // すべてのオプションが提供されている場合
    return {
      template: options.template,
      skipInstall: options.skipInstall || false,
      skipGit: options.skipGit || false
    };
  }

  console.log('\n' + chalk.cyan('プロジェクトの設定を行います...\n'));
  
  const answers = await inquirer.prompt(questions);
  
  return {
    template: answers.template || options.template,
    skipInstall: options.skipInstall || false,
    skipGit: options.skipGit || false
  };
}

// テンプレート固有の追加プロンプト
export async function promptForTemplateSpecificOptions(template) {
  const questions = [];

  switch (template) {
    case 'react-native-monorepo':
      questions.push({
        type: 'input',
        name: 'appName',
        message: 'モバイルアプリの名前を入力してください:',
        default: 'MyApp',
        validate: (input) => {
          if (!input.match(/^[a-zA-Z][a-zA-Z0-9]*$/)) {
            return 'アプリ名は英数字のみで、文字から始まる必要があります';
          }
          return true;
        }
      });
      break;
    
    case 'simple-pnpm':
      // Simple PNPMテンプレートには追加の質問なし
      break;
  }

  if (questions.length === 0) {
    return {};
  }

  return await inquirer.prompt(questions);
}