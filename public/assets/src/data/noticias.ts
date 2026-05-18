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
    id: "semana-lojas-conjuntas-2026",
    titulo: "Semana das Lojas Conjuntas fortalece a integração da 11ª Região",
    data: "2026-05-25",
    resumo: "A 11ª Região realiza uma semana especial de sessões conjuntas, reunindo Lojas de Sorocaba e região.",
    imagem: "/assets/noticias/2026-05-25-semana-lojas-conjuntas.jpg",
    categoria: "Eventos",
    conteudo: `
A Semana das Lojas Conjuntas da 11ª Região marca um importante momento de união, aprendizado e fortalecimento institucional.

As atividades reúnem diversas Oficinas da região, com a presença de autoridades maçônicas e palestras voltadas à integração das Lojas.

O evento, que já se tornou uma tradição no calendário regional, visa aproximar os irmãos de diferentes orientes, promovendo a troca de experiências ritualísticas e administrativas, além de estreitar os laços de fraternidade que unem a família maçônica sorocabana.
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
