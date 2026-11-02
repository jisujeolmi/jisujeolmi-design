export const typography = {
  family: {
    sans:    "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono:    "'IBM Plex Mono', 'Fira Code', 'JetBrains Mono', monospace",
  },
  scale: {
    xs:   { size: '0.75rem', lineHeight: '1.5' },   // 12px
    sm:   { size: '0.8125rem', lineHeight: '1.5' },  // 13px
    base: { size: '0.875rem', lineHeight: '1.55' },   // 14px  
    lg:   { size: '1rem', lineHeight: '1.5' },        // 16px
    xl:   { size: '1.125rem', lineHeight: '1.4' },    // 18px
    '2xl':{ size: '1.5rem', lineHeight: '1.3' },      // 24px
    '3xl':{ size: '2rem', lineHeight: '1.2' },        // 32px
  },
  weight: {
    normal:   '400',
    medium:   '500',
    semibold: '600',
  },
} as const;
