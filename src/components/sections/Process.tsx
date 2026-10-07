'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { processContent } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Process() {
  return (
    <section
      id="processo"
      className="section bg-surface-50"
      aria-labelledby="process-heading"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="caption text-accent-600">Processo</span>
          <h2 id="process-heading" className="mt-4 heading-lg text-balance">
            {processContent.title}
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-surface-200 -translate-x-1/2 hidden lg:block" aria-hidden="true" />

          <div className="space-y-12 lg:space-y-16">
            {processContent.steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.15 }}
                className={cn('relative flex lg:flex-row', index % 2 === 1 && 'lg:flex-row-reverse')}
              >
                <div className={cn('flex lg:w-1/2 lg:pr-12', index % 2 === 1 && 'lg:pl-12 lg:pr-0')}>
                  <div className={cn('relative w-full max-w-md', index % 2 === 1 && 'ml-auto')}>
                    <div className="relative z-10 rounded-2xl bg-white border border-surface-200 p-8 shadow-sm hover:shadow-lg transition-shadow duration-normal">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center flex-shrink-0">
                          <span className="text-heading-xl font-display font-bold text-accent-600">{step.number}</span>
                        </span>
                        <h3 className="text-heading-md font-semibold text-surface-950">{step.title}</h3>
                      </div>
                      <p className="body text-surface-600">{step.description}</p>
                    </div>

                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent-600 border-4 border-white hidden lg:block z-20" aria-hidden="true" />
                  </div>
                </div>

                <div className={cn('flex lg:w-1/2 lg:pl-12', index % 2 === 1 && 'lg:pr-12 lg:pl-0')}>
                  <div className={cn('relative w-full max-w-md', index % 2 === 0 && 'ml-auto')}>
                    <div className="aspect-[4/3] rounded-2xl bg-surface-100 flex items-center justify-center">
                      <div className="text-center p-6">
                        <p className="text-body text-surface-500">Ilustração da etapa {step.number}</p>
                        <p className="text-body-sm text-surface-400 mt-1">Desktop / Mobile</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}