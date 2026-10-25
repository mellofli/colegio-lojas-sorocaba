import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, BarChart3, CalendarClock, Database, ExternalLink, Landmark, ShieldCheck } from 'lucide-react';

type Eixo = { id: string; titulo: string; descricao: string; indicadores: string[] };
const eixos: Eixo[] = [
  {id:'demografia',titulo:'Demografia',descricao:'Perfil e crescimento',indicadores:['População por faixa etária','Crescimento populacional','Distribuição territorial']},
  {id:'seguranca',titulo:'Segurança',descricao:'Crimes e prevenção',indicadores:['Homicídios por 100 mil habitantes','Roubos por 100 mil habitantes','Furtos por 100 mil habitantes']},
  {id:'saude',titulo:'Saúde',descricao:'Acesso e resultados',indicadores:['Mortalidade infantil','Cobertura da atenção básica','Tempo de espera por consulta']},
  {id:'educacao',titulo:'Educação',descricao:'Aprendizagem e vagas',indicadores:['IDEB','Vagas em creches','Alfabetização na idade adequada']},
  {id:'economia',titulo:'Economia',descricao:'Emprego e renda',indicadores:['Saldo do emprego formal','Rendimento médio','Empresas ativas']},
  {id:'assistencia',titulo:'Assistência social',descricao:'Pobreza e inclusão',indicadores:['Famílias no Cadastro Único','Famílias em situação de pobreza','Cobertura socioassistencial']},
  {id:'habitacao',titulo:'Habitação',descricao:'Moradia e urbanização',indicadores:['Déficit habitacional','Regularização fundiária','Moradias em áreas de risco']},
  {id:'mobilidade',titulo:'Mobilidade',descricao:'Transporte e trânsito',indicadores:['Mortes no trânsito','Passageiros transportados','Pontualidade dos ônibus']},
  {id:'saneamento',titulo:'Saneamento',descricao:'Água, esgoto e resíduos',indicadores:['Cobertura de água','Tratamento de esgoto','Perdas de água']},
  {id:'meio-ambiente',titulo:'Meio ambiente',descricao:'Áreas verdes e riscos',indicadores:['Arborização urbana','Cobertura vegetal','Áreas sujeitas a inundação']},
  {id:'financas',titulo:'Finanças públicas',descricao:'Orçamento e investimentos',indicadores:['Receitas realizadas','Investimento por habitante','Execução orçamentária']},
  {id:'gestao',titulo:'Gestão pública',descricao:'Qualidade e eficiência',indicadores:['Solicitações resolvidas no prazo','Tempo médio de atendimento','Obras entregues']},
  {id:'recursos',titulo:'Aplicação do dinheiro público',descricao:'Origem, destino e entregas',indicadores:['Transferências recebidas','Pagamentos por finalidade','Entregas comprovadas']},
  {id:'integridade',titulo:'Transparência institucional',descricao:'Perfil e integridade de agentes públicos',indicadores:['Disponibilidade de currículos','Decisões definitivas verificadas','Prestações de contas disponíveis']},
];
const fontes = [
  {nome:'IBGE Cidades',url:'https://www.ibge.gov.br/cidades-e-estados/sp/sorocaba.html'},
  {nome:'SSP-SP',url:'https://www.ssp.sp.gov.br/estatistica/consultas'},
  {nome:'Portal da Transparência Federal',url:'https://portaldatransparencia.gov.br/'},
  {nome:'TCE-SP',url:'https://www.tce.sp.gov.br/'},
  {nome:'Transparência Municipal',url:'https://informacoeslai.sorocaba.sp.gov.br/'},
];

export default function Observatorio() {
  return (
    <div className="min-h-screen bg-[#f5f7fa] text-slate-800">
      <section className="bg-masonic-blue text-white border-b-4 border-masonic-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <Link to="/" className="inline-flex gap-2 items-center text-slate-300 hover:text-white text-sm mb-8"><ArrowLeft size={16}/> Voltar ao Colégio</Link>
          <p className="text-masonic-gold text-xs font-bold uppercase tracking-[0.25em] mb-3">Informação pública e cidadania</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-5">Observatório de Sorocaba</h1>
          <p className="text-lg text-slate-200 max-w-3xl leading-relaxed">Indicadores sociais, econômicos, de gestão e de transparência para compreender a cidade e acompanhar políticas públicas com base em evidências.</p>
          <div className="flex flex-wrap items-center gap-3 mt-8 text-sm">
            <span className="px-3 py-2 bg-white/10 border border-white/15 inline-flex items-center gap-2"><BarChart3 size={16}/> 14 eixos temáticos</span>
            <span className="px-3 py-2 bg-white/10 border border-white/15 inline-flex items-center gap-2"><CalendarClock size={16}/> Coleta mensal planejada</span>
            <span className="px-3 py-2 bg-white/10 border border-white/15 inline-flex items-center gap-2"><ShieldCheck size={16}/> Fontes oficiais e verificáveis</span>
          </div>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-amber-50 border-l-4 border-amber-600 p-5 mb-10" role="status">
          <h2 className="font-bold text-amber-950">Portal em implantação — catálogo de indicadores</h2>
          <p className="text-sm text-amber-950 mt-1">Os itens abaixo descrevem indicadores previstos. Ainda não representam resultados apurados, atualizações automáticas ativas ou auditorias concluídas. Cada valor só será exibido quando houver fonte, ano de referência e validação.</p>
        </div>
        <div className="flex items-center gap-3 mb-5"><Database className="text-masonic-blue"/><h2 className="font-serif text-2xl sm:text-3xl font-bold">Eixos de acompanhamento</h2></div>
        <p className="text-slate-600 mb-8">Acompanhamento de resultados, acesso a serviços públicos, distribuição territorial, recursos e transparência.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {eixos.map((eixo, index) => (
            <section key={eixo.id} id={eixo.id} className="bg-white border border-slate-200 shadow-sm p-6 scroll-mt-32" aria-labelledby={`titulo-${eixo.id}`}>
              <div className="flex items-start justify-between gap-2 mb-3"><span className="text-xs font-bold text-masonic-blue">EIXO {String(index+1).padStart(2,'0')}</span><span className="text-[11px] bg-slate-100 px-2 py-1 text-slate-600">Em estruturação</span></div>
              <h3 id={`titulo-${eixo.id}`} className="font-serif text-xl font-bold text-masonic-blue">{eixo.titulo}</h3>
              <p className="text-sm text-slate-500 mb-4">{eixo.descricao}</p>
              <ul className="space-y-2 border-t border-slate-100 pt-4">{eixo.indicadores.map(ind=> <li key={ind} className="text-sm text-slate-700 flex gap-2 items-start"><span aria-hidden="true" className="text-masonic-gold">•</span>{ind}</li>)}</ul>
            </section>
          ))}
        </div>
        <section className="bg-white border border-slate-200 p-6 sm:p-8 mt-12">
          <div className="flex items-center gap-3 mb-4"><Landmark className="text-masonic-blue"/><h2 className="font-serif text-2xl font-bold">Fontes e metodologia</h2></div>
          <p className="text-slate-600 mb-5">O projeto prioriza bases oficiais e mantém separadas a data de coleta e a data de referência do indicador. Dados ausentes não serão estimados como fatos. Informações judiciais e de integridade dependerão de revisão documental e jurídica antes da divulgação estatística agregada.</p>
          <div className="flex flex-wrap gap-3">
            {fontes.map(f => <a className="inline-flex items-center gap-2 px-3 py-2 border border-slate-200 hover:border-masonic-gold text-sm text-masonic-blue" key={f.url} href={f.url} target="_blank" rel="noopener noreferrer">{f.nome} <ExternalLink size={14}/></a>)}
          </div>
        </section>
        <div className="mt-8 text-xs text-slate-500 flex items-start gap-2"><ArrowUpRight size={16} className="shrink-0"/> Projeto de educação cívica e acompanhamento de indicadores públicos. Dados sobre gestores não implicam juízo de culpabilidade nem avaliação político-partidária.</div>
      </main>
    </div>
  );
}
