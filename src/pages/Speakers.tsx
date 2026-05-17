/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { SPEAKERS } from '../constants';
import PageHeader from '../components/PageHeader';
import { SpeakerCard } from '../components/Cards';
import { CheckCircle2, X } from 'lucide-react';

export default function Speakers() {
  const [selectedLecture, setSelectedLecture] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelect = (lecture: string) => {
    setSelectedLecture(lecture);
    setIsModalOpen(true);
  };

  return (
    <div>
      <PageHeader 
        title="Palestrantes e Temas" 
        subtitle="Educação e Instrução"
        description="Nosso colégio disponibiliza um seleto grupo de palestrantes para sessões de instrução. Explore os temas disponíveis e solicite uma palestra para sua oficina."
      />
      
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {SPEAKERS.map(speaker => (
            <div key={speaker.id}>
              <SpeakerCard speaker={speaker} onSelect={handleSelect} />
            </div>
          ))}
        </div>
      </section>

      {/* simulated Request Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-masonic-blue/80 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-masonic-blue"
            >
              <X size={20} />
            </button>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-bold font-serif mb-2 italic">Solicitação Registrada</h3>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                Sua solicitação para a palestra <br />
                <span className="font-bold text-masonic-blue">"{selectedLecture}"</span> <br />
                foi encaminhada à secretaria regional. Entraremos em contato com a diretoria de sua loja em breve.
              </p>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-full bg-masonic-blue text-white py-4 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-colors"
              >
                Concluído
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
