'use client';

import { type ComponentProps, type ReactNode } from 'react';
import { Layers3, FileText, Settings2, type LucideIcon } from 'lucide-react';

// ── Sidebar ──
export function Sidebar({ children }: { children: ReactNode }) {
  return <aside className="zen-sidebar">{children}</aside>;
}

export function SidebarBrand({ children, mark = 'Z' }: { children: ReactNode; mark?: string }) {
  return (
    <div className="zen-brand">
      <span className="zen-brand-mark">{mark}</span>
      <span>{children}</span>
    </div>
  );
}

export function SidebarWorkspace({ name, subtitle }: { name: string; subtitle: string }) {
  return (
    <div className="zen-workspace-chip">
      <span className="zen-workspace-avatar">j.</span>
      <div>
        <strong>{name}</strong>
        <small>{subtitle}</small>
      </div>
    </div>
  );
}

export interface NavItem {
  label: string;
  icon?: LucideIcon;
  count?: number;
  active?: boolean;
}

export function SidebarNav({ items }: { items: NavItem[] }) {
  return (
    <nav className="zen-side-nav">
      {items.map(item => {
        const Icon = item.icon || FileText;
        return (
          <a key={item.label} href="#" className={item.active ? 'zen-nav-selected' : ''}>
            <Icon size={16} />
            {item.label}
            {item.count != null && <span className="zen-nav-count">{String(item.count).padStart(2, '0')}</span>}
          </a>
        );
      })}
    </nav>
  );
}

export function SidebarStats({ items }: { items: { label: string; value: string | number; accent?: boolean }[] }) {
  return (
    <div className="zen-sidebar-stats">
      {items.map(s => (
        <div key={s.label} className="zen-stat-row">
          <span className="zen-stat-label">{s.label}</span>
          <span className="zen-num" style={s.accent ? { color: 'var(--accent)' } : undefined}>
            {s.value}
          </span>
        </div>
      ))}
    </div>
  );
}

// ── Top bar ──
export function Topbar({ title, meta, children }: { title: string; meta?: string; children?: ReactNode }) {
  return (
    <header className="zen-topbar">
      <div className="zen-topbar-left">
        <span className="zen-topbar-title">{title}</span>
        {meta && <span className="zen-topbar-meta">{meta}</span>}
      </div>
      <div className="zen-topbar-right">{children}</div>
    </header>
  );
}

// ── Content shell ──
export function Content({ children }: { children: ReactNode }) {
  return <main id="main" className="zen-content">{children}</main>;
}

export function Workspace({ children }: { children: ReactNode }) {
  return <div className="zen-workspace">{children}</div>;
}
