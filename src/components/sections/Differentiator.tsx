'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { differentiatorContent } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Check, X } from 'lucide-react';

export function Differentiator() {
  return (
    <section
      id="diferencial"
      className="section bg-white"
      aria-labelledby="differentiator-heading"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="caption text-accent-600">Diferencial</span>
          <h2 id="differentiator-heading" className="mt-4 heading-lg text-balance">
            {differentiatorContent.title}
          </h2>
          <p className="mt-6 body-lg text-balance">{differentiatorContent.description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="text-heading-sm font-semibold text-surface-950 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                <X className="h-4 w-4 text-red-600" aria-hidden="true" />
              </span>
              {differentiatorContent.comparison.generic.label}
            </h3>
            <div className="space-y-4">
              {differentiatorContent.comparison.generic.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-100"
                >
                  <X className="h-5 w-5 text-red-500 flex-shrink-0" aria-hidden="true" />
                  <span className="body text-red-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-heading-sm font-semibold text-surface-950 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                <Check className="h-4 w-4 text-green-600" aria-hidden="true" />
              </span>
              {differentiatorContent.comparison.custom.label}
            </h3>
            <div className="space-y-4">
              {differentiatorContent.comparison.custom.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-100"
                >
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" aria-hidden="true" />
                  <span className="body text-green-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}