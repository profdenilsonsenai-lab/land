export interface NetworkLink {
  id: string;
  title: string;
  category: string;
  description: string;
  url: string;
  badge?: string;
  buttonText: string;
  iconName: 'whatsapp' | 'instagram' | 'facebook' | 'map' | 'shopping-cart' | 'package' | 'graduation-cap' | 'globe';
  highlight?: boolean;
}

export const OFFICIAL_PHONE = '11966209116';
export const FORMATTED_PHONE = '(11) 96620-9116';
export const WHATSAPP_DEFAULT_URL = `https://wa.me/55${OFFICIAL_PHONE}?text=${encodeURIComponent(
  'Olá! Estava no site da Dra. Paula Fischer e gostaria de agendar uma consulta de avaliação personalizada.'
)}`;

export const NETWORK_LINKS: NetworkLink[] = [
  {
    id: 'whatsapp',
    title: 'WhatsApp Oficial & Recepção VIP',
    category: 'Atendimento Direto',
    description: 'Agendamento imediato, dúvidas sobre procedimentos e triagem exclusiva com a equipe da Dra. Paula.',
    url: WHATSAPP_DEFAULT_URL,
    badge: 'Atendimento Rápido',
    buttonText: 'Falar no WhatsApp',
    iconName: 'whatsapp',
    highlight: true,
  },
  {
    id: 'google-maps',
    title: 'Clínica Física São Paulo',
    category: 'Localização & Rotas',
    description: 'Consultório de alto padrão no Tatuapé com sala privativa, estacionamento e máxima biossegurança.',
    url: 'https://www.google.com/maps/place/Dra+Paula+Fischer+Biom%C3%A9dica+Est%C3%A9tica/@-23.5342685,-46.5688361,17z/data=!4m10!1m2!2m1!1sgoogle+maps+dra+paula+fischer!3m6!1s0x94ce5feb1ff135db:0xf6190de0c94d7bf9!8m2!3d-23.5342685!4d-46.5662612!15sCh1nb29nbGUgbWFwcyBkcmEgcGF1bGEgZmlzY2hlciBiAEMEgCF1bGEwIEBWhMiEWRYYSBWYsYSBmaXNjaGVyEWAwGVhbHRoX2FuZF9idWFldHkvcJobJENOZERTVWh0c5blMwVkpMEZuVFVFMDUwMDJHelUUBQBApoEBAgEDQ!16s%2Fg%2F11x2pjvdb6?entry=ttu&g_ep=EgoyMDI1MDkyMC4wIKXMDSoASAFQAw%3D%3D',
    badge: '5.0 ★ no Google',
    buttonText: 'Ver no Google Maps',
    iconName: 'map',
    highlight: true,
  },
  {
    id: 'mercadolivre',
    title: 'Protocolos & Injetáveis no Mercado Livre',
    category: 'Procedimentos & Condições',
    description: 'Mais de 40 protocolos faciais e corporais com parcelamento facilitado em até 12x e garantia da plataforma.',
    url: 'https://servico.mercadolivre.com.br/MLB-7049031208-estetica-facial-e-injetaveis-mais-de-40-tipos-de-protocolos-_JM#polycard_client=search-desktop&be_origin=backend&overlay_label=not_apply&search_layout=grid&position=5&type=item&tracking_id=49a0a6d9-833d-4d5b-aad0-2cc12a2f74e4&sid=search',
    badge: '+40 Protocolos',
    buttonText: 'Acessar no Mercado Livre',
    iconName: 'shopping-cart',
    highlight: true,
  },
  {
    id: 'magalu',
    title: 'Sérum Roberta no Magazine Luiza',
    category: 'Cosmetologia de Alto Desempenho',
    description: 'Fórmula biocompatível pré e pós-procedimento estético desenvolvida para acelerar a regeneração e potencializar os resultados.',
    url: 'https://www.magazineluiza.com.br/serum-pre-e-pos-procedimento-estetico-roberta/p/gkkajee29k/li/lmdc/?srsltid=AU7gw4Ur0EQkwSxMir-AAyrqSlZhE7-CL35JIFGjAEPP9mtzDoXFQ0Tr',
    badge: 'Dermocosmético Oficial',
    buttonText: 'Comprar no Magalu',
    iconName: 'package',
  },
  {
    id: 'shopee',
    title: 'Clube de Beleza na Shopee',
    category: 'Loja Oficial Shopee',
    description: 'Produtos de skincare, cuidados diários e home care recomendados pela clínica com entrega expressa.',
    url: 'https://shopee.com.br/clube-de-beleza',
    badge: 'Frete & Cupons',
    buttonText: 'Ver na Shopee',
    iconName: 'shopping-cart',
  },
  {
    id: 'tulipia',
    title: 'Tulípia Academy',
    category: 'Formação & Cursos',
    description: 'Plataforma educacional para profissionais da área estética que buscam excelência técnica e atualização clínica.',
    url: 'https://tulipia.academy/',
    badge: 'Educação Continuada',
    buttonText: 'Acessar Academy',
    iconName: 'graduation-cap',
  },
  {
    id: 'instagram',
    title: 'Instagram Oficial',
    category: 'Redes Sociais & Casos',
    description: 'Acompanhe o dia a dia do consultório, antes e depois, explicações anatômicas e dicas em tempo real.',
    url: 'https://www.instagram.com/drapaulafischer/',
    badge: '@drapaulafischer',
    buttonText: 'Seguir no Instagram',
    iconName: 'instagram',
  },
  {
    id: 'facebook',
    title: 'Página no Facebook',
    category: 'Comunidade & Notícias',
    description: 'Artigos, matérias sobre longevidade e estética e novidades da clínica Dra. Paula Fischer.',
    url: 'https://www.facebook.com/drapaulafischer/',
    buttonText: 'Curtir no Facebook',
    iconName: 'facebook',
  },
  {
    id: 'site-oficial',
    title: 'Portal Institucional',
    category: 'Website Oficial',
    description: 'Portal completo com detalhamento dos protocolos, biografia profissional e artigos científicos.',
    url: 'https://www.drapaulafischer.com.br/',
    buttonText: 'Visitar Portal',
    iconName: 'globe',
  },
];
