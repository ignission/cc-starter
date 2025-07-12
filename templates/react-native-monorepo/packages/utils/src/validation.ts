export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export function validateRequired(value: string, fieldName: string): ValidationResult {
  const errors: string[] = [];
  
  if (!value || value.trim().length === 0) {
    errors.push(`${fieldName}は必須です`);
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

export function validateEmail(email: string): ValidationResult {
  const errors: string[] = [];
  
  if (!email || email.trim().length === 0) {
    errors.push('メールアドレスは必須です');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('有効なメールアドレスを入力してください');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

export function validatePassword(password: string): ValidationResult {
  const errors: string[] = [];
  
  if (!password) {
    errors.push('パスワードは必須です');
  } else {
    if (password.length < 8) {
      errors.push('パスワードは8文字以上である必要があります');
    }
    if (!/(?=.*[a-z])/.test(password)) {
      errors.push('パスワードには小文字を含める必要があります');
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      errors.push('パスワードには大文字を含める必要があります');
    }
    if (!/(?=.*\d)/.test(password)) {
      errors.push('パスワードには数字を含める必要があります');
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

export function validateForm(fields: Record<string, any>, rules: Record<string, (value: any) => ValidationResult>): ValidationResult {
  const allErrors: string[] = [];
  
  for (const [fieldName, validator] of Object.entries(rules)) {
    const result = validator(fields[fieldName]);
    if (!result.isValid) {
      allErrors.push(...result.errors);
    }
  }
  
  return {
    isValid: allErrors.length === 0,
    errors: allErrors
  };
}