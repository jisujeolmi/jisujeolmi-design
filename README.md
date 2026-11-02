# jisujeolmi · Zen Design System

**One design system for all jisujeolmi projects — web, mobile, consistent.**

| Package | Description |
|---|---|
| [@jisujeolmi/tokens](./packages/tokens) | Colors, typography, spacing — CSS & React Native compatible |
| [@jisujeolmi/ui](./packages/ui) | React components — theme, layout, buttons, inputs, badges |
| [apps/showcase](./apps/showcase) | Example Next.js app using the design system |

## Quick start

```bash
git clone https://github.com/jacksonlee9314/jisujeolmi-design.git
cd jisujeolmi-design
npm install
npm run build        # build tokens + ui packages
npm run dev          # start showcase app (http://localhost:3000)
```

## Using in a new project

```bash
npm install @jisujeolmi/tokens @jisujeolmi/ui
npm install @fontsource/ibm-plex-sans @fontsource/ibm-plex-mono
```

Then follow the setup in [@jisujeolmi/ui/README.md](./packages/ui/README.md).

## Design principles

- **Dark by default**, light is one click away
- **Single typeface** — IBM Plex Sans (IBM Plex Mono for code/IDs)
- **Flat surfaces** — no gradients, glows, or glass effects
- **One accent color** — lime on dark, forest green on light
- **12px minimum text** — readable at every size
- **44px touch targets** — works on mobile with one thumb
