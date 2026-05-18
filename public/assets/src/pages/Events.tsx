/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { EVENTS } from '../constants';
import PageHeader from '../components/PageHeader';
import { EventCard } from '../components/Cards';
import { Calendar } from 'lucide-react';
import { isPastEvent } from '../utils';

export default function Events() {
  return (
    <div className="bg-masonic-blue/5 min-h-screen">
      <PageHeader 
        title="Eventos e Agenda" 
        subtitle="Calendário Maçônico"
        description="Mantenha-se informado sobre as assembleias, conferências, eventos sociais e sessões magnas em nossa região."
      />
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          <div>
            <h2 className="text-2xl font-bold font-serif italic mb-8 border-b border-white/10 pb-4 text-masonic-gold">Próximas Atividades</h2>
            
            <div className="overflow-x-auto bg-white/5 border border-white/10 shadow-xl">
              <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead>
                  <tr className="bg-black/40 border-b border-white/10">
                    <th className="p-4 text-[10px] font-bold text-masonic-gold uppercase tracking-widest">Data</th>
                    <th className="p-4 text-[10px] font-bold text-masonic-gold uppercase tracking-widest">Evento</th>
                    <th className="p-4 text-[10px] font-bold text-masonic-gold uppercase tracking-widest">Loja Responsável</th>
                    <th className="p-4 text-[10px] font-bold text-masonic-gold uppercase tracking-widest">Lojas Participantes</th>
                    <th className="p-4 text-[10px] font-bold text-masonic-gold uppercase tracking-widest">Endereço</th>
                    <th className="p-4 text-[10px] font-bold text-masonic-gold uppercase tracking-widest">Palestrante / Presença</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {EVENTS.map(event => {
                    const ended = isPastEvent(event.date);
                    return (
                      <tr key={event.id} className={`transition-colors ${ended ? 'bg-white/[0.01] opacity-60 grayscale-[0.3]' : 'hover:bg-white/5'}`}>
                        <td className="p-4 text-xs font-bold text-slate-200">
                          <div className="flex flex-col gap-1">
                            <span>{event.date}</span>
                            {ended && (
                              <span className="bg-red-600/80 text-white text-[8px] px-1 py-0.5 rounded-sm w-fit">ENCERRADO</span>
                            )}
                          </div>
                        </td>
                        <td className={`p-4 text-xs font-bold uppercase tracking-tight ${ended ? 'text-slate-400' : 'text-masonic-gold'}`}>{event.title}</td>
                        <td className="p-4 text-xs text-slate-300 font-medium">{event.responsibleLodge}</td>
                        <td className="p-4 text-xs text-slate-400 leading-relaxed italic">{event.participatingLodges}</td>
                        <td className="p-4 text-xs text-slate-400 italic line-clamp-2 mt-2">{event.location}</td>
                        <td className="p-4 text-xs text-slate-300 font-medium leading-relaxed">{event.speaker || '—'}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[10px] text-slate-500 italic">* Utilize o scroll horizontal se estiver em dispositivos menores.</p>
          </div>
          
        </div>
      </section>
    </div>
  );
}
