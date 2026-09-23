import React, { useState } from 'react';
import { 
  MessageCircle, 
  MapPin, 
  ShoppingCart, 
  Package, 
  GraduationCap, 
  Instagram, 
  Facebook, 
  Globe, 
  ExternalLink, 
  Check, 
  Copy,
  Sparkles
} from 'lucide-react';
import { NETWORK_LINKS, FORMATTED_PHONE, OFFICIAL_PHONE } from '../data/links';

export const EcosystemNetwork: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const copyPhone = () => {
    navigator.clipboard.writeText(OFFICIAL_PHONE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'whatsapp':
        return <MessageCircle className="w-5 h-5 text-emerald-600" />;
      case 'map':
        return <MapPin className="w-5 h-5 text-rose-600" />;
      case 'shopping-cart':
        return <ShoppingCart className="w-5 h-5 text-amber-600" />;
      case 'package':
        return <Package className="w-5 h-5 text-blue-600" />;
      case 'graduation-cap':
        return <GraduationCap className="w-5 h-5 text-indigo-600" />;
      case 'instagram':
        return <Instagram className="w-5 h-5 text-pink-600" />;
      case 'facebook':
        return <Facebook className="w-5 h-5 text-sky-600" />;
      case 'globe':
      default:
        return <Globe className="w-5 h-5 text-slate-700" />;
    }
  };

  const categories = [
    { id: 'todos', label: 'Toda a Rede' },
    { id: 'atendimento', label: 'Atendimento & Clínica' },
    { id: 'produtos', label: 'Lojas & Protocolos' },
    { id: 'sociais', label: 'Redes & Academy' },
  ];

  const filteredLinks = NETWORK_LINKS.filter((item) => {
    if (activeCategory === 'todos') return true;
    if (activeCategory === 'atendimento') return ['whatsapp', 'google-maps', 'site-oficial'].includes(item.id);
    if (activeCategory === 'produtos') return ['mercadolivre', 'magalu', 'shopee'].includes(item.id);
    if (activeCategory === 'sociais') return ['instagram', 'facebook', 'tulipia'].includes(item.id);
    return true;
  });

  return (
    <section id="rede-oficial" className="py-20 bg-white border-y border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#8C6D3A]">
            Ecossistema Completo Integrado
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-normal">
            Toda a Rede <span className="italic font-medium text-[#A87932]">Dra. Paula Fischer</span> em um só lugar
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
            Acesse rapidamente nossos canais oficiais de agendamento, localização no Tatuapé, plataformas de protocolos com garantia, dermocosméticos recomendados e educação profissional.
          </p>

          {/* Quick Contact Pill Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={copyPhone}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-700 bg-[#FAF8F5] border border-slate-200 rounded-lg hover:border-[#C5A059] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp: {FORMATTED_PHONE}</span>
              {copied ? (
                <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <Check className="w-3.5 h-3.5" /> Copiado!
                </span>
              ) : (
                <Copy className="w-3.5 h-3.5 text-slate-400" />
              )}
            </button>
            <div className="text-xs text-slate-400">
              Atendimento em horário comercial de seg. a sáb.
            </div>
          </div>
        </div>

        {/* Category Tabs (interactive button filters) */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex p-1 bg-[#FAF8F5] border border-slate-200 rounded-lg max-w-full overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-200/80'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Links Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLinks.map((item) => (
            <div
              key={item.id}
              className={`relative flex flex-col justify-between p-6 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                item.highlight
                  ? 'bg-gradient-to-b from-[#FAF8F5] to-white border-[#C5A059]/40 hover:border-[#A87932]'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Card Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    {getIcon(item.iconName)}
                  </div>
                  {item.badge && (
                    <span className="text-[11px] font-semibold text-[#8C6D3A] tracking-wider uppercase">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div>
                  <span className="text-xs font-medium text-slate-400 block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-slate-900 group-hover:text-[#A87932]">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    item.highlight
                      ? 'bg-[#1A1E24] text-white hover:bg-[#A87932]'
                      : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                  }`}
                >
                  <span>{item.buttonText}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner: Protocolos Mercado Livre + Sérum Roberta */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#1A1E24] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-semibold text-[#E8D8B8] uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Condições Especiais & Garantia</span>
            </div>
            <h4 className="font-serif text-2xl sm:text-3xl font-normal">
              Mais de 40 protocolos faciais disponíveis para contratação em até 12x
            </h4>
            <p className="text-slate-300 text-sm max-w-xl">
              Consulte nossa página no Mercado Livre Serviços ou fale direto com a equipe no WhatsApp para receber o guia detalhado dos procedimentos.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href="https://servico.mercadolivre.com.br/MLB-7049031208-estetica-facial-e-injetaveis-mais-de-40-tipos-de-protocolos-_JM#polycard_client=search-desktop&be_origin=backend&overlay_label=not_apply&search_layout=grid&position=5&type=item&tracking_id=49a0a6d9-833d-4d5b-aad0-2cc12a2f74e4&sid=search"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-slate-900 bg-[#E8D8B8] hover:bg-white rounded-lg transition-colors whitespace-nowrap"
            >
              <span>Ver Protocolos no ML</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
