export const siteConfig = {
  name: 'Studio.',
  description: 'Landing Pages profissionais para negócios que querem crescer.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://studio.demo',
  ogImage: '/og-image.png',
  links: {
    twitter: 'https://twitter.com/studio',
    github: 'https://github.com/studio',
    linkedin: 'https://linkedin.com/company/studio',
  },
};

export const whatsappConfig = {
  number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511999999999',
  defaultMessage:
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
    'Olá! Vi a demonstração de Landing Pages e gostaria de saber mais sobre um projeto para meu negócio.',
};

export function formatWhatsAppLink(number: string, message: string) {
  const cleanNumber = number.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}

export const navigation = [
  { label: 'Início', href: '#inicio' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Exemplos', href: '#demonstracoes' },
  { label: 'Processo', href: '#processo' },
  { label: 'FAQ', href: '#faq' },
];

export const heroContent = {
  headline: 'Uma presença digital à altura do seu trabalho.',
  subheadline:
    'Landing Pages profissionais, modernas e estratégicas para transformar visitantes em clientes.',
  ctaPrimary: 'Quero minha Landing Page',
  ctaSecondary: 'Ver demonstração',
  microcopy: 'Design personalizado • Responsivo • Focado em conversão',
};

export const problemContent = {
  title: 'Seu trabalho é profissional. Seu site também deveria ser.',
  description:
    'Muitos profissionais oferecem excelentes serviços, mas perdem oportunidades porque sua presença digital não transmite a mesma qualidade que entregam pessoalmente.',
  cards: [
    {
      number: '01',
      title: 'Site desatualizado',
      description: 'Visual antigo passa a impressão de serviço desatualizado.',
    },
    {
      number: '02',
      title: 'Pouca credibilidade online',
      description: 'Falta de profissionalismo digital afasta clientes qualificados.',
    },
    {
      number: '03',
      title: 'Visitantes que não entram em contato',
      description: 'Páginas sem estratégia de conversão não geram leads.',
    },
  ],
};

export const solutionContent = {
  title: 'Transforme sua presença online em uma ferramenta de negócios.',
  cards: [
    {
      title: 'Design Premium',
      description: 'Visual moderno e alinhado à identidade do seu negócio.',
      icon: 'palette',
    },
    {
      title: 'Responsividade',
      description: 'Experiência perfeita em celular, tablet e computador.',
      icon: 'smartphone',
    },
    {
      title: 'Conversão',
      description: 'Elementos estratégicos para incentivar o visitante a entrar em contato.',
      icon: 'target',
    },
    {
      title: 'Personalização',
      description: 'Cada projeto é desenvolvido de acordo com seu negócio e público.',
      icon: 'settings',
    },
  ],
};

export const audienceContent = {
  title: 'Feita para profissionais que querem se destacar.',
  subtitle:
    'Seu segmento muda. A estratégia continua: apresentar seu trabalho com clareza, autoridade e profissionalismo.',
  segments: [
    'Médicos',
    'Dentistas',
    'Advogados',
    'Psicólogos',
    'Nutricionistas',
    'Fisioterapeutas',
    'Clínicas',
    'Arquitetos',
    'Engenheiros',
    'Contadores',
    'Consultores',
    'Corretores',
    'Empresas',
    'Profissionais autônomos',
  ],
};

export const demosContent = {
  title: 'Um projeto. Diferentes possibilidades.',
  tabs: [
    {
      id: 'medicina',
      label: 'Medicina',
      mockup: {
        headline: 'Dr. João Silva — Cardiologia',
        subheadline: 'Especialista em saúde do coração com 15+ anos de experiência.',
        cta: 'Agendar consulta',
        features: ['Atendimento humanizado', 'Exames no local', 'Telemedicina disponível'],
      },
    },
    {
      id: 'advocacia',
      label: 'Advocacia',
      mockup: {
        headline: 'Silva & Associados — Direito Empresarial',
        subheadline: 'Protegendo seu negócio com expertise jurídica estratégica.',
        cta: 'Falar com especialista',
        features: ['Contratos empresariais', 'Compliance & LGPD', 'Contencioso estratégico'],
      },
    },
    {
      id: 'odontologia',
      label: 'Odontologia',
      mockup: {
        headline: 'Clínica Sorriso Pleno',
        subheadline: 'Odontologia moderna para toda a família em um só lugar.',
        cta: 'Agendar avaliação',
        features: ['Implantes dentários', 'Ortodontia invisível', 'Clareamento profissional'],
      },
    },
    {
      id: 'servicos',
      label: 'Serviços',
      mockup: {
        headline: 'Arquitetura & Interiores — Estúdio Amaral',
        subheadline: 'Transformamos espaços em experiências únicas de viver e trabalhar.',
        cta: 'Solicitar orçamento',
        features: ['Projetos residenciais', 'Projetos comerciais', 'Acompanhamento de obra'],
      },
    },
    {
      id: 'empresas',
      label: 'Empresas',
      mockup: {
        headline: 'TechFlow — Gestão Empresarial Inteligente',
        subheadline: 'Software que automatiza processos e escala seu negócio.',
        cta: 'Testar grátis por 14 dias',
        features: ['ERP integrado', 'BI & Dashboards', 'API aberta'],
      },
    },
  ],
};

export const deliverablesContent = {
  title: 'Mais do que um site bonito.',
  items: [
    'Design profissional',
    'Layout responsivo',
    'Estrutura pensada para conversão',
    'Botões de contato estratégicos',
    'Integração com WhatsApp',
    'Formulário de contato',
    'SEO básico',
    'Performance otimizada',
    'Personalização visual',
    'Publicação do projeto',
  ],
};

export const processContent = {
  title: 'Do primeiro contato ao site publicado.',
  steps: [
    {
      number: '01',
      title: 'Conversa',
      description: 'Entendemos seu negócio, público e objetivo.',
    },
    {
      number: '02',
      title: 'Estratégia',
      description: 'Definimos a estrutura e os elementos necessários.',
    },
    {
      number: '03',
      title: 'Design',
      description: 'Transformamos a estratégia em uma experiência visual profissional.',
    },
    {
      number: '04',
      title: 'Publicação',
      description: 'Seu projeto vai para a internet pronto para receber visitantes.',
    },
  ],
};

export const differentiatorContent = {
  title: 'Seu site não precisa parecer com o de todo mundo.',
  description:
    'Em vez de entregar um template genérico, criamos uma experiência visual pensada para destacar sua marca, seu serviço e sua proposta de valor.',
  comparison: {
    generic: {
      label: 'SITE GENÉRICO',
      items: [
        'Visual comum',
        'Estrutura confusa',
        'Pouca diferenciação',
        'Baixa percepção de valor',
      ],
    },
    custom: {
      label: 'LANDING PAGE PERSONALIZADA',
      items: [
        'Identidade própria',
        'Comunicação clara',
        'Experiência profissional',
        'Foco em conversão',
      ],
    },
  },
};

export const showcaseContent = {
  title: 'Um case de portfólio.',
  labels: [
    { text: 'Desktop', icon: 'monitor' },
    { text: 'Mobile', icon: 'smartphone' },
    { text: 'WhatsApp', icon: 'message-square' },
    { text: 'Formulário', icon: 'mail' },
    { text: 'SEO', icon: 'search' },
    { text: 'Performance', icon: 'zap' },
  ],
};

export const ctaFinalContent = {
  headline: 'Pronto para transformar sua presença digital?',
  description: 'Vamos criar uma Landing Page que represente o nível do seu trabalho.',
  ctaPrimary: 'Quero criar minha Landing Page',
  ctaSecondary: 'Falar pelo WhatsApp',
  microcopy: 'Sem compromisso. Conte-nos sobre seu projeto.',
};

export const faqContent = [
  {
    question: 'Quanto custa uma Landing Page?',
    answer:
      'O investimento varia conforme a complexidade do projeto, número de seções, integrações necessárias e nível de personalização. Cada projeto é orçado individualmente após entendermos suas necessidades específicas. Agende uma conversa sem compromisso para receber uma proposta.',
  },
  {
    question: 'O projeto é personalizado?',
    answer:
      'Sim. Não utilizamos templates prontos. Cada Landing Page é desenhada do zero considerando sua identidade visual, público-alvo, objetivos de negócio e diferencial de mercado. O resultado é único para seu negócio.',
  },
  {
    question: 'Funciona no celular?',
    answer:
      'Absolutamente. Todas as nossas Landing Pages são desenvolvidas com abordagem mobile-first, garantindo experiência impecável em qualquer dispositivo — smartphones, tablets, notebooks e desktops. Testamos em múltiplos navegadores e resoluções.',
  },
  {
    question: 'Vocês fazem a publicação?',
    answer:
      'Sim. Cuidamos de todo o processo técnico: configuração de domínio, hospedagem otimizada, certificado SSL, CDN, formulários funcionais e integrações. Você recebe o projeto no ar e pronto para receber visitantes.',
  },
  {
    question: 'Posso integrar WhatsApp?',
    answer:
      'Sim. A integração com WhatsApp Business é padrão em todos os projetos. Configuramos botões flutuantes, CTAs diretos e formulários que abrem conversa pré-preenchida no WhatsApp do seu negócio.',
  },
  {
    question: 'Posso solicitar alterações?',
    answer:
      'Sim. O processo inclui rodadas de revisão para ajustes finos. Após a entrega, oferecemos suporte para alterações pontuais. Para mudanças estruturais maiores, podemos planejar uma nova fase do projeto.',
  },
  {
    question: 'Quanto tempo leva para ficar pronta?',
    answer:
      'O prazo depende do escopo: uma Landing Page simples leva cerca de 2 a 3 semanas; projetos mais complexos com múltiplas páginas, integrações ou sistema de agendamento podem levar 4 a 6 semanas. O cronograma detalhado é apresentado na proposta.',
  },
  {
    question: 'Vocês atendem qualquer segmento?',
    answer:
      'Atendemos profissionais liberais, clínicas, escritórios, consultorias, empresas de serviços, e-commerce e negócios B2B. A metodologia se adapta a qualquer segmento que precise apresentar seus serviços com autoridade e converter visitantes em leads qualificados.',
  },
];

export const footerContent = {
  logo: 'Studio.',
  description: 'Landing Pages profissionais para negócios que querem crescer.',
  links: {
    principal: [
      { label: 'Início', href: '#inicio' },
      { label: 'Soluções', href: '#solucoes' },
      { label: 'Processo', href: '#processo' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contato', href: '#contato' },
    ],
    legal: [
      { label: 'Privacidade', href: '/privacidade' },
      { label: 'Termos', href: '/termos' },
      { label: 'Cookies', href: '/cookies' },
    ],
  },
  copyright: '© 2026 Studio. Todos os direitos reservados.',
};