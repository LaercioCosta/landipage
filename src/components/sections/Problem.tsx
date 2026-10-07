'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { problemContent } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { AlertCircle, ShieldAlert, Users } from 'lucide-react';

const ProblemIcons = [AlertCircle, ShieldAlert, Users];

export function Problem() {
  return (
    <section
      id='problema'
      className='section bg-white'
      aria-labelledby='problem-heading'
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className='text-center max-w-3xl mx-auto mb-16'
        >
          <span className='caption text-accent-600'>O Problema</span>
          <h2 id='problem-heading' className='mt-4 heading-lg text-balance'>
            {problemContent.title}
          </h2>
          <p className='mt-6 body-lg text-balance'>{problemContent.description}</p>
        </motion.div>

        <div className='grid md:grid-cols-3 gap-6'>
          {problemContent.cards.map((card, index) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
            >
              <Card variant='outlined' padding='lg' className='h-full'>
                <div className='flex items-start gap-4'>
                  <div className='flex-shrink-0 w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center'>
                    {(() => {
                      const Icon = ProblemIcons[index];
                      return <Icon className='h-6 w-6 text-accent-600' aria-hidden='true' />;
                    })()}
                  </div>
                  <div className='flex-1'>
                    <span className='caption text-accent-600'>{card.number}</span>
                    <h3 className='mt-2 text-heading-sm font-semibold text-surface-950'>{card.title}</h3>
                    <p className='mt-2 body text-surface-600'>{card.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
