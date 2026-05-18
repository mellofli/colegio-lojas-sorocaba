/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SPEAKERS } from '../constants';
import PageHeader from '../components/PageHeader';
import { SpeakerCard } from '../components/Cards';
import { CheckCircle2, X, Loader2, Send, AlertCircle } from 'lucide-react';

export default function Speakers() {
  const [selectedLecture, setSelectedLecture] = useState<{title: string, speaker: string} | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nomeSolicitante: '',
    email: '',
    telefone: '',
    loja: '',
    cargo: '',
    dataPretendida: '',
    observacoes: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSelect = (lecture: string, speakerName: string) => {
    setSelectedLecture({ title: lecture, speaker: speakerName });
    setIsModalOpen(true);
    setStatus('idle');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLecture) return;

    if (!formData.nomeSolicitante || !formData.email) {
      setStatus('error');
      setErrorMessage('Por favor, preencha seu nome e e-mail.');
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('/api/solicitar-palestra', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          palestraSolicitada: selectedLecture.title,
          palestrante: selectedLecture.speaker
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          nomeSolicitante: '',
          email: '',
          telefone: '',
          loja: '',
          cargo: '',
          dataPretendida: '',
          observacoes: ''
        });
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Erro ao enviar solicitação.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Ocorreu um erro inesperado.');
    }
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
              <SpeakerCard speaker={speaker} onSelect={(lecture) => handleSelect(lecture, speaker.name)} />
            </div>
          ))}
        </div>
      </section>

      {/* Request Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-masonic-blue/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-none max-w-2xl w-full p-8 md:p-12 relative shadow-2xl my-8">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-masonic-blue transition-colors"
            >
              <X size={24} />
            </button>

            {status === 'success' ? (
              <div className="text-center py-8 animate-in zoom-in duration-300">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-4 italic text-masonic-blue">Solicitação Enviada</h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed max-w-md mx-auto">
                  Sua solicitação para a palestra <br />
                  <span className="font-bold text-masonic-blue">"{selectedLecture?.title}"</span> <br />
                  foi encaminhada com sucesso. Entraremos em contato com a diretoria de sua loja em breve.
                </p>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-full bg-masonic-blue text-white py-4 font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-colors"
                >
                  Concluído
                </button>
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="mb-8 border-b border-slate-100 pb-6">
                  <span className="text-[10px] bg-masonic-gold text-masonic-blue px-2 py-1 font-bold uppercase tracking-widest mb-4 inline-block">Solicitação de Palestra</span>
                  <h3 className="text-2xl font-bold font-serif text-masonic-blue leading-tight mb-2">"{selectedLecture?.title}"</h3>
                  <p className="text-slate-500 text-xs italic">Palestrante: {selectedLecture?.speaker}</p>
                </div>

                {status === 'error' && (
                  <div className="bg-red-50 text-red-700 p-4 mb-8 flex items-center gap-3 border-l-4 border-red-500">
                    <AlertCircle size={20} />
                    <p className="text-sm font-medium">{errorMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-2">Seu Nome *</label>
                      <input 
                        type="text" 
                        name="nomeSolicitante"
                        value={formData.nomeSolicitante}
                        onChange={handleChange}
                        required
                        className="w-full bg-white text-slate-900 placeholder:text-slate-400 border-b-2 border-slate-100 py-2 focus:border-masonic-gold outline-none transition-colors text-sm"
                        placeholder="Nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-2">Seu E-mail *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white text-slate-900 placeholder:text-slate-400 border-b-2 border-slate-100 py-2 focus:border-masonic-gold outline-none transition-colors text-sm"
                        placeholder="email@exemplo.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-2">Seu Telefone</label>
                      <input 
                        type="tel" 
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        className="w-full bg-white text-slate-900 placeholder:text-slate-400 border-b-2 border-slate-100 py-2 focus:border-masonic-gold outline-none transition-colors text-sm"
                        placeholder="(15) 00000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-2">Sua Loja Maçônica</label>
                      <input 
                        type="text" 
                        name="loja"
                        value={formData.loja}
                        onChange={handleChange}
                        className="w-full bg-white text-slate-900 placeholder:text-slate-400 border-b-2 border-slate-100 py-2 focus:border-masonic-gold outline-none transition-colors text-sm"
                        placeholder="Nome e Número da Loja"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-2">Seu Cargo (Se houver)</label>
                      <input 
                        type="text" 
                        name="cargo"
                        value={formData.cargo}
                        onChange={handleChange}
                        className="w-full bg-white text-slate-900 placeholder:text-slate-400 border-b-2 border-slate-100 py-2 focus:border-masonic-gold outline-none transition-colors text-sm"
                        placeholder="Ex: Venerável Mestre"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-2">Data Pretendida</label>
                      <input 
                        type="text" 
                        name="dataPretendida"
                        value={formData.dataPretendida}
                        onChange={handleChange}
                        className="w-full bg-white text-slate-900 placeholder:text-slate-400 border-b-2 border-slate-100 py-2 focus:border-masonic-gold outline-none transition-colors text-sm"
                        placeholder="Ex: Próxima segunda"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-2">Observações Adicionais</label>
                    <textarea 
                      rows={3} 
                      name="observacoes"
                      value={formData.observacoes}
                      onChange={handleChange}
                      className="w-full bg-white text-slate-900 placeholder:text-slate-400 border-2 border-slate-100 p-4 focus:border-masonic-gold outline-none transition-colors text-sm resize-none"
                      placeholder="Detalhes adicionais sobre a solicitação..."
                    ></textarea>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button 
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="flex-1 border border-slate-200 text-slate-500 py-4 font-bold uppercase tracking-widest text-xs hover:bg-slate-50 transition-all"
                    >
                      Cancelar
                    </button>
                    <button 
                      type="submit"
                      disabled={status === 'sending'}
                      className="flex-[2] bg-masonic-blue text-white py-4 font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-all flex items-center justify-center gap-3 disabled:bg-slate-400"
                    >
                      {status === 'sending' ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Confirmar Solicitação
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
