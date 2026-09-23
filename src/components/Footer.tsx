import React from 'react';
import { MessageCircle, MapPin, Instagram, Facebook, Globe, ExternalLink } from 'lucide-react';
import { FORMATTED_PHONE, NETWORK_LINKS, WHATSAPP_DEFAULT_URL } from '../data/links';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#14171C] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="font-serif text-2xl tracking-wide text-white font-semibold">
                Dra. Paula Fischer
              </span>
              <p className="text-xs uppercase tracking-widest text-[#E8D8B8] font-sans mt-1">
                Biomedicina Estética Avançada
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans max-w-sm">
              Harmonização facial sutil, bioestimuladores de colágeno, protocolos injetáveis exclusivos e cosmiatria de alta precisão em São Paulo.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/drapaulafischer/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 hover:bg-[#A87932] text-slate-300 hover:text-white rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/drapaulafischer/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 hover:bg-[#A87932] text-slate-300 hover:text-white rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_DEFAULT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white rounded-lg transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://www.drapaulafischer.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 hover:bg-[#A87932] text-slate-300 hover:text-white rounded-lg transition-colors"
                aria-label="Website Oficial"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Links (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Navegação
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400 font-sans">
              <li>
                <a href="#rede-oficial" className="hover:text-[#E8D8B8] transition-colors">
                  Toda a Rede Oficial & Canais
                </a>
              </li>
              <li>
                <a href="#protocolos" className="hover:text-[#E8D8B8] transition-colors">
                  Protocolos & Injetáveis
                </a>
              </li>
              <li>
                <a href="#diagnostico" className="hover:text-[#E8D8B8] transition-colors">
                  Simulador de Protocolo Interativo
                </a>
              </li>
              <li>
                <a href="#metodo" className="hover:text-[#E8D8B8] transition-colors">
                  O Método Natural Consciente
                </a>
              </li>
              <li>
                <a href="#clinica" className="hover:text-[#E8D8B8] transition-colors">
                  A Clínica (Tatuapé - SP)
                </a>
              </li>
              <li>
                <a href="#duvidas" className="hover:text-[#E8D8B8] transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Toda a Rede Links (Span 5) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Rede Dra. Paula Fischer
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400 font-sans">
              <a
                href="https://servico.mercadolivre.com.br/MLB-7049031208-estetica-facial-e-injetaveis-mais-de-40-tipos-de-protocolos-_JM#polycard_client=search-desktop&be_origin=backend&overlay_label=not_apply&search_layout=grid&position=5&type=item&tracking_id=49a0a6d9-833d-4d5b-aad0-2cc12a2f74e4&sid=search"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E8D8B8] flex items-center gap-1.5 transition-colors"
              >
                <span>Mercado Livre (+40 Protocolos)</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <a
                href="https://www.magazineluiza.com.br/serum-pre-e-pos-procedimento-estetico-roberta/p/gkkajee29k/li/lmdc/?srsltid=AU7gw4Ur0EQkwSxMir-AAyrqSlZhE7-CL35JIFGjAEPP9mtzDoXFQ0Tr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E8D8B8] flex items-center gap-1.5 transition-colors"
              >
                <span>Magalu (Sérum Roberta)</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <a
                href="https://shopee.com.br/clube-de-beleza"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E8D8B8] flex items-center gap-1.5 transition-colors"
              >
                <span>Shopee (Clube de Beleza)</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <a
                href="https://tulipia.academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E8D8B8] flex items-center gap-1.5 transition-colors"
              >
                <span>Tulípia Academy (Cursos)</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <a
                href="https://www.google.com/maps/place/Dra+Paula+Fischer+Biom%C3%A9dica+Est%C3%A9tica/@-23.5342685,-46.5688361,17z/data=!4m10!1m2!2m1!1sgoogle+maps+dra+paula+fischer!3m6!1s0x94ce5feb1ff135db:0xf6190de0c94d7bf9!8m2!3d-23.5342685!4d-46.5662612!15sCh1nb29nbGUgbWFwcyBkcmEgcGF1bGEgZmlzY2hlciBiAEMEgCF1bGEwIEBWhMiEWRYYSBWYsYSBmaXNjaGVyEWAwGVhbHRoX2FuZF9idWFldHkvcJobJENOZERTVWh0c5blMwVkpMEZuVFVFMDUwMDJHelUUBQBApoEBAgEDQ!16s%2Fg%2F11x2pjvdb6?entry=ttu&g_ep=EgoyMDI1MDkyMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E8D8B8] flex items-center gap-1.5 transition-colors"
              >
                <span>Google Maps (Localização)</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <a
                href="https://www.drapaulafischer.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E8D8B8] flex items-center gap-1.5 transition-colors"
              >
                <span>Site Oficial Institucional</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>

            <div className="pt-3 text-xs text-slate-400">
              <div className="font-semibold text-slate-300">Localização do Consultório:</div>
              <div>Rua Apucarana / Tatuapé — São Paulo, SP</div>
              <div>WhatsApp Recepção: {FORMATTED_PHONE}</div>
            </div>
          </div>

        </div>

        {/* Legal & Medical Notice */}
        <div className="pt-8 text-[11px] text-slate-500 leading-relaxed font-sans space-y-2">
          <p>
            *Aviso Regulatório: Os procedimentos biomédicos estéticos são realizados em conformidade com as resoluções do Conselho Federal de Biomedicina (CFBM). Cada organismo reage de forma individual e todo tratamento requer consulta prévia de anamnese e avaliação clínica individualizada. As fotos e menções têm caráter ilustrativo e informativo sobre a prática profissional.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 border-t border-slate-800 text-slate-500">
            <div>
              © {new Date().getFullYear()} Dra. Paula Fischer — Biomedicina Estética. Todos os direitos reservados.
            </div>
            <div className="text-slate-400">
              Harmonização Facial · Injetáveis · Rejuvenescimento Avançado
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
