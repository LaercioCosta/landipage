import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { Solution } from '@/components/sections/Solution';
import { Audience } from '@/components/sections/Audience';
import dynamic from 'next/dynamic';

const Demos = dynamic(() => import('@/components/sections/Demos').then(mod => mod.Demos), { ssr: false, loading: () => <div className="section bg-surface-50" aria-hidden="true" /> });
const Deliverables = dynamic(() => import('@/components/sections/Deliverables').then(mod => mod.Deliverables), { ssr: false, loading: () => <div className="section bg-white" aria-hidden="true" /> });
const Process = dynamic(() => import('@/components/sections/Process').then(mod => mod.Process), { ssr: false, loading: () => <div className="section bg-surface-50" aria-hidden="true" /> });
const Differentiator = dynamic(() => import('@/components/sections/Differentiator').then(mod => mod.Differentiator), { ssr: false, loading: () => <div className="section bg-white" aria-hidden="true" /> });
const Showcase = dynamic(() => import('@/components/sections/Showcase').then(mod => mod.Showcase), { ssr: false, loading: () => <div className="section bg-surface-50" aria-hidden="true" /> });
const CtaFinal = dynamic(() => import('@/components/sections/CtaFinal').then(mod => mod.CtaFinal), { ssr: false, loading: () => <div className="section bg-surface-950" aria-hidden="true" /> });
const FAQ = dynamic(() => import('@/components/sections/FAQ').then(mod => mod.FAQ), { ssr: false, loading: () => <div className="section bg-white" aria-hidden="true" /> });

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        <Hero />
        <Problem />
        <Solution />
        <Audience />
        <Demos />
        <Deliverables />
        <Process />
        <Differentiator />
        <Showcase />
        <CtaFinal />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}