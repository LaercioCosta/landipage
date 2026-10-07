'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { showcaseContent } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Monitor, Smartphone, MessageSquare, Mail, Search, Zap, Check } from 'lucide-react';

const showcaseIcons = {
  monitor: Monitor,
  smartphone: Smartphone,
  'message-square': MessageSquare,
  mail: Mail,
  search: Search,
  zap: Zap,
};

const blurDataUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNGNEY0RjQiLz48dGV4dCB4PSIyMDAiIHk9IjE1MCIgZm9udC1mYW1pbHk9InN5c3RlbSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPk1vY2t1cDwvdGV4dD48L3N2Zz4=';

const showcaseMockups = {
  Desktop: '/mockup-desktop.svg',
  Mobile: '/mockup-mobile.svg',
};

export function Showcase() {
  return (
    <section
      id="case"
      className="section bg-surface-50"
      aria-labelledby="showcase-heading"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="caption text-accent-600">Portfólio</span>
          <h2 id="showcase-heading" className="mt-4 heading-lg text-balance">
            {showcaseContent.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {['Desktop', 'Mobile'].map((device, deviceIndex) => (
            <motion.div
              key={device}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: deviceIndex * 0.15 }}
            >
              <Card variant="elevated" padding="none" className="h-full overflow-hidden">
                <div className="flex items-center gap-2 border-b border-surface-100 bg-surface-50 px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400" aria-hidden="true" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" aria-hidden="true" />
                    <span className="w-3 h-3 rounded-full bg-green-400" aria-hidden="true" />
                  </div>
                  <div className="ml-4 text-center text-body-sm text-surface-500 font-mono">
                    landing-page-case.studio.demo
                  </div>
                </div>
                <div className="p-8 min-h-[350px] flex items-center justify-center relative">
                  <div className={cn(
                    'rounded-xl border-2 border-surface-200 bg-white shadow-xl relative overflow-hidden',
                    device === 'Desktop' ? 'w-[400px] aspect-[16/10]' : 'w-[180px] aspect-[9/19.5]'
                  )}>
                    <Image
                      src={showcaseMockups[device as keyof typeof showcaseMockups]}
                      alt={`Mockup ${device} do case Studio`}
                      fill
                      sizes={device === 'Desktop' ? '(max-width: 1024px) 100vw, 50vw' : '(max-width: 640px) 100vw, 33vw'}
                      placeholder="blur"
                      blurDataURL={blurDataUrl}
                      className="object-cover"
                      priority={device === 'Desktop'}
                    />
                    {device === 'Mobile' && (
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-100/50 rounded-full blur-2xl" aria-hidden="true" />
                    )}
                  </div>
                <div className="px-6 pb-6">
                  <Badge variant="accent" className="text-caption">{device}</Badge>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {showcaseContent.labels.map((label, index) => {
            const Icon = showcaseIcons[label.icon as keyof typeof showcaseIcons] || Check;
            return (
              <motion.div
                key={label.text}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card variant="outlined" padding="md" className="text-center h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-6 w-6 text-accent-600" aria-hidden="true" />
                  </div>
                  <h4 className="text-heading-sm font-semibold text-surface-950">{label.text}</h4>
                  <p className="mt-1 body-sm text-surface-500">Incluso em todos os projetos</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}