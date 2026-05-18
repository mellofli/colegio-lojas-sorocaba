/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Noticia } from '../data/noticias';

interface NoticiaCardProps {
  noticia: Noticia;
}

const NoticiaCard: React.FC<NoticiaCardProps> = ({ noticia }) => {
  // Format date from YYYY-MM-DD to DD/MM/YYYY
  const formatDate = (dateStr: string) => {
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="bg-white border border-slate-200 group flex flex-col h-full hover:shadow-md transition-shadow">
      <div className="h-52 overflow-hidden relative">
        <img 
          src={noticia.imagem} 
          alt={noticia.titulo} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1541410945376-a7872f53434d?auto=format&fit=crop&q=80';
          }}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-masonic-gold text-masonic-blue text-[10px] font-bold uppercase tracking-widest px-2 py-1">
            {noticia.categoria}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-slate-400 text-[10px] uppercase tracking-widest font-bold mb-3">
          <Calendar size={14} className="text-masonic-gold" />
          <span>{formatDate(noticia.data)}</span>
        </div>
        
        <h3 className="text-lg font-bold text-masonic-blue mb-3 font-serif group-hover:text-masonic-gold transition-colors leading-tight uppercase tracking-tight">
          {noticia.titulo}
        </h3>
        
        <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-1">
          {noticia.resumo}
        </p>
        
        <Link 
          to={`/noticia/${noticia.id}`}
          className="inline-flex items-center gap-2 text-masonic-gold text-[10px] font-bold uppercase tracking-widest hover:gap-3 transition-all"
        >
          Ler notícia completa <ChevronRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default NoticiaCard;
