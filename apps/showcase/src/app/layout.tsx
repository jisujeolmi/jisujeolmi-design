import type { Metadata, Viewport } from 'next';
import { ZenProvider } from '@jisujeolmi/ui/theme';
import { generateThemeCSS } from '@jisujeolmi/tokens/css';
import '@jisujeolmi/ui/styles.css';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/500.css';
import '@fontsource/ibm-plex-sans/600.css';
import '@fontsource/ibm-plex-mono/400.css';

export const metadata: Metadata = {
  title: 'jisujeolmi · Zen Design System',
  description: 'One design system. Every surface.',
  robots: { index: false, follow: false },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html: generateThemeCSS() }} />
      </head>
      <body>
        <ZenProvider>{children}</ZenProvider>
      </body>
    </html>
  );
}
