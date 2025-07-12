import React from 'react';
import { Text as RNText, StyleSheet, TextProps as RNTextProps } from 'react-native';

interface TextProps extends RNTextProps {
  variant?: 'body' | 'heading' | 'subheading' | 'caption';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'primary' | 'secondary' | 'muted' | 'error' | 'success';
}

export function Text({ 
  variant = 'body', 
  weight = 'normal',
  color = 'primary',
  style,
  ...props 
}: TextProps) {
  return (
    <RNText
      style={[
        styles.base,
        styles[variant],
        styles[weight],
        styles[color],
        style
      ]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    fontFamily: 'System',
  },
  // Variants
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
  heading: {
    fontSize: 24,
    lineHeight: 32,
  },
  subheading: {
    fontSize: 20,
    lineHeight: 28,
  },
  caption: {
    fontSize: 14,
    lineHeight: 20,
  },
  // Weights
  normal: {
    fontWeight: '400',
  },
  medium: {
    fontWeight: '500',
  },
  semibold: {
    fontWeight: '600',
  },
  bold: {
    fontWeight: '700',
  },
  // Colors
  primary: {
    color: '#111827',
  },
  secondary: {
    color: '#374151',
  },
  muted: {
    color: '#6b7280',
  },
  error: {
    color: '#dc2626',
  },
  success: {
    color: '#16a34a',
  },
});