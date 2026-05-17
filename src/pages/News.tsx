/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { NEWS } from '../constants';
import PageHeader from '../components/PageHeader';
import { NewsCard } from '../components/Cards';

export default function News() {
  return (
    <div>
      <PageHeader 
        title="Notícias e Comunicados" 
        subtitle="Informativo Regional"
        description="Acompanhe as últimas atualizações, iniciativas sociais e notícias institucionais das lojas na região de Sorocaba."
      />
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {NEWS.map(item => (
            <div key={item.id}>
              <NewsCard item={item} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
