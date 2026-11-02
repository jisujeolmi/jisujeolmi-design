import { type ButtonHTMLAttributes, type InputHTMLAttributes, type ReactNode, forwardRef } from 'react';

// ── Button ──
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md';
}

const btnVariants = {
  primary: 'zen-btn-primary',
  secondary: 'zen-btn-secondary',
  ghost: 'zen-btn-ghost',
  danger: 'zen-btn-danger',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`zen-btn ${btnVariants[variant]} zen-btn-${size} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

// ── Input ──
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className = '', ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/s+/g, '-');
    return (
      <div className="zen-field">
        {label && <label htmlFor={inputId} className="zen-field-label">{label}</label>}
        <input
          ref={ref}
          id={inputId}
          className={`zen-input ${error ? 'zen-input-error' : ''} ${className}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && <p id={`${inputId}-error`} className="zen-field-error" role="alert">{error}</p>}
      </div>
    );
  }
);
Input.displayName = 'Input';

// ── Badge / Pill ──
interface BadgeProps {
  variant?: 'neutral' | 'positive' | 'warning' | 'danger';
  dot?: boolean;
  children: ReactNode;
}

const badgeVariants = {
  neutral: 'zen-pill-neutral',
  positive: 'zen-pill-positive',
  warning: 'zen-pill-warning',
  danger: 'zen-pill-danger',
};

export function Badge({ variant = 'neutral', dot, children }: BadgeProps) {
  return (
    <span className={`zen-pill ${badgeVariants[variant]}`}>
      {dot && <span className="zen-pill-dot" />}
      {children}
    </span>
  );
}

// ── Progress ──
export function Progress({ value, label }: { value: number; label?: string }) {
  return (
    <div role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} aria-label={label} className="zen-progress">
      <span style={{ width: `${value}%` }} />
    </div>
  );
}

// ── Avatar ──
export function Avatar({ children = 'J' }: { children?: ReactNode }) {
  return <span className="zen-avatar">{children}</span>;
}

// ── Toast ──
export function Toast({ visible, onDismiss, children }: { visible: boolean; onDismiss: () => void; children: ReactNode }) {
  return (
    <div role="status" aria-live="polite" className={`zen-toast ${visible ? 'zen-toast-visible' : ''}`}>
      {visible && (
        <>
          {children}
          <button onClick={onDismiss} aria-label="Dismiss" className="zen-toast-dismiss">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </>
      )}
    </div>
  );
}

// ── Card ──
export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`zen-card ${className}`}>{children}</div>;
}
export function CardHeader({ children }: { children: ReactNode }) {
  return <div className="zen-card-header">{children}</div>;
}
