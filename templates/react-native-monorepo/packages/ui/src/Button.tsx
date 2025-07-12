import React from 'react';
import { Pressable, Text, StyleSheet, PressableProps } from 'react-native';

interface ButtonProps extends Omit<PressableProps, 'style'> {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
}

export function Button({ 
  title, 
  variant = 'primary', 
  size = 'medium',
  disabled,
  ...props 
}: ButtonProps) {
  return (
    <Pressable
      style={[
        styles.base,
        styles[variant],
        styles[size],
        disabled && styles.disabled
      ]}
      disabled={disabled}
      {...props}
    >
      <Text style={[
        styles.text,
        styles[`${variant}Text`],
        disabled && styles.disabledText
      ]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  primary: {
    backgroundColor: '#3b82f6',
    borderColor: '#3b82f6',
  },
  secondary: {
    backgroundColor: '#6b7280',
    borderColor: '#6b7280',
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: '#3b82f6',
  },
  small: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    minHeight: 32,
  },
  medium: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 44,
  },
  large: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    minHeight: 56,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
  },
  primaryText: {
    color: '#ffffff',
  },
  secondaryText: {
    color: '#ffffff',
  },
  outlineText: {
    color: '#3b82f6',
  },
  disabledText: {
    opacity: 0.7,
  },
});