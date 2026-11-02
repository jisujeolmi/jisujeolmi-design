import { colors, type ColorMode } from './colors.js';
import { typography } from './typography.js';
import { spacing, radius } from './spacing.js';

/**
 * Generate CSS custom properties for the Zen theme.
 * Call once in your root layout to inject the palette.
 */
export function generateCSS(mode: ColorMode = 'dark'): string {
  const c = colors[mode];
  const vars: string[] = [
    // colors
    ...Object.entries(c).map(([k, v]) => `--${k}: ${v}`),
    // typography
    `--font-sans: ${typography.family.sans}`,
    `--font-mono: ${typography.family.mono}`,
    // body size
    `--text-base: ${typography.scale.base.size}`,
    `--leading-base: ${typography.scale.base.lineHeight}`,
    // spacing unit
    `--space-unit: ${spacing.unit}px`,
    // radius
    `--radius-card: ${radius.md}`,
    `--radius-control: ${radius.sm}`,
    // touch target
    `--touch-target: ${touchTarget()}`,
    // color scheme
    `color-scheme: ${mode}`,
  ];
  return `:root { ${vars.join('; ')} }`;
}

function touchTarget(): string {
  return '44px';
}

/**
 * Generate both dark (default) and light mode CSS.
 * Dark mode: :root or [data-mode="dark"]
 * Light mode: [data-mode="light"]
 */
export function generateThemeCSS(): string {
  return [
    generateCSS('dark'),
    `[data-mode="light"] { ${generateCSS('light')} }`,
  ].join('\n');
}
