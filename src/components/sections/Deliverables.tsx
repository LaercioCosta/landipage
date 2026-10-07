'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { deliverablesContent } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export function Deliverables() {
  return (
    <section
      id="entregaveis"
      className="section bg-white"
      aria-labelledby="deliverables-heading"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="caption text-accent-600">O Que Você Recebe</span>
          <h2 id="deliverables-heading" className="mt-4 heading-lg text-balance">
            {deliverablesContent.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverablesContent.items.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.07 }}
            >
              <Card variant="outlined" padding="lg" className="h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center mt-0.5">
                    <Check className="h-5 w-5 text-green-600" aria-hidden="true" />
                  </div>
                  <p className="body text-surface-700 font-medium">{item}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}