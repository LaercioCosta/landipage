'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { solutionContent } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Palette, Smartphone, Target, Settings } from 'lucide-react';

const solutionIcons = {
  palette: Palette,
  smartphone: Smartphone,
  target: Target,
  settings: Settings,
};

export function Solution() {
  return (
    <section
      id="solucoes"
      className="section bg-surface-50"
      aria-labelledby="solution-heading"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="caption text-accent-600">A Solução</span>
          <h2 id="solution-heading" className="mt-4 heading-lg text-balance">
            {solutionContent.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutionContent.cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
            >
              <Card variant="default" padding="lg" className="h-full">
                <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center mb-4">
                  <solutionIcons[card.icon as keyof typeof solutionIcons]
                    className="h-6 w-6 text-accent-600"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-heading-sm font-semibold text-surface-950 mb-2">
                  {card.title}
                </h3>
                <p className="body text-surface-600">{card.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}