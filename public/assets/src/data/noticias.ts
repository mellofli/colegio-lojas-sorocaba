/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * COMO CADASTRAR NOVAS NOTÍCIAS:
 * 
 * 1. Prepare a imagem:
 *    - Salve a foto na pasta 'public/assets/noticias/'.
 *    - Prefira nomes padronizados como: 'AAAA-MM-DD-titulo-curto.jpg'.
 * 
 * 2. Adicione o item no array 'noticias' abaixo:
 *    - 'id': Use um identificador único (ex: slug do título).
 *    - 'titulo': O título completo da notícia.
 *    - 'data': No formato ISO 'YYYY-MM-DD' para ordenação correta.
 *    - 'resumo': Um texto curto para a listagem (cards).
 *    - 'imagem': O caminho relativo começando com '/assets/noticias/'.
 *    - 'categoria': Ex: 'Eventos', 'Institucional', 'Social', 'Avisos'.
 *    - 'conteudo': O texto completo. Use crases (``) para textos longos com quebra de linha.
 */

export interface Noticia {
  id: string;
  titulo: string;
  data: string;
  resumo: string;
  imagem: string;
  categoria: string;
  conteudo: string;
}

export const noticias: Noticia[] = [
  {
    id: "semana-lojas-conjuntas-2026 - 25 de maio de 2025",
    titulo: "Semana das Lojas Conjuntas fortalece a integração da 11ª Região",
    data: "2026-05-25",
    resumo: "A 1ª Semana das Lojas Conjuntas da 11ª Região teve início com Sessões Conjuntas em Sorocaba e Itapetininga.",
    imagem: "/assets/noticias/2026-05-25-1.jpg",
    categoria: "Eventos",
    conteudo: `
A 1ª Semana das Lojas Conjuntas da 11ª Região teve início com Sessões Conjuntas em Sorocaba e Itapetininga, marcando um momento histórico de união, integração e fortalecimento das Lojas, em uma iniciativa que movimentará cerca de 1.200 maçons da região.

Em Sorocaba, as ARLS Colunas de Salomão nº 738, ARLS André Luiz nº 766, ARLS Colunas de Ipanema nº 799 e ARLS Tropeiros de Sorocaba nº 824 receberam o Grande Secretário de Assuntos Institucionais, Ir. Andrea Ceresa. O encontro também foi marcado pelo plantio de uma acácia, símbolo de renovação e permanência. Estiveram presentes os Delegados Distritais da 11ª Região: Paulo Guariglia, Marco Grilo, Marco Aurelio Paradizo, Eduardo Amaral, Camilo Botti, Felipe Mello e David Pereira Silva, da 6ª Região, 7º Distrito.

Em Itapetininga, a ARLS Harmonia e Trabalho nº 222, ARLS Fidelidade nº 931 e ARLS União Paulista Itapetininga nº 879 receberam o Grande Secretário da Cultura, Ir. Roberto Hathner, acompanhado pelo Delegado Regional da 11ª Região Marcel Marangon e o Delegado Distrital Luiz Fernando Junior e Hermínio Oliveira Neto da 38ª Região, além de José Vantuir de Souza Lopes Júnior - Juiz do TMR. ⁠

A 1ª Semana das Lojas Conjuntas da 11ª Região segue como uma iniciativa histórica, construída pelo esforço coletivo das Lojas, Delegados e Irmãos, reafirmando que a verdadeira força da Maçonaria está na união, na presença ativa e no compromisso de cada Obreiro com o futuro da Instituição.

GLESP — 11ª Região
União, participação e fortalecimento de nossas Lojas.
    `
  },
  {
    id: "nova-gestao-2026",
    titulo: "Nova Gestão Projeta Avanços para o Colégio de Lojas",
    data: "2026-05-15",
    resumo: "A nova diretoria do Colégio de Lojas da região de Sorocaba tomou posse com foco na integração regional.",
    imagem: "/assets/noticias/2026-05-15-nova-gestao.jpg",
    categoria: "Institucional",
    conteudo: `
O Colégio de Lojas Maçônicas da GLESP de Sorocaba e Região deu início a uma nova etapa em sua trajetória com a posse da nova diretoria para o período 2026-2027.

O foco principal da nova gestão será a integração das mais de 20 lojas da jurisdição e o fomento à educação maçônica através de novos ciclos de palestras e seminários.

Entre as metas estabelecidas, destacam-se o fortalecimento das ações de caridade conjuntas e a modernização da comunicação entre as oficinas, garantindo que as informações e convites circulem de forma eficiente por todo o oriente.
    `
  }
];
