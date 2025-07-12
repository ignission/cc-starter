import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { existsSync, mkdirSync, rmSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';
import { createProject } from '../lib/create.js';
import * as utils from '../lib/utils.js';
import * as prompts from '../lib/prompts.js';

// Mock the dependencies
vi.mock('../lib/utils.js');
vi.mock('../lib/prompts.js');
vi.mock('ora', () => ({
  default: () => ({
    start: vi.fn().mockReturnThis(),
    succeed: vi.fn().mockReturnThis()
  })
}));

describe('createProject', () => {
  let tempDir;
  let consoleSpy;
  let originalCwd;

  beforeEach(() => {
    tempDir = join(tmpdir(), `cc-starter-test-${Date.now()}`);
    mkdirSync(tempDir, { recursive: true });
    
    // Save original cwd and mock process.cwd
    originalCwd = process.cwd();
    vi.spyOn(process, 'cwd').mockReturnValue(tempDir);
    
    // Mock console.log to suppress output during tests
    consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    
    // Reset all mocks
    vi.clearAllMocks();
  });

  afterEach(() => {
    // Restore original cwd
    vi.mocked(process.cwd).mockReturnValue(originalCwd);
    
    if (existsSync(tempDir)) {
      rmSync(tempDir, { recursive: true, force: true });
    }
    consoleSpy.mockRestore();
    vi.restoreAllMocks();
  });

  it('should create project with default options', async () => {
    const projectName = 'test-project';
    const options = { template: 'simple-pnpm' };
    
    vi.mocked(prompts.promptForMissingOptions).mockResolvedValue({
      template: 'simple-pnpm',
      skipGit: false,
      skipInstall: false
    });
    
    vi.mocked(utils.copyTemplate).mockResolvedValue();
    vi.mocked(utils.initGitRepo).mockResolvedValue();
    vi.mocked(utils.installDependencies).mockResolvedValue();
    
    await createProject(projectName, options);
    
    expect(existsSync(join(tempDir, projectName))).toBe(true);
    expect(prompts.promptForMissingOptions).toHaveBeenCalledWith(options);
    expect(utils.copyTemplate).toHaveBeenCalledWith(
      'simple-pnpm',
      join(tempDir, projectName),
      expect.objectContaining({ projectName })
    );
    expect(utils.initGitRepo).toHaveBeenCalled();
    expect(utils.installDependencies).toHaveBeenCalled();
  });

  it('should skip git initialization when skipGit is true', async () => {
    const projectName = 'test-project';
    const options = { template: 'simple-pnpm', skipGit: true };
    
    vi.mocked(prompts.promptForMissingOptions).mockResolvedValue({
      template: 'simple-pnpm',
      skipGit: true,
      skipInstall: false
    });
    
    vi.mocked(utils.copyTemplate).mockResolvedValue();
    vi.mocked(utils.installDependencies).mockResolvedValue();
    
    await createProject(projectName, options);
    
    expect(utils.initGitRepo).not.toHaveBeenCalled();
    expect(utils.installDependencies).toHaveBeenCalled();
  });

  it('should skip dependency installation when skipInstall is true', async () => {
    const projectName = 'test-project';
    const options = { template: 'simple-pnpm', skipInstall: true };
    
    vi.mocked(prompts.promptForMissingOptions).mockResolvedValue({
      template: 'simple-pnpm',
      skipGit: false,
      skipInstall: true
    });
    
    vi.mocked(utils.copyTemplate).mockResolvedValue();
    vi.mocked(utils.initGitRepo).mockResolvedValue();
    
    await createProject(projectName, options);
    
    expect(utils.initGitRepo).toHaveBeenCalled();
    expect(utils.installDependencies).not.toHaveBeenCalled();
  });

  it('should throw error if directory already exists', async () => {
    const projectName = 'existing-project';
    mkdirSync(join(tempDir, projectName));
    
    await expect(createProject(projectName, {})).rejects.toThrow(
      `ディレクトリ "${projectName}" は既に存在します`
    );
    
    expect(prompts.promptForMissingOptions).not.toHaveBeenCalled();
    expect(utils.copyTemplate).not.toHaveBeenCalled();
  });

  it('should pass all options to copyTemplate', async () => {
    const projectName = 'test-project';
    const options = { 
      template: 'simple-pnpm',
      customOption: 'value'
    };
    
    const finalOptions = {
      template: 'simple-pnpm',
      skipGit: false,
      skipInstall: false,
      customOption: 'value'
    };
    
    vi.mocked(prompts.promptForMissingOptions).mockResolvedValue(finalOptions);
    vi.mocked(utils.copyTemplate).mockResolvedValue();
    vi.mocked(utils.initGitRepo).mockResolvedValue();
    vi.mocked(utils.installDependencies).mockResolvedValue();
    
    await createProject(projectName, options);
    
    expect(utils.copyTemplate).toHaveBeenCalledWith(
      'simple-pnpm',
      join(tempDir, projectName),
      {
        projectName,
        ...finalOptions
      }
    );
  });
});