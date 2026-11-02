# @jisujeolmi/tokens

Design tokens for the jisujeolmi Zen design system. Platform-neutral values usable from web (CSS custom properties) and React Native.

## Usage

### Web (Next.js / React)

```tsx
import { generateThemeCSS, colors, typography, spacing } from '@jisujeolmi/tokens';

// Inject CSS variables in your root layout
<head>
  <style dangerouslySetInnerHTML={{ __html: generateThemeCSS() }} />
</head>
```

### React Native

```ts
import { colors } from '@jisujeolmi/tokens';
// colors.dark.canvas, colors.dark.accent, etc.
```

## Token reference

See `src/colors.ts`, `src/typography.ts`, `src/spacing.ts`.
