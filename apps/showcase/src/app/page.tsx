'use client';

import { useState } from 'react';
import { Check, ArrowRight, GitBranch, Layers3, Settings2, FileText, RefreshCw } from 'lucide-react';
import {
  ModeSwitch, Sidebar, SidebarBrand, SidebarWorkspace, SidebarNav, SidebarStats,
  Topbar, Content, Workspace, Button, Input, Badge, Progress, Avatar, Toast, Card, CardHeader
} from '@jisujeolmi/ui';
import type { NavItem } from '@jisujeolmi/ui';

const navItems: NavItem[] = [
  { label: 'Overview', icon: Layers3, active: true },
  { label: 'Tasks', icon: FileText, count: 8 },
  { label: 'Settings', icon: Settings2 },
];

export default function Home() {
  const [notice, setNotice] = useState('');

  return (
    <div className="zen-app">
      <a className="zen-skip-link" href="#main">Skip to content</a>

      <Sidebar>
        <SidebarBrand>Orchestrator</SidebarBrand>
        <SidebarWorkspace name="jisujeolmi" subtitle="Personal workspace" />
        <SidebarNav items={navItems} />
        <SidebarStats items={[
          { label: 'Active', value: 5 },
          { label: 'Review', value: 3, accent: true },
          { label: 'Done', value: 12 },
        ]} />
      </Sidebar>

      <Workspace>
        <Topbar title="Design System" meta="v1.0.0">
          <ModeSwitch />
          <Avatar>J</Avatar>
        </Topbar>

        <Content>
          {/* Hero */}
          <section style={{ marginBottom: 40 }}>
            <h1 style={{ fontSize: 24, fontWeight: 600, marginBottom: 8 }}>Zen Design System</h1>
            <p style={{ color: 'var(--muted)', maxWidth: 520, lineHeight: 1.7, marginBottom: 24 }}>
              One design system for all jisujeolmi projects. Dark graphite + lime accent.
              Flat surfaces, single typeface, 44px touch targets.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              <Button variant="primary" onClick={() => setNotice('Started! This is a demo.')}>
                <Check size={16} />Get started
              </Button>
              <Button variant="secondary">View on GitHub</Button>
            </div>
          </section>

          {/* Component Showcase */}
          <div style={{ display: 'grid', gap: 24 }}>
            {/* Buttons */}
            <Card>
              <CardHeader><h2>Buttons</h2></CardHeader>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="primary" disabled>Disabled</Button>
              </div>
            </Card>

            {/* Inputs */}
            <Card>
              <CardHeader><h2>Inputs</h2></CardHeader>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
                <Input label="Email" placeholder="hello@example.com" />
                <Input label="Password" type="password" placeholder="••••••••" />
                <Input label="Branch name" error="Already exists" defaultValue="feat/task-retry" />
              </div>
            </Card>

            {/* Badges */}
            <Card>
              <CardHeader><h2>Badges & Progress</h2></CardHeader>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                <Badge variant="neutral">Draft</Badge>
                <Badge variant="positive" dot>Approved</Badge>
                <Badge variant="warning" dot>2/3 checks</Badge>
                <Badge variant="danger">Failed</Badge>
              </div>
              <Progress value={72} label="Build progress" />
            </Card>

            {/* Sample task list */}
            <Card>
              <CardHeader>
                <h2>Sample Tasks</h2>
                <Badge variant="neutral">3 items</Badge>
              </CardHeader>
              <div style={{ display: 'grid', gap: 0 }}>
                {[
                  { id: 'ORC-42', title: 'Retry failed tasks', branch: 'feat/task-retry', checks: [true, true, false] },
                  { id: 'ORC-39', title: 'Dependency order check', branch: 'feat/dependency-check', checks: [true, false] },
                  { id: 'WEB-23', title: 'Dark/light mode persistence', branch: 'ui/color-mode', checks: [true, false] },
                ].map((task, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 12, padding: '14px 0',
                    borderBottom: i < 2 ? '1px solid var(--hover)' : 'none'
                  }}>
                    <span style={{ fontSize: 12, color: 'var(--muted)', width: 54, flexShrink: 0 }}>{task.id}</span>
                    <span style={{ flex: 1 }}>
                      <span style={{ display: 'block', fontSize: 14, fontWeight: 500 }}>{task.title}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>
                        <GitBranch size={12} />{task.branch}
                      </span>
                    </span>
                    <Badge variant={task.checks.every(Boolean) ? 'positive' : 'warning'} dot>
                      {task.checks.filter(Boolean).length}/{task.checks.length}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Content>
      </Workspace>

      <Toast visible={!!notice} onDismiss={() => setNotice('')}>
        <span>{notice}</span>
      </Toast>
    </div>
  );
}
