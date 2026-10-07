'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { navigation } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { scrollToSection } from '@/lib/utils';
import { Menu, X, LayoutDashboard } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnchorClick = (href: string, closeMenu = false) => {
    if (href.startsWith('#')) {
      if (closeMenu) setIsMobileMenuOpen(false);
      scrollToSection(href);
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-normal',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-surface-200 shadow-sm'
          : 'bg-transparent'
      )}
      role="banner"
    >
      <Container>
        <nav
          className="flex h-16 items-center justify-between gap-4"
          aria-label="Navegação principal"
        >
          <Link
            href="#inicio"
            className="flex items-center gap-2 text-heading-lg font-display font-bold text-surface-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 rounded-md"
            aria-label="Studio - Página inicial"
          >
            <LayoutDashboard className="h-7 w-7 text-accent-600" aria-hidden="true" />
            <span>Studio.</span>
          </Link>

          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-body-sm font-medium text-surface-600 hover:text-surface-900 transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 rounded-md px-2 py-1 -mx-2 -my-1"
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    handleAnchorClick(item.href);
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="accent" className="hidden sm:inline-flex" size="sm">
              Quero minha Landing Page
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        <div
          id="mobile-menu"
          className={cn(
            'md:hidden overflow-hidden transition-all duration-normal ease-in-out',
            isMobileMenuOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
          )}
          role="navigation"
          aria-label="Menu mobile"
        >
          <div className="py-4 space-y-2 border-t border-surface-100">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-2 py-3 text-body font-medium text-surface-600 hover:text-surface-900 hover:bg-surface-50 rounded-lg transition-colors duration-fast"
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    handleAnchorClick(item.href, true);
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="accent" className="w-full mt-2" size="md">
              Quero minha Landing Page
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}