export const spacing = {
  unit: 4,
  scale: {
    0:  '0',
    1:  '4px',
    2:  '8px',
    3:  '12px',
    4:  '16px',
    5:  '20px',
    6:  '24px',
    8:  '32px',
    10: '40px',
    12: '48px',
    16: '64px',
  },
} as const;

export const radius = {
  none: '0',
  sm:   '4px',
  md:   '8px',
  lg:   '12px',
  full: '9999px',
} as const;

export const touch = {
  /** Minimum touch target for mobile (WCAG 2.5.5) */
  target: '44px',
} as const;
