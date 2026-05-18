/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { LOJAS_DATA, LodgeData } from '../data/lojas';
import PageHeader from '../components/PageHeader';
import { LodgeCard } from '../components/Cards';
import MapaLojas from '../components/MapaLojas';
import { MapPin, Search, Filter, X } from 'lucide-react';

export default function Lodges() {
  const [search, setSearch] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [view, setView] = useState<'list' | 'map'>('list');

  // Get unique cities for the filter
  const cities = useMemo(() => {
    const uniqueCities = Array.from(new Set(LOJAS_DATA.map(l => l.city)));
    return uniqueCities.sort();
  }, []);

  // Filter lodges based on search and city
  const filteredLodges = useMemo(() => {
    return LOJAS_DATA.filter(lodge => {
      const matchesSearch = 
        lodge.name.toLowerCase().includes(search.toLowerCase()) ||
        lodge.number.toString().includes(search) ||
        lodge.city.toLowerCase().includes(search.toLowerCase()) ||
        lodge.address.toLowerCase().includes(search.toLowerCase());
      
      const matchesCity = !cityFilter || lodge.city === cityFilter;
      
      return matchesSearch && matchesCity;
    });
  }, [search, cityFilter]);

  return (
    <div>
      <PageHeader 
        title="Lojas Participantes" 
        subtitle="Nossas Colunas"
        description="Conheça as oficinas que compõem o nosso colégio regional. Cada loja possui sua própria história, dia de reunião e rito de trabalho."
      />
      
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
          <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 md:w-80">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-slate-500" />
              </div>
              <input
                type="text"
                placeholder="Buscar por nome, nº, cidade ou endereço..."
                className="block w-full pl-10 pr-3 py-2 border border-white/10 bg-white/5 text-slate-200 text-sm focus:outline-none focus:border-masonic-gold/50 transition-all rounded-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <button 
                  onClick={() => setSearch('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-white"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* City Filter */}
            <div className="relative md:w-56">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter size={14} className="text-slate-500" />
              </div>
              <select
                className="block w-full pl-10 pr-3 py-2 border border-white/10 bg-white/5 text-slate-200 text-sm focus:outline-none focus:border-masonic-gold/50 transition-all rounded-none appearance-none"
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
              >
                <option value="" className="bg-masonic-blue">Todas as Cidades</option>
                {cities.map(city => (
                  <option key={city} value={city} className="bg-masonic-blue">{city}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 w-full lg:w-auto">
            <div className="flex bg-white/5 p-1 border border-white/10 w-full md:w-auto">
              <button 
                onClick={() => setView('list')}
                className={`flex-1 md:px-8 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${
                  view === 'list' 
                    ? 'bg-masonic-gold text-masonic-blue shadow-lg' 
                    : 'text-slate-500 hover:text-white'
                }`}
              >
                Lista
              </button>
              <button 
                onClick={() => setView('map')}
                className={`flex-1 md:px-8 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${
                  view === 'map' 
                    ? 'bg-masonic-gold text-masonic-blue shadow-lg' 
                    : 'text-slate-500 hover:text-white'
                }`}
              >
                Mapa
              </button>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 shrink-0">
              <MapPin size={16} className="text-masonic-gold" />
              <span>{filteredLodges.length} {filteredLodges.length === 1 ? 'Loja encontrada' : 'Lojas encontradas'}</span>
            </div>
          </div>
        </div>

        {view === 'map' ? (
          <div className="animate-in fade-in duration-500">
            <MapaLojas lojas={filteredLodges} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 content-stretch animate-in fade-in duration-500">
            {filteredLodges.length > 0 ? (
              filteredLodges.map(lodge => (
                <div key={lodge.id} className="h-full">
                  <LodgeCard lodge={lodge as any} />
                </div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center border border-white/5 bg-white/[0.02]">
                <p className="text-slate-500 font-light italic">Nenhuma loja encontrada com os critérios pesquisados.</p>
                <button 
                  onClick={() => { setSearch(''); setCityFilter(''); }}
                  className="mt-4 text-masonic-gold text-xs font-bold uppercase tracking-widest hover:underline"
                >
                  Limpar filtros
                </button>
              </div>
            )}
          </div>
        )}

        <div className="mt-24 p-12 bg-white/5 border border-dashed border-white/20 text-center">
          <h3 className="text-xl font-bold font-serif mb-4 italic text-masonic-gold">Sua loja ainda não faz parte do colégio?</h3>
          <p className="text-slate-400 text-sm max-w-lg mx-auto mb-8 font-light italic">
            O Colégio de Lojas está sempre aberto a receber novas oficinas que desejam somar forças em nosso trabalho regional.
          </p>
          <Link to="/contato" className="inline-block bg-masonic-gold text-masonic-blue px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-white transition-all">
            Solicitar Integração
          </Link>
        </div>
      </section>
    </div>
  );
}
