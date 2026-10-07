'use client';

import * as React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { footerContent } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { MessageSquare, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-surface-950 text-surface-400" role="contentinfo">
      <Container className="py-16 lg:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              href="#inicio"
              className="flex items-center gap-2 text-heading-lg font-display font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950 rounded-md"
              aria-label="Studio - Página inicial"
            >
              <span className="text-accent-500">◆</span>
              <span>{footerContent.logo}</span>
            </Link>
            <p className="mt-6 text-body text-surface-500 max-w-xs">{footerContent.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-body-sm text-surface-500 hover:text-white transition-colors duration-fast"
                aria-label="WhatsApp"
              >
                <MessageSquare className="h-5 w-5" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:contato@studio.demo"
                className="flex items-center gap-2 text-body-sm text-surface-500 hover:text-white transition-colors duration-fast"
                aria-label="E-mail"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                <span>contato@studio.demo</span>
              </a>
            </div>
          </div>

          <nav aria-label="Links principais">
            <h3 className="text-heading-sm font-semibold text-white">Navegação</h3>
            <ul className="mt-4 space-y-3" role="list">
              {footerContent.links.principal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-body text-surface-500 hover:text-white transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Links legais">
            <h3 className="text-heading-sm font-semibold text-white">Legal</h3>
            <ul className="mt-4 space-y-3" role="list">
              {footerContent.links.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-body text-surface-500 hover:text-white transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-heading-sm font-semibold text-white">Contato</h3>
            <address className="mt-4 not-italic text-body text-surface-500 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-surface-600" aria-hidden="true" />
                <span>São Paulo, SP — Brasil</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-surface-600" aria-hidden="true" />
                <a
                  href="tel:+5511999999999"
                  className="hover:text-white transition-colors duration-fast"
                >
                  +55 11 99999-9999
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-surface-600" aria-hidden="true" />
                <a
                  href="mailto:contato@studio.demo"
                  className="hover:text-white transition-colors duration-fast"
                >
                  contato@studio.demo
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-surface-800">
          <p className="text-body-sm text-surface-600 text-center">
            {footerContent.copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
}