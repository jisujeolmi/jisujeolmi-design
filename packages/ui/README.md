# @jisujeolmi/ui

React components for the jisujeolmi Zen design system. Includes theme provider, layout shells, and form components.

## Setup

```bash
npm install @jisujeolmi/ui @jisujeolmi/tokens @fontsource/ibm-plex-sans @fontsource/ibm-plex-mono
```

## Usage

### 1. Inject the theme (root layout)

```tsx
import { ZenProvider } from '@jisujeolmi/ui/theme';
import { generateThemeCSS } from '@jisujeolmi/tokens/css';
import '@jisujeolmi/ui/styles.css';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/500.css';
import '@fontsource/ibm-plex-sans/600.css';

// In your root layout:
<html lang="ko" suppressHydrationWarning>
  <head>
    <style dangerouslySetInnerHTML={{ __html: generateThemeCSS() }} />
  </head>
  <body>
    <ZenProvider>{children}</ZenProvider>
  </body>
</html>
```

### 2. Use components

```tsx
import { ModeSwitch, Sidebar, SidebarBrand, SidebarStats, Topbar, Button, Input, Badge } from '@jisujeolmi/ui';

<Sidebar>
  <SidebarBrand>My App</SidebarBrand>
  <SidebarStats items={[{ label: 'Label', value: 12 }]} />
</Sidebar>
<Topbar title="Page Title" meta="12 items">
  <ModeSwitch />
</Topbar>
<Button variant="primary">Click me</Button>
<Badge variant="positive" dot>Approved</Badge>
```

### Components

- **ZenProvider** / **ModeSwitch** — light/dark theme switching, persisted to localStorage
- **Sidebar** / **SidebarBrand** / **SidebarWorkspace** / **SidebarNav** / **SidebarStats** — app sidebar shell
- **Topbar** — sticky top header bar
- **Workspace** / **Content** — page content area
- **Button** (primary, secondary, ghost, danger) — consistent button styles
- **Input** (with label and error) — form input
- **Badge** (neutral, positive, warning, danger) — status pills
- **Progress** — progress bar
- **Avatar** / **Card** / **CardHeader** / **Toast** — utility components
