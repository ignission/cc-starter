import { describe, it, expect, vi, beforeEach } from 'vitest';
import inquirer from 'inquirer';
import { 
  promptForMissingOptions, 
  promptForTemplateSpecificOptions 
} from '../lib/prompts.js';

// Mock inquirer
vi.mock('inquirer');

describe('promptForMissingOptions', () => {
  let consoleSpy;

  beforeEach(() => {
    vi.clearAllMocks();
    consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  it('should return provided options if all are valid', async () => {
    const options = {
      template: 'simple-pnpm',
      skipInstall: true,
      skipGit: false
    };

    const result = await promptForMissingOptions(options);

    expect(result).toEqual({
      template: 'simple-pnpm',
      skipInstall: true,
      skipGit: false
    });
    expect(inquirer.prompt).not.toHaveBeenCalled();
  });

  it('should prompt for template if not provided', async () => {
    const options = {};
    
    vi.mocked(inquirer.prompt).mockResolvedValue({
      template: 'simple-pnpm'
    });

    const result = await promptForMissingOptions(options);

    expect(inquirer.prompt).toHaveBeenCalledWith([
      expect.objectContaining({
        type: 'list',
        name: 'template',
        message: 'どのテンプレートを使用しますか？',
        default: 'simple-pnpm'
      })
    ]);

    expect(result).toEqual({
      template: 'simple-pnpm',
      skipInstall: false,
      skipGit: false
    });
  });

  it('should prompt for template if invalid template provided', async () => {
    const options = {
      template: 'invalid-template'
    };
    
    vi.mocked(inquirer.prompt).mockResolvedValue({
      template: 'react-native-monorepo'
    });

    const result = await promptForMissingOptions(options);

    expect(inquirer.prompt).toHaveBeenCalled();
    expect(result.template).toBe('react-native-monorepo');
  });

  it('should use default values for skipInstall and skipGit', async () => {
    const options = {
      template: 'simple-pnpm'
    };

    const result = await promptForMissingOptions(options);

    expect(result.skipInstall).toBe(false);
    expect(result.skipGit).toBe(false);
  });

  it('should preserve skipInstall and skipGit from options', async () => {
    const options = {
      template: 'simple-pnpm',
      skipInstall: true,
      skipGit: true
    };

    const result = await promptForMissingOptions(options);

    expect(result.skipInstall).toBe(true);
    expect(result.skipGit).toBe(true);
  });
});

describe('promptForTemplateSpecificOptions', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return empty object for simple-pnpm template', async () => {
    const result = await promptForTemplateSpecificOptions('simple-pnpm');
    
    expect(result).toEqual({});
    expect(inquirer.prompt).not.toHaveBeenCalled();
  });

  it('should prompt for app name for react-native-monorepo template', async () => {
    vi.mocked(inquirer.prompt).mockResolvedValue({
      appName: 'MyTestApp'
    });

    const result = await promptForTemplateSpecificOptions('react-native-monorepo');

    expect(inquirer.prompt).toHaveBeenCalledWith([
      expect.objectContaining({
        type: 'input',
        name: 'appName',
        message: 'モバイルアプリの名前を入力してください:',
        default: 'MyApp'
      })
    ]);

    expect(result).toEqual({
      appName: 'MyTestApp'
    });
  });

  it('should validate app name for react-native-monorepo', async () => {
    await promptForTemplateSpecificOptions('react-native-monorepo');

    const validateFn = vi.mocked(inquirer.prompt).mock.calls[0][0][0].validate;

    expect(validateFn('MyApp')).toBe(true);
    expect(validateFn('MyApp123')).toBe(true);
    expect(validateFn('123App')).toBe('アプリ名は英数字のみで、文字から始まる必要があります');
    expect(validateFn('My-App')).toBe('アプリ名は英数字のみで、文字から始まる必要があります');
    expect(validateFn('My App')).toBe('アプリ名は英数字のみで、文字から始まる必要があります');
  });

  it('should return empty object for unknown template', async () => {
    const result = await promptForTemplateSpecificOptions('unknown-template');
    
    expect(result).toEqual({});
    expect(inquirer.prompt).not.toHaveBeenCalled();
  });
});