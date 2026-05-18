/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { noticias } from '../data/noticias';
import PageHeader from '../components/PageHeader';
import NoticiaCard from '../components/NoticiaCard';

export default function News() {
  // Sort news by date descending
  const sortedNoticias = [...noticias].sort((a, b) => b.data.localeCompare(a.data));

  return (
    <div>
      <PageHeader 
        title="Notícias e Comunicados" 
        subtitle="Informativo Regional"
        description="Acompanhe as últimas notícias, iniciativas sociais e comunicados institucionais do Colégio de Lojas."
      />
      
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {sortedNoticias.map(noticia => (
            <NoticiaCard key={noticia.id} noticia={noticia} />
          ))}
        </div>
        
        {sortedNoticias.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 italic">Nenhuma notícia publicada no momento.</p>
          </div>
        )}
      </section>
    </div>
  );
}
