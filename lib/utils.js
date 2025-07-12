import { readFileSync, writeFileSync, existsSync, readdirSync, statSync, mkdirSync, copyFileSync } from 'fs';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';
import { execa } from 'execa';
import chalk from 'chalk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// テンプレート変数を置換
export function replaceTemplateVariables(content, variables) {
  let result = content;
  
  Object.entries(variables).forEach(([key, value]) => {
    const regex = new RegExp(`{{${key}}}`, 'g');
    result = result.replace(regex, value);
  });
  
  return result;
}

// ファイルまたはディレクトリをコピー
export function copyRecursive(source, destination, variables = {}) {
  const stats = statSync(source);
  
  if (stats.isDirectory()) {
    if (!existsSync(destination)) {
      mkdirSync(destination, { recursive: true });
    }
    
    const items = readdirSync(source);
    items.forEach(item => {
      // .gitignore は _gitignore としてテンプレートに保存
      const destItem = item === '_gitignore' ? '.gitignore' : item;
      copyRecursive(join(source, item), join(destination, destItem), variables);
    });
  } else {
    // テンプレート変数を含む可能性のあるファイル
    const templateExtensions = ['.json', '.md', '.js', '.jsx', '.ts', '.tsx', '.html', '.css', '.yml', '.yaml'];
    const shouldProcess = templateExtensions.some(ext => source.endsWith(ext));
    
    if (shouldProcess) {
      const content = readFileSync(source, 'utf-8');
      const processedContent = replaceTemplateVariables(content, variables);
      writeFileSync(destination, processedContent, 'utf-8');
    } else {
      copyFileSync(source, destination);
    }
  }
}

// テンプレートをコピー
export async function copyTemplate(templateName, projectPath, variables) {
  const templatePath = join(__dirname, '..', 'templates', templateName);
  
  if (!existsSync(templatePath)) {
    throw new Error(`テンプレート "${templateName}" が見つかりません`);
  }
  
  copyRecursive(templatePath, projectPath, variables);
}

// Gitリポジトリを初期化
export async function initGitRepo(projectPath) {
  try {
    await execa('git', ['init'], { cwd: projectPath });
    await execa('git', ['add', '.'], { cwd: projectPath });
    await execa('git', ['commit', '-m', 'Initial commit from @ignission/cc-starter'], { cwd: projectPath });
  } catch (error) {
    console.warn(chalk.yellow('\n⚠️  Gitの初期化中にエラーが発生しました:', error.message));
  }
}

// 依存関係をインストール
export async function installDependencies(projectPath) {
  try {
    // pnpmが利用可能かチェック
    await execa('pnpm', ['--version']);
    await execa('pnpm', ['install'], { cwd: projectPath });
  } catch (error) {
    // pnpmが見つからない場合はnpmを使用
    console.warn(chalk.yellow('\n⚠️  pnpmが見つかりません。npmを使用します...'));
    await execa('npm', ['install'], { cwd: projectPath });
  }
}

// プロジェクト名を検証
export function validateProjectName(name) {
  const validName = /^[a-zA-Z0-9-_]+$/;
  
  if (!validName.test(name)) {
    return 'プロジェクト名は英数字、ハイフン、アンダースコアのみを使用してください';
  }
  
  if (name.startsWith('-') || name.startsWith('_')) {
    return 'プロジェクト名はハイフンやアンダースコアで始めることはできません';
  }
  
  return true;
}