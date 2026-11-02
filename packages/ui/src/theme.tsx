'use client';

import { ThemeProvider, useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState, type ReactNode } from 'react';

export function ZenProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="data-mode"
      defaultTheme="dark"
      enableSystem={false}
      storageKey="jisu-zen-mode"
      themes={['dark', 'light']}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}

export function ModeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const active = mounted ? theme : undefined;

  return (
    <div className="zen-mode-switch" role="group" aria-label="Color theme">
      <button
        type="button"
        className="zen-mode-light"
        aria-label="Light theme"
        aria-pressed={active === 'light'}
        onClick={() => setTheme('light')}
      >
        <Sun size={15} aria-hidden="true" />
        <span>Light</span>
      </button>
      <button
        type="button"
        className="zen-mode-dark"
        aria-label="Dark theme"
        aria-pressed={active === 'dark'}
        onClick={() => setTheme('dark')}
      >
        <Moon size={15} aria-hidden="true" />
        <span>Dark</span>
      </button>
    </div>
  );
}
