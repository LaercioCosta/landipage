'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { audienceContent } from '@/lib/constants';
import { Users, Building2, Briefcase, Stethoscope, Scale, Smile, Brain, Heart, Activity, Home, Laptop } from 'lucide-react';

const audienceIcons = {
  Médicos: Stethoscope,
  Dentistas: Smile,
  Advogados: Scale,
  Psicólogos: Brain,
  Nutricionistas: Heart,
  Fisioterapeutas: Activity,
  Clínicas: Building2,
  Arquitetos: Home,
  Engenheiros: Laptop,
  Contadores: Briefcase,
  Consultores: Users,
  Corretores: Building2,
  Empresas: Building2,
  'Profissionais autônomos': Briefcase,
};

export function Audience() {
  return (
    <section
      id="para-quem"
      className="section bg-white"
      aria-labelledby="audience-heading"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="caption text-accent-600">Para Quem É</span>

          <h2
            id="audience-heading"
            className="mt-4 heading-lg text-balance"
          >
            {audienceContent.title}
          </h2>

          <p className="mt-6 body-lg text-balance">
            {audienceContent.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {audienceContent.segments.map((segment, index) => {
            const Icon =
              audienceIcons[segment as keyof typeof audienceIcons] || Users;

            return (
              <motion.div
                key={segment}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: 0.5,
                  ease: 'easeOut',
                  delay: index * 0.05,
                }}
              >
                <Badge
                  variant="outline"
                  className="w-full justify-center gap-2 h-auto py-4 px-4 text-body"
                >
                  <Icon
                    className="h-5 w-5 text-accent-600"
                    aria-hidden="true"
                  />
                  {segment}
                </Badge>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
