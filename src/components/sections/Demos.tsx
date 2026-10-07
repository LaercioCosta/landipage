'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { demosContent } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { scrollToSection } from '@/lib/utils';
import { Stethoscope, Scale, Smile, Briefcase, Building2, ChevronRight, Check } from 'lucide-react';

const demoIcons = {
  medicina: Stethoscope,
  advocacia: Scale,
  odontologia: Smile,
  servicos: Briefcase,
  empresas: Building2,
};

const demoMockups = {
  medicina: '/mockup-medicina.svg',
  advocacia: '/mockup-advocacia.svg',
  odontologia: '/mockup-odontologia.svg',
  servicos: '/mockup-servicos.svg',
  empresas: '/mockup-empresas.svg',
};

const blurDataUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDgwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0NTAiIGZpbGw9IiNGNEY0RjQiLz48dGV4dCB4PSI0MDAiIHk9IjIyNSIgZm9udC1mYW1pbHk9InN5c3RlbSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPk1vY2t1cDwvdGV4dD48L3N2Zz4=';

export function Demos() {
  const [activeTab, setActiveTab] = React.useState(demosContent.tabs[0].id);

  return (
    <section
      id="demonstracoes"
      className="section bg-surface-50"
      aria-labelledby="demos-heading"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="caption text-accent-600">DemonstraÃ§Ãµes</span>
          <h2 id="demos-heading" className="mt-4 heading-lg text-balance">
            {demosContent.title}
          </h2>
        </motion.div>

        <div className="mb-10 overflow-x-auto">
          <nav className="flex gap-2 pb-4" role="tablist" aria-label="DemonstraÃ§Ãµes por segmento">
            {demosContent.tabs.map((tab) => {
              const Icon = demoIcons[tab.id as keyof typeof demoIcons] || Briefcase;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={`panel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'flex items-center gap-2 px-5 py-2.5 rounded-full text-body-sm font-medium transition-all duration-fast whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500',
                    activeTab === tab.id
                      ? 'bg-accent-600 text-white shadow-lg'
                      : 'bg-white text-surface-600 hover:text-surface-900 hover:bg-surface-100 border border-surface-200'
                  )}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        <AnimatePresence mode="wait">
          {demosContent.tabs
            .filter((tab) => tab.id === activeTab)
            .map((tab) => (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                id={`panel-${tab.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${tab.id}`}
                className="space-y-8"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <Badge variant="accent" className="mb-4">
                      {tab.label}
                    </Badge>
                    <h3 className="heading-md mb-4">{tab.mockup.headline}</h3>
                    <p className="body-lg text-surface-600 mb-8">{tab.mockup.subheadline}</p>

                    <div className="space-y-3 mb-8">
                      {tab.mockup.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-lg bg-accent-50 flex items-center justify-center flex-shrink-0">
                            <Check className="h-3.5 w-3.5 text-accent-600" aria-hidden="true" />
                          </div>
                          <span className="body text-surface-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button size="lg" asChild>
                      <a href="#contato" onClick={(e) => { e.preventDefault(); scrollToSection('#contato'); }}>
                        {tab.mockup.cta}
                        <ChevronRight className="h-5 w-5" aria-hidden="true" />
                      </a>
                    </Button>
                  </div>

                  <div className="relative">
                    <div className="rounded-2xl border border-surface-200 bg-white shadow-xl overflow-hidden">
                      <div className="flex items-center gap-2 border-b border-surface-100 bg-surface-50 px-4 py-3">
                        <div className="flex gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-red-400" aria-hidden="true" />
                          <span className="w-3 h-3 rounded-full bg-yellow-400" aria-hidden="true" />
                          <span className="w-3 h-3 rounded-full bg-green-400" aria-hidden="true" />
                        </div>
                        <div className="ml-4 flex-1 text-center text-body-sm text-surface-500 font-mono">
                          {tab.id}.studio.demo
                        </div>
                      </div>
                      <div className="relative aspect-video bg-white overflow-hidden">
                        <Image
                          src={demoMockups[tab.id as keyof typeof demoMockups]}
                          alt={`Mockup da demonstraÃ§Ã£o ${tab.label}`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          placeholder="blur"
                          blurDataURL={blurDataUrl}
                          className="object-cover"
                          priority={false}
                        />
                      </div>
                    </div>

                    <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-accent-100/50 rounded-full blur-3xl hidden lg:block" aria-hidden="true" />
                  </div>
                </div>

                <p className="text-center text-body-sm text-surface-500">
                  <strong>Nota:</strong> Este Ã© um exemplo demonstrativo. NÃ£o utiliza nomes reais, CRM, OAB, dados reais,
                  empresas reais, avaliaÃ§Ãµes falsas ou resultados garantidos.
                </p>
              </motion.div>
            ))}
        </AnimatePresence>
      </Container>
    </section>
  );
}
