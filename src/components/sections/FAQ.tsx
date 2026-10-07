'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { faqContent, whatsappConfig, formatWhatsAppLink } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappUrl = formatWhatsAppLink(whatsappConfig.number, whatsappConfig.defaultMessage);

  return (
    <section
      id="faq"
      className="section bg-white"
      aria-labelledby="faq-heading"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="caption text-accent-600">Perguntas Frequentes</span>
          <h2 id="faq-heading" className="mt-4 heading-lg text-balance">FAQ</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4" role="list">
            {faqContent.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <details
                  className="group rounded-xl border border-surface-200 bg-white overflow-hidden transition-all duration-normal"
                  open={openIndex === index}
                  onToggle={() => toggleFAQ(index)}
                >
                  <summary
                    className="flex items-center justify-between p-6 cursor-pointer list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className="text-heading-sm font-semibold text-surface-950 pr-8 text-balance">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-surface-100 flex items-center justify-center transition-transform duration-normal group-open:rotate-180">
                      {openIndex === index ? (
                        <ChevronUp className="h-5 w-5 text-surface-600" aria-hidden="true" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-surface-600" aria-hidden="true" />
                      )}
                    </div>
                  </summary>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="px-6 pb-6"
                        role="region"
                        aria-label={`Resposta: ${faq.question}`}
                      >
                        <div className="prose prose-surface max-w-none">
                          <p className="body text-surface-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </details>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 text-center text-body-sm text-surface-500"
          >
            Não encontrou sua dúvida?{' '}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link font-medium"
            >
              Fale conosco no WhatsApp
            </a>
          </motion.p>
        </div>
      </Container>
    </section>
  );
}