'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading,
      children,
      disabled,
      asChild,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
      primary:
        'bg-surface-900 text-white hover:bg-surface-700 active:scale-[0.98] hover:shadow-lg focus-visible:ring-surface-900',
      secondary:
        'bg-white text-surface-900 border border-surface-300 hover:bg-surface-50 active:scale-[0.98] focus-visible:ring-surface-400',
      accent:
        'bg-accent-600 text-white hover:bg-accent-700 active:scale-[0.98] hover:shadow-lg focus-visible:ring-accent-600',
      ghost:
        'bg-transparent text-surface-600 hover:bg-surface-100 active:scale-[0.98] focus-visible:ring-surface-400',
    };

    const sizes = {
      sm: 'px-4 py-2 text-body-sm min-h-[44px]',
      md: 'px-6 py-3 text-body min-h-[44px]',
      lg: 'px-8 py-4 text-body-lg min-h-[48px]',
    };

    const buttonClassName = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    if (asChild) {
      const child = React.Children.only(
        children
      ) as React.ReactElement<{
        className?: string;
        disabled?: boolean;
      }>;

      return React.cloneElement(child, {
        className: cn(
          buttonClassName,
          child.props.className
        ),
        disabled: disabled || isLoading,
      });
    }

    return (
      <button
        ref={ref}
        className={buttonClassName}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}

        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
