/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LODGES } from '../constants';
import PageHeader from '../components/PageHeader';
import { LodgeCard } from '../components/Cards';
import { MapPin } from 'lucide-react';

export default function Lodges() {
  return (
    <div>
      <PageHeader 
        title="Lojas Participantes" 
        subtitle="Nossas Colunas"
        description="Conheça as oficinas que compõem o nosso colégio regional. Cada loja possui sua própria história, dia de reunião e rito de trabalho."
      />
      
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex bg-white/5 p-1 border border-white/10">
            <button className="px-6 py-2 bg-masonic-gold text-masonic-blue text-xs font-bold uppercase tracking-widest shadow-lg">Lista</button>
            <button className="px-6 py-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Mapa</button>
          </div>
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-500">
            <MapPin size={18} className="text-masonic-gold" />
            <span>Mostrando {LODGES.length} lojas na região</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 content-stretch">
          {LODGES.map(lodge => (
            <div key={lodge.id} className="h-full">
              <LodgeCard lodge={lodge} />
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-white/5 border border-dashed border-white/20 text-center">
          <h3 className="text-xl font-bold font-serif mb-4 italic text-masonic-gold">Sua loja ainda não faz parte do colégio?</h3>
          <p className="text-slate-400 text-sm max-w-lg mx-auto mb-8 font-light italic">
            O Colégio de Lojas está sempre aberto a receber novas oficinas que desejam somar forças em nosso trabalho regional.
          </p>
          <button className="bg-masonic-gold text-masonic-blue px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-white transition-all">
            Solicitar Integração
          </button>
        </div>
      </section>
    </div>
  );
}
