'use client';

import * as React from 'react';
import { whatsappConfig, formatWhatsAppLink } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { MessageSquare, X } from 'lucide-react';

export function WhatsAppFloat() {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [hasInteracted, setHasInteracted] = React.useState(false);

  const whatsappUrl = formatWhatsAppLink(whatsappConfig.number, whatsappConfig.defaultMessage);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setIsExpanded(true);
      }
    }, 8000);

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHasInteracted(true);
    setIsExpanded(false);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHasInteracted(true);
    setIsExpanded(false);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={cn(
          'fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-accent-600 p-4 shadow-xl transition-all duration-normal hover:bg-accent-700 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent-500/50',
          !isExpanded && 'animate-pulse-soft'
        )}
        aria-label="Falar no WhatsApp"
        aria-expanded={isExpanded}
        aria-controls="whatsapp-dialog"
        id="whatsapp-trigger"
      >
        <MessageSquare className="h-7 w-7 text-white" aria-hidden="true" />
      </button>

      {isExpanded && (
        <div
          id="whatsapp-dialog"
          className="fixed bottom-6 right-6 z-40 w-72 animate-slide-up"
          role="dialog"
          aria-labelledby="whatsapp-dialog-title"
          aria-modal="true"
        >
          <div className="relative bg-white rounded-2xl border border-surface-200 shadow-xl p-5">
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 rounded-lg p-1 text-surface-400 hover:text-surface-600 hover:bg-surface-100 transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
              aria-label="Fechar"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-accent-600" aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 id="whatsapp-dialog-title" className="text-heading-sm font-semibold text-surface-950">Fale conosco no WhatsApp</h4>
                <p className="mt-1 text-body-sm text-surface-500">
                  Clique no botão abaixo para iniciar uma conversa. Responderemos em poucos minutos.
                </p>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block w-full"
              onClick={() => {
                setHasInteracted(true);
                setIsExpanded(false);
              }}
            >
              <button
                className="btn btn-accent w-full justify-center"
                type="button"
              >
                <MessageSquare className="h-4 w-4" aria-hidden="true" />
                Iniciar conversa no WhatsApp
              </button>
            </a>

            <p className="mt-3 text-center text-caption text-surface-400">
              Ao clicar, você será redirecionado para o WhatsApp Web ou App.
            </p>
          </div>
        </div>
      )}
    </>
  );
}