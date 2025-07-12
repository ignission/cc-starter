import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdirSync, rmSync, readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';
import {
  replaceTemplateVariables,
  copyRecursive,
  validateProjectName
} from '../lib/utils.js';

describe('replaceTemplateVariables', () => {
  it('should replace single variable', () => {
    const content = 'Hello {{name}}!';
    const variables = { name: 'World' };
    const result = replaceTemplateVariables(content, variables);
    expect(result).toBe('Hello World!');
  });

  it('should replace multiple variables', () => {
    const content = '{{greeting}} {{name}}, welcome to {{project}}!';
    const variables = {
      greeting: 'Hello',
      name: 'Developer',
      project: 'CC-Starter'
    };
    const result = replaceTemplateVariables(content, variables);
    expect(result).toBe('Hello Developer, welcome to CC-Starter!');
  });

  it('should replace multiple occurrences of the same variable', () => {
    const content = '{{name}} is awesome! {{name}} rocks!';
    const variables = { name: 'React' };
    const result = replaceTemplateVariables(content, variables);
    expect(result).toBe('React is awesome! React rocks!');
  });

  it('should handle missing variables', () => {
    const content = 'Hello {{name}} and {{unknown}}!';
    const variables = { name: 'World' };
    const result = replaceTemplateVariables(content, variables);
    expect(result).toBe('Hello World and {{unknown}}!');
  });

  it('should handle empty variables object', () => {
    const content = 'No variables here';
    const variables = {};
    const result = replaceTemplateVariables(content, variables);
    expect(result).toBe('No variables here');
  });
});

describe('copyRecursive', () => {
  let tempDir;
  let sourceDir;
  let destDir;

  beforeEach(() => {
    tempDir = join(tmpdir(), `cc-starter-test-${Date.now()}`);
    sourceDir = join(tempDir, 'source');
    destDir = join(tempDir, 'dest');
    
    mkdirSync(sourceDir, { recursive: true });
  });

  afterEach(() => {
    if (existsSync(tempDir)) {
      rmSync(tempDir, { recursive: true, force: true });
    }
  });

  it('should copy single file', () => {
    const filePath = join(sourceDir, 'test.txt');
    const destFilePath = join(destDir, 'test.txt');
    
    // Create source file
    writeFileSync(filePath, 'Hello World');
    
    // Ensure destination directory exists
    mkdirSync(destDir, { recursive: true });
    
    copyRecursive(filePath, destFilePath);
    
    expect(existsSync(destFilePath)).toBe(true);
    expect(readFileSync(destFilePath, 'utf-8')).toBe('Hello World');
  });

  it('should copy directory recursively', () => {
    mkdirSync(join(sourceDir, 'subdir'));
    writeFileSync(join(sourceDir, 'file1.txt'), 'File 1');
    writeFileSync(join(sourceDir, 'subdir', 'file2.txt'), 'File 2');
    
    copyRecursive(sourceDir, destDir);
    
    expect(existsSync(join(destDir, 'file1.txt'))).toBe(true);
    expect(existsSync(join(destDir, 'subdir', 'file2.txt'))).toBe(true);
    expect(readFileSync(join(destDir, 'file1.txt'), 'utf-8')).toBe('File 1');
    expect(readFileSync(join(destDir, 'subdir', 'file2.txt'), 'utf-8')).toBe('File 2');
  });

  it('should rename _gitignore to .gitignore', () => {
    writeFileSync(join(sourceDir, '_gitignore'), 'node_modules/');
    
    copyRecursive(sourceDir, destDir);
    
    expect(existsSync(join(destDir, '.gitignore'))).toBe(true);
    expect(existsSync(join(destDir, '_gitignore'))).toBe(false);
    expect(readFileSync(join(destDir, '.gitignore'), 'utf-8')).toBe('node_modules/');
  });

  it('should process template files with variables', () => {
    const variables = { projectName: 'my-app', author: 'Developer' };
    writeFileSync(join(sourceDir, 'package.json'), '{"name": "{{projectName}}", "author": "{{author}}"}');
    
    copyRecursive(sourceDir, destDir, variables);
    
    const content = readFileSync(join(destDir, 'package.json'), 'utf-8');
    expect(content).toBe('{"name": "my-app", "author": "Developer"}');
  });

  it('should not process binary files', () => {
    const binaryContent = Buffer.from([0x89, 0x50, 0x4E, 0x47]); // PNG header
    writeFileSync(join(sourceDir, 'image.png'), binaryContent);
    
    copyRecursive(sourceDir, destDir);
    
    const copiedContent = readFileSync(join(destDir, 'image.png'));
    expect(copiedContent).toEqual(binaryContent);
  });

  it('should process various template file extensions', () => {
    const variables = { name: 'Test' };
    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.html', '.css', '.yml', '.yaml', '.md'];
    
    extensions.forEach(ext => {
      writeFileSync(join(sourceDir, `file${ext}`), 'Hello {{name}}');
    });
    
    copyRecursive(sourceDir, destDir, variables);
    
    extensions.forEach(ext => {
      const content = readFileSync(join(destDir, `file${ext}`), 'utf-8');
      expect(content).toBe('Hello Test');
    });
  });
});

describe('validateProjectName', () => {
  it('should accept valid project names', () => {
    const validNames = [
      'my-project',
      'my_project',
      'myProject',
      'project123',
      'test-app-2024',
      'APP_NAME'
    ];
    
    validNames.forEach(name => {
      expect(validateProjectName(name)).toBe(true);
    });
  });

  it('should reject names with invalid characters', () => {
    const invalidNames = [
      'my project',  // space
      'my.project',  // dot
      'my@project',  // special char
      'プロジェクト',  // non-ASCII
      'my/project',  // slash
      'my\\project'  // backslash
    ];
    
    invalidNames.forEach(name => {
      const result = validateProjectName(name);
      expect(result).not.toBe(true);
      expect(result).toContain('英数字、ハイフン、アンダースコアのみ');
    });
  });

  it('should reject names starting with hyphen or underscore', () => {
    const invalidNames = ['-project', '_project'];
    
    invalidNames.forEach(name => {
      const result = validateProjectName(name);
      expect(result).not.toBe(true);
      expect(result).toContain('ハイフンやアンダースコアで始めることはできません');
    });
  });
});