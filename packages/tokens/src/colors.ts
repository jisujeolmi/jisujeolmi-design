/** Zen palette — dark graphite, light stone, lime accent. */
export const colors = {
  dark: {
    canvas:    '#0b0e11',
    surface:   '#13171b',
    elevated:  '#1a1f24',
    hover:     '#232b32',
    text:      '#eef1ec',
    secondary: '#b1b9b4',
    muted:     '#7d8b85',
    border:    '#2b3536',
    accent:    '#b8e08a',
    onAccent:  '#15220c',
    tint:      '#1e2e1c',
    success:   '#7fd9a8',
    warning:   '#e0c070',
    danger:    '#f5999e',
  },
  light: {
    canvas:    '#eef1eb',
    surface:   '#fbfcf8',
    elevated:  '#ffffff',
    hover:     '#e5eae1',
    text:      '#17211c',
    secondary: '#4c5e53',
    muted:     '#5e6e64',
    border:    '#d3dad0',
    accent:    '#3c5e1f',
    onAccent:  '#ffffff',
    tint:      '#e2eed0',
    success:   '#206a3f',
    warning:   '#735214',
    danger:    '#a22c3b',
  },
} as const;

export type ColorMode = keyof typeof colors;
export type ColorToken = keyof (typeof colors)['dark'];
