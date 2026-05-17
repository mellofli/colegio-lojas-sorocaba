/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Landmark, ArrowRight, ChevronRight, Scale, ShieldCheck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { NEWS, EVENTS, LODGES } from '../constants';
import { NewsCard, EventCard } from '../components/Cards';
import { motion } from 'motion/react';

function LodgeCrest({ id, name }: { id: string; name: string }) {
  const [extIndex, setExtIndex] = useState(0);
  const extensions = ['.png', '.webp', '.jpg', '.jpeg', '.bmp', '.svg'];
  const crestPath = `/assets/lodges/${id}${extensions[extIndex]}`;

  if (extIndex >= extensions.length) {
    return <Landmark className="w-16 h-16" />;
  }

  return (
    <img 
      src={crestPath} 
      alt={`Brasão ${name}`} 
      className="w-full h-full object-contain"
      onError={() => setExtIndex(prev => prev + 1)}
    />
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center py-20">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-masonic-blue">
          <div className="absolute inset-0 opacity-20 md:opacity-10 bg-[url('https://images.unsplash.com/photo-1541410945376-a7872f53434d?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 font-serif italic leading-tight">
                Em busca da <span className="text-masonic-gold">Verdade</span> e do <br />
                Aperfeiçoamento Humano
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 font-light leading-relaxed max-w-2xl">
                O Colégio de Lojas Maçônicas da GLESP de Sorocaba e Região reúne as oficinas da jurisdição para fortalecer os laços de fraternidade e promover a excelência na instrução ritualística e filosófica.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/lojas" className="bg-masonic-gold text-masonic-blue px-8 py-4 rounded-none font-bold uppercase tracking-widest text-sm hover:bg-masonic-gold-dark transition-all flex items-center justify-center gap-2 border border-masonic-gold">
                  Conheça Nossas Lojas <ArrowRight size={18} />
                </Link>
                <Link to="/eventos" className="border border-white/30 text-white px-8 py-4 rounded-none font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all flex items-center justify-center">
                  Próximos Eventos
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 animate-bounce hidden md:block">
          <ChevronRight size={24} className="rotate-90" />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 border-b border-white/5">
        <div className="max-w-3xl mx-auto px-4 text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 italic text-masonic-gold">Nossos Pilares</h2>
          <p className="text-slate-300 leading-relaxed italic">
            "A Maçonaria é uma instituição essencialmente filosófica, filantrópica, educativa e progressista."
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <ShieldCheck size={32} />, title: "Fraternidade", text: "O fortalecimento dos laços entre os irmãos e o suporte mútuo em todas as circunstâncias da vida." },
              { icon: <Scale size={32} />, title: "Justiça", text: "A busca incessante pela equidade e o cumprimento dos deveres éticos e morais em sociedade." },
              { icon: <Heart size={32} />, title: "Caridade", text: "O compromisso solene de socorrer os necessitados e praticar o bem sem ostentação." }
            ].map((pillar, idx) => (
              <div key={idx} className="text-center px-4">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-masonic-gold border border-white/10">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold font-serif mb-4 text-white uppercase tracking-tight">{pillar.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News, Events and Sidebar Split */}
      <section className="py-12 bg-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Center: Featured News & Events */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              <div className="h-[400px] bg-masonic-blue rounded-lg p-0 relative flex flex-col justify-end text-white border-l-4 border-masonic-gold group overflow-hidden border border-white/10 shrink-0">
                {NEWS[0].image && (
                  <img 
                    src={NEWS[0].image} 
                    alt={NEWS[0].title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 md:opacity-40 group-hover:scale-105 transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-masonic-blue via-masonic-blue/40 to-transparent"></div>
                <div className="relative z-10 p-8">
                  <span className="bg-masonic-gold text-[10px] font-bold px-2 py-1 uppercase mb-4 inline-block tracking-widest text-masonic-blue">Destaque</span>
                  <h3 className="text-3xl font-serif italic mb-2 leading-tight text-white">{NEWS[0].title}</h3>
                  <p className="text-base text-slate-300 line-clamp-2 font-light italic">{NEWS[0].excerpt}</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2 border-b border-white/10 pb-2">Notícias Recentes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {NEWS.slice(1, 4).map(item => (
                    <div key={item.id} className="bg-white/5 p-4 border border-white/10 hover:border-masonic-gold/30 transition-all group cursor-pointer flex gap-4 items-center">
                      <div className="w-16 h-16 shrink-0 overflow-hidden bg-white/5 border border-white/10">
                        {item.image ? (
                           <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                        ) : (
                           <div className="w-full h-full flex items-center justify-center text-white/10 italic font-serif">N</div>
                        )}
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-masonic-gold uppercase mb-1">{item.date}</p>
                        <h4 className="text-sm font-bold text-slate-200 uppercase group-hover:text-masonic-gold transition-colors line-clamp-1">{item.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar: Agenda & Tools */}
            <aside className="lg:col-span-4 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h2 className="masonic-sidebar-title-gold">
                  <span className="w-2 h-2 bg-masonic-blue"></span>
                  Próximos Eventos
                </h2>
                <div className="flex flex-col gap-2">
                  {EVENTS.slice(0, 3).map(event => (
                    <div key={event.id}>
                      <EventCard event={event} />
                    </div>
                  ))}
                </div>
                <Link to="/eventos" className="text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-masonic-gold transition-colors py-2 border border-dashed border-white/10">
                  Ver Agenda Completa
                </Link>
              </div>

              <div className="bg-white/5 p-6 border-b-4 border-masonic-gold border border-white/10">
                <h4 className="font-serif italic text-lg mb-4 text-masonic-gold font-bold">Ciclo de Palestras</h4>
                <p className="text-[11px] text-slate-300 leading-relaxed mb-6">Solicite palestrantes renomados para sessões de instrução em sua oficina através do nosso catálogo regional.</p>
                <Link to="/palestrantes" className="inline-block bg-masonic-gold text-masonic-blue text-[10px] font-bold px-4 py-2 uppercase tracking-widest hover:bg-white hover:text-masonic-blue transition-all">
                  Explorar Temas
                </Link>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Lodges Preview */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl font-bold font-serif italic mb-6 text-masonic-gold">Lojas MAÇÔNICAS Participantes</h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Nossa região conta com oficinas comprometidas com os mais altos padrões de trabalho maçônico. Encontre a oficina mais próxima de você.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {LODGES.map(lodge => (
              <div key={lodge.id} className="text-center p-6 bg-white/5 rounded-none border border-white/10 hover:border-masonic-gold transition-all group overflow-hidden">
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center text-masonic-gold group-hover:scale-110 transition-transform duration-500">
                   <LodgeCrest id={lodge.id} name={lodge.name} />
                </div>
                <h4 className="font-bold text-sm mb-1 text-white uppercase group-hover:text-masonic-gold transition-colors">{lodge.name}</h4>
                <p className="text-[10px] text-masonic-gold font-bold uppercase tracking-widest leading-none">Loja Nº {lodge.number}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/lojas" className="text-masonic-gold font-bold border-b-2 border-masonic-blue pb-1 hover:text-white transition-all">
              Ver informações detalhadas de todas as lojas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
