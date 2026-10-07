'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ctaFinalContent, formatWhatsAppLink, whatsappConfig } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { ArrowRight, MessageSquare } from 'lucide-react';

export function CtaFinal() {
  const whatsappUrl = formatWhatsAppLink(whatsappConfig.number, whatsappConfig.defaultMessage);

  return (
    <section
      id="contato"
      className="section bg-surface-950 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-900/20 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="caption text-accent-400">CTA Final</span>
          <h2 id="cta-heading" className="mt-4 heading-lg text-white text-balance">
            {ctaFinalContent.headline}
          </h2>
          <p className="mt-6 body-lg text-surface-400 text-balance">
            {ctaFinalContent.description}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="w-full sm:w-auto gap-2" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                {ctaFinalContent.ctaPrimary}
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto gap-2" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="h-5 w-5" aria-hidden="true" />
                {ctaFinalContent.ctaSecondary}
              </a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            className="mt-6 text-body-sm text-surface-500"
          >
            {ctaFinalContent.microcopy}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}