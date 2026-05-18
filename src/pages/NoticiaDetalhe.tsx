/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import { noticias } from '../data/noticias';
import PageHeader from '../components/PageHeader';
import { useEffect } from 'react';

export default function NoticiaDetalhe() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const noticia = noticias.find(n => n.id === id);

  useEffect(() => {
    if (!noticia) {
      navigate('/noticias');
    }
  }, [noticia, navigate]);

  if (!noticia) return null;

  const formatDate = (dateStr: string) => {
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="bg-white">
      <PageHeader 
        title={noticia.titulo}
        subtitle={noticia.categoria}
        description={noticia.resumo}
      />

      <article className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/noticias" 
          className="inline-flex items-center gap-2 text-masonic-gold text-xs font-bold uppercase tracking-widest hover:text-masonic-blue transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Voltar para notícias
        </Link>

        <div className="aspect-video w-full bg-slate-100 mb-12 overflow-hidden border border-slate-200">
          <img 
            src={noticia.imagem} 
            alt={noticia.titulo}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1541410945376-a7872f53434d?auto=format&fit=crop&q=80';
            }}
          />
        </div>

        <div className="flex flex-wrap items-center gap-8 mb-12 py-6 border-y border-slate-100">
          <div className="flex items-center gap-3">
            <Calendar size={20} className="text-masonic-gold" />
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Data de publicação</span>
              <span className="text-sm font-bold text-masonic-blue">{formatDate(noticia.data)}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Tag size={20} className="text-masonic-gold" />
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Categoria</span>
              <span className="text-sm font-bold text-masonic-blue">{noticia.categoria}</span>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {noticia.conteudo.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="text-slate-700 leading-loose mb-8 font-light text-justify">
              {paragraph.trim()}
            </p>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-slate-100 flex flex-col items-center text-center">
          <div className="w-16 h-1 border-t-2 border-masonic-gold mb-8"></div>
          <p className="text-slate-400 italic text-sm mb-8">
            Colégio de Lojas Maçônicas da GLESP - Sorocaba e Região
          </p>
          <Link 
            to="/noticias" 
            className="bg-masonic-blue text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-masonic-blue/90 transition-all"
          >
            Ver outras notícias
          </Link>
        </div>
      </article>
    </div>
  );
}
