'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { heroContent } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { scrollToSection } from '@/lib/utils';
import { ArrowRight, Monitor, Smartphone, CheckCircle } from 'lucide-react';

const mockupFeatures = [
  { icon: Monitor, label: 'Desktop' },
  { icon: Smartphone, label: 'Mobile' },
  { icon: CheckCircle, label: 'WhatsApp' },
  { icon: CheckCircle, label: 'Formulário' },
  { icon: CheckCircle, label: 'SEO' },
  { icon: CheckCircle, label: 'Performance' },
];

// Placeholder blur data URL (tiny SVG)
const blurDataUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNGNEY0RjQiLz48dGV4dCB4PSIyMDAiIHk9IjE1MCIgZm9udC1mYW1pbHk9InN5c3RlbSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPk1vY2t1cDwvdGV4dD48L3N2Zz4=';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-gradient-to-b from-white to-surface-50"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-50/50 via-transparent to-transparent" aria-hidden="true" />

      <Container className="relative py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 text-accent-700 text-body-sm font-medium mb-6"
              aria-label="Novo"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-500 opacity-75" aria-hidden="true" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-600" aria-hidden="true" />
              </span>
              Novo: Demonstrações interativas disponíveis
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              className="heading-xl text-balance text-surface-950"
            >
              {heroContent.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="mt-6 body-lg text-balance max-w-xl mx-auto lg:mx-0"
            >
              {heroContent.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 lg:justify-start"
            >
              <Button size="lg" className="w-full sm:w-auto gap-2" asChild>
                <a href="#contato" onClick={(e) => { e.preventDefault(); scrollToSection('#contato'); }}>
                  {heroContent.ctaPrimary}
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto" asChild>
                <a href="#demonstracoes" onClick={(e) => { e.preventDefault(); scrollToSection('#demonstracoes'); }}>
                  {heroContent.ctaSecondary}
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start text-body-sm text-surface-500"
            >
              {heroContent.microcopy.split(' • ').map((item, index) => (
                <span key={index} className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-accent-500" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-surface-200 bg-white shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 border-b border-surface-100 bg-surface-50 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" aria-hidden="true" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" aria-hidden="true" />
                  <span className="w-3 h-3 rounded-full bg-green-400" aria-hidden="true" />
                </div>
                <div className="ml-4 flex-1 text-center text-body-sm text-surface-500 font-mono">
                  landing-page-demo.studio.demo
                </div>
              </div>

              <div className="p-6 md:p-8 bg-white min-h-[400px]">
                <div className="space-y-6">
                  <div className="rounded-xl border border-surface-200 bg-surface-50 p-6">
                    <h3 className="text-heading-md font-semibold text-surface-950 mb-2">
                      Dr. Alexandre Mendes — Cardiologia
                    </h3>
                    <p className="text-body text-surface-600 mb-4">
                      Especialista em saúde do coração com 15+ anos de experiência. Atendimento humanizado e tecnologia de ponta.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button size="sm" asChild>
                        <a href="#contato" onClick={(e) => { e.preventDefault(); scrollToSection('#contato'); }}>Agendar consulta</a>
                      </Button>
                      <Button variant="ghost" size="sm">
                        Ver currículo
                      </Button>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-xl border border-surface-200 bg-white p-5 shadow-sm">
                      <div className="flex items-center gap-2 text-body-sm font-medium text-surface-700 mb-3">
                        <Monitor className="h-4 w-4 text-accent-600" aria-hidden="true" />
                        <span>Desktop</span>
                      </div>
                      <div className="aspect-video bg-surface-100 rounded-lg relative overflow-hidden">
                        <Image
                          src="/mockup-desktop.svg"
                          alt="Mockup Desktop da Landing Page"
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          placeholder="blur"
                          blurDataURL={blurDataUrl}
                          className="object-cover"
                          priority={false}
                        />
                      </div>
                    </div>
                    <div className="rounded-xl border border-surface-200 bg-white p-5 shadow-sm">
                      <div className="flex items-center gap-2 text-body-sm font-medium text-surface-700 mb-3">
                        <Smartphone className="h-4 w-4 text-accent-600" aria-hidden="true" />
                        <span>Mobile</span>
                      </div>
                      <div className="aspect-[9/16] bg-surface-100 rounded-lg relative overflow-hidden">
                        <Image
                          src="/mockup-mobile.svg"
                          alt="Mockup Mobile da Landing Page"
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          placeholder="blur"
                          blurDataURL={blurDataUrl}
                          className="object-cover"
                          priority={false}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-surface-100">
                    <span className="text-body-sm text-surface-500">Recursos incluídos:</span>
                    <div className="flex flex-wrap gap-2">
                      {mockupFeatures.map((feature, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-100 text-body-sm text-surface-600"
                        >
                          <feature.icon className="h-3.5 w-3.5 text-accent-500" aria-hidden="true" />
                          {feature.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 hidden lg:block">
              <div className="w-72 h-72 bg-gradient-to-br from-accent-500/20 to-accent-100 rounded-3xl blur-3xl" aria-hidden="true" />
            </div>
            <div className="absolute -top-6 -left-6 lg:-top-8 lg:-left-8 hidden lg:block">
              <div className="w-72 h-72 bg-gradient-to-br from-accent-500/10 to-transparent rounded-3xl blur-3xl" aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <svg className="h-6 w-6 text-surface-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}