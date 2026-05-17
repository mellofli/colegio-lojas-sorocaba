/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Landmark, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-masonic-blue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white/10 p-2 rounded-full text-masonic-gold">
                <Landmark size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold leading-none">Colégio de Lojas</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Dedicados ao aprimoramento moral e intelectual de nossos membros e ao progresso da sociedade sorocabana através dos valores da Liberdade, Igualdade e Fraternidade.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-masonic-gold uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link to="/noticias" className="hover:text-white transition-colors">Notícias</Link></li>
              <li><Link to="/eventos" className="hover:text-white transition-colors">Eventos</Link></li>
              <li><Link to="/palestrantes" className="hover:text-white transition-colors">Palestrantes</Link></li>
              <li><Link to="/lojas" className="hover:text-white transition-colors">Lojas Participantes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-masonic-gold uppercase tracking-wider">Contato</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-masonic-gold shrink-0 mt-0.5" />
                <span>Rua das Acácias, 100 - Sorocaba, SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-masonic-gold shrink-0" />
                <span>(15) 3232-1234</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-masonic-gold shrink-0" />
                <span>contato@colegiosorocaba.org.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-masonic-gold uppercase tracking-wider">Links Úteis</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Secretaria Online</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Biblioteca Maçônica</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-500 uppercase tracking-tighter font-bold">
          <p>© {new Date().getFullYear()} Colégio de Lojas MAÇÔNICAS. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span>Status do Sistema: Online</span>
            </div>
            <span className="text-slate-700">|</span>
            <Link to="#" className="hover:text-masonic-gold transition-colors">Termos de Privacidade</Link>
            <span className="text-slate-700">|</span>
            <span>TFA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
