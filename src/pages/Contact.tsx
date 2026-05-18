/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.email || !formData.mensagem) {
      setStatus('error');
      setErrorMessage('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('/api/enviar-contato', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          assunto: '',
          mensagem: ''
        });
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Erro ao enviar mensagem.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Ocorreu um erro inesperado.');
    }
  };

  return (
    <div className="bg-white">
      <PageHeader 
        title="Contato" 
        subtitle="Fale Conosco"
        description="Utilize o formulário abaixo para enviar sugestões, tirar dúvidas ou solicitar informações institucionais ao Colégio de Lojas."
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold font-serif mb-8 italic text-masonic-blue uppercase tracking-tight">Canais de Atendimento</h2>
            <p className="text-slate-600 mb-12 font-light leading-relaxed">
              O Colégio de Lojas Maçônicas de Sorocaba mantém canais abertos para comunicação com a comunidade e com os irmãos das diversas oficinas da jurisdição.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-masonic-blue/5 rounded-full flex items-center justify-center text-masonic-gold border border-masonic-gold/20 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-masonic-blue uppercase tracking-widest text-xs mb-1">Telefone</h4>
                  <p className="text-slate-500 text-sm">(15) 99113-0569</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-masonic-blue/5 rounded-full flex items-center justify-center text-masonic-gold border border-masonic-gold/20 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-masonic-blue uppercase tracking-widest text-xs mb-1">E-mail</h4>
                  <p className="text-slate-500 text-sm">colegiomaconicoGlesp@outlook.com</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-masonic-blue/5 border-l-4 border-masonic-gold">
              <p className="text-masonic-blue italic text-sm font-light leading-loose">
                "O trabalho em prol da sociedade e o aprimoramento da virtude exigem canais de diálogo eficientes e transparentes."
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-slate-200 p-8 md:p-12 shadow-sm relative">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-300">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-masonic-blue mb-4">Mensagem Enviada!</h3>
                <p className="text-slate-500 mb-8 max-w-sm">
                  Sua mensagem foi recebida com sucesso. Nossa secretaria retornará o seu contato o mais breve possível.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="bg-masonic-blue text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-all"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold font-serif mb-8 italic text-masonic-blue">Envie sua Mensagem</h3>
                
                {status === 'error' && (
                  <div className="bg-red-50 text-red-700 p-4 mb-8 flex items-center gap-3 border-l-4 border-red-500">
                    <AlertCircle size={20} />
                    <p className="text-sm font-medium">{errorMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-2">Nome Completo *</label>
                      <input 
                        type="text" 
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        className="w-full bg-white text-slate-900 placeholder:text-slate-400 border-b-2 border-slate-100 py-3 focus:border-masonic-gold outline-none transition-colors text-sm"
                        placeholder="Ex: João da Silva"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-2">E-mail *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white text-slate-900 placeholder:text-slate-400 border-b-2 border-slate-100 py-3 focus:border-masonic-gold outline-none transition-colors text-sm"
                        placeholder="email@exemplo.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-2">Telefone</label>
                      <input 
                        type="tel" 
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        className="w-full bg-white text-slate-900 placeholder:text-slate-400 border-b-2 border-slate-100 py-3 focus:border-masonic-gold outline-none transition-colors text-sm"
                        placeholder="(15) 00000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-2">Assunto</label>
                      <input 
                        type="text" 
                        name="assunto"
                        value={formData.assunto}
                        onChange={handleChange}
                        className="w-full bg-white text-slate-900 placeholder:text-slate-400 border-b-2 border-slate-100 py-3 focus:border-masonic-gold outline-none transition-colors text-sm"
                        placeholder="Assunto da mensagem"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-2">Mensagem *</label>
                    <textarea 
                      rows={5} 
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      required
                      className="w-full bg-white text-slate-900 placeholder:text-slate-400 border-2 border-slate-100 p-4 focus:border-masonic-gold outline-none transition-colors text-sm resize-none"
                      placeholder="Como podemos ajudar?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-masonic-blue text-white py-4 font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-all flex items-center justify-center gap-3 disabled:bg-slate-400"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Enviar Mensagem
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-slate-400 italic text-center">* Campos obrigatórios</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
