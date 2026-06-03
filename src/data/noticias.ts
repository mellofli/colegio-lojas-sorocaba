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
    resumo: "A 1ª Semana das Lojas Conjuntas da 11ª Região teve início com Sessões Conjuntas em Sorocaba e Itapetininga.",
    imagem: "/assets/noticias/2026-05-25-semana-lojas-conjuntas.jpg",
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
    resumo: "A 1ª Semana das Lojas Conjuntas da 11ª Região – 2026 continua e segue com participação e fortalecimento das Lojas da região de maneira ativa.",
    imagem: "/assets/noticias/2026-05-15-nova-gestao.jpg",
    categoria: "Institucional",
    conteudo: `
A 1ª Semana das Lojas Conjuntas da 11ª Região – 2026 continua e segue com participação e fortalecimento das Lojas da região de maneira ativa.

Na sessão de terça-feira, no Templo da Fraternidade Acaciana, em Sorocaba, participaram as Lojas ARLS Fraternidade de Sorocaba nº 383, ARLS 4 de Julho nº 859, ARLS 25 de Julho nº 837, ARLS Discípulos de Adonhiram nº 729 e ARLS Luz, Vida e Amor nº 690. A palestra foi conduzida pelo 2º Grande Vigilante, Luiz Cesar Nitsche, com o tema “Entre a razão e as paixões: os passos do Maçom”. Estiveram presentes o Eminente Grão-Mestre Adjunto Cesar Augusto Garcia, o Delegado Regional Marcel Marangon e os Delegados Distritais Paulo Guariglia, Marco Grilo, Anderson Pereira, Eduardo Amaral, Marco Aurelio Paradizo e José Restife Neto [3ª Região Maçônica], além do irmão Antonio Roberto Barca [Secretário do Venerável Colégio].

Na sessão da Abolição, em Tatuí, reuniram-se as Lojas ARLS Abolição nº 552, ARLS 11 de Agosto nº 627 e ARLS Fidelidade e Harmonia nº 904, com palestra do Grande Orador Carlos Olimpio Cunha sobre o papel da Maçonaria nos dias de hoje. Estiveram presentes o Delegado Distrital Eduardo Amaral e o representante da Abolição, Olegario Antunes Filho.

Na sessão da Acácia Sorocabana, em Sorocaba, participaram as Lojas ARLS Acácia Sorocabana nº 97, ARLS 15 de Agosto nº 900 e ARLS Gotthold Ephraim Lessing nº 930. A palestra foi realizada pelo Grande Hospitaleiro Marcos Pelizzon, sobre a Grande Hospitalaria e os projetos da atual gestão. Estiveram presentes os Delegados Distritais Alessandro Geminiani, Paulo Guariglia e Luis Fernando Alves.

Na sessão da São João, em Sorocaba, participaram as Lojas ARLS Justa e Perfeita Loja de São João nº 680, ARLS Fidelidade e Justiça nº 565 e ARLS Justiça e Liberdade nº 830. A palestra foi conduzida pelo 1º Grande Vigilante Luiz Eduardo Montello, com o tema “Platão e a Maçonaria: o justo e o perfeito”. Estiveram presentes os Delegados Distritais Marco Grilo, Camilo Botti e Marco Aurelio Paradizo.

Na sessão da Pedra Fundamental, realizada no templo da ARLS Pedra Fundamental, participaram as Lojas ARLS Colunas de São Roque nº 446, ARLS Alvorecer de Ibiúna nº 362 e ARLS Pedra Fundamental nº 780. A palestra foi ministrada pelo Ir. Reinaldo Gomes, com o tema “Unidos pelo bem, movidos pelo coração maçônico”. Esteve presente o Delegado Distrital Anderson Pereira.

Em Capão Bonito, na sessão da União e Firmeza, participaram as Lojas ARLS União e Firmeza nº 897 e ARLS Acácia de Apiaí nº 924. A palestra foi realizada pelo Grande Secretário dos Corpos de Aperfeiçoamento Maçônico, Claudio Roberto, sobre as Ordens Colaterais Inglesas e os projetos da atual gestão. Estiveram presentes o Delegado Regional Marcel Marangon, Francisco Saccomano Neto e Felipe Mello.

A Semana reforçou o compromisso da 11ª Região com a integração entre as Lojas, a valorização dos Obreiros e a aproximação permanente com a GLESP, demonstrando que a força da Maçonaria se constrói com presença, trabalho e união fraterna.
    `
  }
];
 {
    id: "semana-lojas-conjuntas-2026",
    titulo: "Semana das Lojas Conjuntas fortalece a integração da 11ª Região",
    data: "2026-05-25",
    resumo: "A 1ª Semana das Lojas Conjuntas da 11ª Região teve início com Sessões Conjuntas em Sorocaba e Itapetininga.",
    imagem: "/assets/noticias/2026-05-25-semana-lojas-conjuntas.jpg",
    categoria: "Eventos",
    conteudo: `
A 1ª Semana das Lojas Conjuntas da 11ª Região – 2026 seguiu com grande participação dos Irmãos, consolidando uma iniciativa histórica de união, integração e fortalecimento das Oficinas da região.

Na quinta-feira, 28 de maio, no Templo da Fraternidade Acaciana, em Sorocaba, reuniram-se as Lojas ARLS Fraternidade Acaciana nº 398 e ARLS Libertas de Salto nº 637. A Sessão contou com uma apresentação especial da Sessão do Oriente Eterno, rito criado pela Libertas de Salto, proporcionando aos presentes um momento de conhecimento, reflexão e valorização da tradição maçônica. Estiveram presentes o Delegado Regional Marcel Marangon e os Delegados Distritais Paulo Guariglia, Luis Fernando Alves, Marco Aurélio Paradizo e Eduardo Amaral.

Na sexta-feira, 29 de maio, foi realizada a Sessão de Encerramento da 1ª Semana de Lojas Conjuntas, também no Templo da Fraternidade Acaciana, com a presença de 163 participantes. O encontro reuniu representantes das Lojas da 11ª Região e contou com a palestra do Sereníssimo Grão-Mestre da GLESP, Jorge Anysio Haddad, coroando a semana com uma mensagem de união, compromisso e fortalecimento institucional.

Também prestigiaram a Sessão o Grande Ouvidor Francisco Cortês, o Grande Secretário dos Corpos de Aperfeiçoamento Maçônico Claudio Roberto Silva, o 2º Grande Vigilante Luiz Cesar Nitsche, o Delegado Regional Marcel Marangon, os Delegados Distritais Rogerio Turolo, Eduardo do Amaral, Luis Fernando Alves, Camilo Botti, Felipe Mello, Marco Grilo, Marco Aurelio Paradizo, André Leme, Alessandro Geminiani, Luiz Fernando Marques Junior e Paulo Guariglia, além do Grande Representante da África do Sul, Rui Badaró.

No sábado, 30 de maio, a programação foi encerrada com o I Simpósio da Nova Gestão 2026–2027 da 11ª Região, realizado no Colégio O Farol, em Sorocaba, reunindo 122 participantes entre Veneráveis Mestres, Vigilantes, Oradores, Capelães, Secretários, Tesoureiros e Hospitaleiros das Lojas da região.

O Simpósio teve abertura do Delegado Regional Marcel Marangon, palestra do Ir. Adriano Paparelli sobre “Gestão Eficaz para Lojas Maçônicas”, apresentação do Grande Secretário de Educação Maçônica, Roberto Nincao, sobre os projetos de sua pasta, e a participação especial do Eminente Grão-Mestre Adjunto Cesar Augusto Garcia e do Grande Ouvidor Francisco Cortês.

Na condução dos módulos, participaram o *Delegado Regional Marcel Marangon, com os Veneráveis Mestres; os Delegados Distritais Paulo Guariglia, com os Secretários; Marco Grilo* e *Felipe Mello, com os Vigilantes; Francisco Saccomano Neto, com a Hospitalaria; e Alessandro Geminiani, com os Oradores.

A 1ª Semana das Lojas Conjuntas da 11ª Região demonstrou a força da Maçonaria quando suas Lojas caminham juntas. Foram dias de aprendizado, presença, convivência fraterna e compromisso com uma gestão mais preparada, integrada e participativa, reafirmando o propósito comum de fortalecer nossas Oficinas e construir uma região cada vez mais unida.
GLESP — 11ª Região
União, participação e fortalecimento de nossas Lojas.
    `
  },
