import { Topic } from '../types/history';

export const GRADE_9_TOPICS: Topic[] = [
  // ==========================================
  // 9º ANO - TÓPICO 1: REVOLTAS URBANAS (10 QUESTÕES)
  // ==========================================
  {
    id: '9-revoltas-vacina-chibata',
    grade: '9',
    gradeLabel: '9º Ano',
    period: 'Brasil República',
    title: 'Revoltas Urbanas no Rio: Vacina (1904) e Chibata (1910)',
    subtitle: 'A reforma Pereira Passos, a revolta popular e o levante dos marinheiros negros na Baía',
    tempoLeituraMin: 5,
    tags: ['Revolta da Vacina', 'Revolta da Chibata', 'João Cândido', 'Oswaldo Cruz', 'Pereira Passos'],
    summary: {
      introducao: [
        'No início do século XX, o Rio de Janeiro continuava sendo a capital da jovem República, mas enfrentava graves epidemias (varíola, febre amarela e peste bubônica) e superpopulação nos cortiços do centro.',
        'O presidente Rodrigues Alves nomeou o prefeito Francisco Pereira Passos e o médico sanitarista Oswaldo Cruz para modernizar a cidade. Inspirado em Paris, Pereira Passos promoveu o "Bota-Abaixo": demoliu centenas de casarões e cortiços para abrir largas avenidas (como a Avenida Central, atual Rio Branco), expulsando a população pobre para os morros sem moradia digna.',
        'Em novembro de 1904, a aprovação da lei que tornava obrigatória a vacinação contra a varíola, aplicada de forma autoritária por brigadas sanitárias que invadiam lares, desencadeou a Revolta da Vacina: o povo ergueu barricadas, quebrou bondes e enfrentou a polícia por dias.',
        'Poucos anos depois, em 1910, estourou a Revolta da Chibata: marinheiros da Armada Nacional, em sua imensa maioria negros e mestiços, liderados pelo gaúcho João Cândido Felisberto (o "Almirante Negro"), rebelaram-se contra os castigos corporais (chibatadas) e a alimentação podre a bordo dos encouraçados Minas Geraes e São Paulo, apontando os canhões para o palácio do governo no Rio.'
      ],
      pontosChave: [
        'Reforma Pereira Passos ("Bota-Abaixo"): Modernização excludente que visava embelezar a cidade para as elites e expulsou os pobres para as favelas.',
        'Revolta da Vacina (1904): Explosão de descontentamento social contra o autoritarismo estatal e o desabrigo forçado.',
        'Revolta da Chibata (1910): Movimento contra resquícios escravocratas na Marinha de Guerra brasileira.',
        'João Cândido ("Almirante Negro"): Herói popular que assumiu o comando da esquadra exigindo dignidade e o fim dos açoites.'
      ],
      conexaoRio: 'A estátua de João Cândido está erguida na Praça XV, de frente para a Baía de Guanabara onde navegavam os navios rebeldes. O Instituto Oswaldo Cruz (Fiocruz), em Manguinhos, com seu castelo mourisco, é patrimônio científico carioca!',
      linhaTempo: [
        { ano: '1902–1906', evento: 'Gestão de Pereira Passos promove o desmonte do Morro do Castelo e abertura da Av. Central.' },
        { ano: '1904', evento: 'Eclosão da Revolta da Vacina nas ruas da Saúde, Gamboa e Praça da República.' },
        { ano: '1910', evento: 'Revolta da Chibata: João Cândido e marinheiros exigem anistia e fim dos castigos corporais.' },
        { ano: '2008', evento: 'Inauguração do monumento a João Cândido nos jardins da Praça XV no Rio de Janeiro.' }
      ],
      paraFicarLigado: 'O povo não era contra a ciência em si na Revolta da Vacina, mas sim contra a invasão humilhante de suas casas e o acúmulo de perdas causadas pelo Bota-Abaixo que jogou milhares de famílias nas ruas!'
    },
    flashcards: [
      { id: 'fc-9-rv1', termo: 'Bota-Abaixo', significado: 'Demolição maciça de habitações populares e cortiços no Centro do Rio de Janeiro pelo prefeito Pereira Passos.' },
      { id: 'fc-9-rv2', termo: 'João Cândido', significado: 'Marinheiro negro conhecido como "Almirante Negro", líder heroico da Revolta da Chibata contra os açoites na Marinha.' },
      { id: 'fc-9-rv3', termo: 'Oswaldo Cruz', significado: 'Pioneiro da medicina sanitária no Brasil, erradicou a febre amarela e enfrentou a varíola no Rio.' }
    ],
    questions: [
      {
        id: 'q-9-1',
        pergunta: 'A Revolta da Vacina (1904) no Rio de Janeiro não pode ser compreendida apenas como uma recusa médica à vacina da varíola. Que contexto social mais amplo explica a revolta popular?',
        opcoes: [
          'A revolta refletiu a insatisfação popular com a política de "Bota-Abaixo" de Pereira Passos, a inflação, o autoritarismo policial e o desalojamento violento dos mais pobres do Centro.',
          'A revolta foi organizada por espiões russos para entregar o porto do Rio de Janeiro à Alemanha imperial.',
          'O povo carioca estava furioso porque exigia tomar três doses a mais de vacina do que o governo oferecia.',
          'A população protestava unicamente contra o preço dos ingressos para o Theatro Municipal do Rio.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'A vacinação obrigatória foi a faísca que detonou um barril de pólvora: descontentamento com as demolições dos cortiços (Bota-Abaixo), custo de vida elevado e truculência policial nos bairros operários.',
        diagnosticoErros: {
          1: { misconception: 'Você confundiu episódios da Guerra Fria ou Primeira Guerra com a política urbana local do Rio.', guidanceTip: 'A revolta foi um levante de moradores de rua, carvoeiros, capoeiristas e trabalhadores cariocas.', conceptReview: 'A Revolta da Vacina foi um movimento eminentemente popular interno contra a opressão urbana.' },
          2: { misconception: 'Você inverteu a causa do conflito sanitário.', guidanceTip: 'A população rejeitava a vacina obrigatória porque guardas e médicos entravam à força nas casas.', conceptReview: 'A falta de diálogo pedagógico e a invasão de domicílio desencadearam a revolta.' },
          3: { misconception: 'Você confundiu uma demanda cultural de elite com uma grave revolta social.', guidanceTip: 'O Theatro Municipal sequer estava inaugurado em 1904 (foi aberto em 1909); as pessoas estavam sendo despejadas.', conceptReview: 'Os motivos do levante eram habitação, sobrevivência e dignidade.' }
        },
        habilidadeBNCC: 'EF09HI02'
      },
      {
        id: 'q-9-2',
        pergunta: 'Qual era a principal reivindicação dos marinheiros liderados por João Cândido durante a Revolta da Chibata em 1910?',
        opcoes: [
          'O fim imediato dos castigos corporais (chibatadas), melhores condições de alimentação e trabalho na Armada e anistia para os revoltosos.',
          'A volta da monarquia e a coroação do marinheiro João Cândido como imperador vitalício do Brasil.',
          'O bombardeio imediato da cidade de Santos para anexá-la ao estado de São Paulo.',
          'A obrigação de que todos os marinheiros usassem uniformes de gala importados da França.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'A Revolta da Chibata exigia a extinção dos castigos físicos degradantes na Marinha (que remetiam ao período da escravidão), aumento do soldo e tratamento digno para as tripulações.',
        diagnosticoErros: {
          1: { misconception: 'Você imaginou uma ambição golpista monárquica inexistente.', guidanceTip: 'Leia o telegrama dos marinheiros ao presidente: pediam cidadania, honra e humanidade.', conceptReview: 'Os marinheiros lutavam por direitos humanos fundamentais contra a violência dos oficiais.' },
          2: { misconception: 'Você errou a geografia do conflito.', guidanceTip: 'A esquadra rebelde estava na Baía de Guanabara, na capital Rio de Janeiro.', conceptReview: 'A Revolta da Chibata ocorreu em frente ao Palácio do Catete no Rio.' },
          3: { misconception: 'Você minimizou a luta contra a tortura em uma futilidade de vestuário.', guidanceTip: 'Marinheiros recebiam até 250 chibatadas por faltas leves até sangrarem.', conceptReview: 'A revolta visava abolir a chibata, uma prática violenta e racista herdada da colônia.' }
        },
        habilidadeBNCC: 'EF09HI03'
      },
      {
        id: 'q-9-1-3',
        pergunta: 'A reforma urbana do prefeito Francisco Pereira Passos no Centro do Rio de Janeiro ficou conhecida popularmente pela expressão:',
        opcoes: [
          '"Bota-Abaixo", em referência à demolição rápida e forçada de centenas de cortiços e moradias populares.',
          '"Cidade Jardim Sustentável".',
          '"Pacto da Amizade Carioca".',
          '"Construção do Paraíso dos Trabalhadores".'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'O Bota-Abaixo visava europeizar a capital a qualquer custo, derrubando o casario antigo para abrir bulevares como a Avenida Central, sem se preocupar para onde iriam os mais pobres.',
        diagnosticoErros: {
          1: { misconception: 'Você usou um conceito ecológico contemporâneo.', guidanceTip: 'A reforma de Passos foi agressiva e cinzenta, baseada na demolição e abertura de avenidas para carros.', conceptReview: 'A expressão popular de protesto era "Bota-Abaixo".' },
          2: { misconception: 'Você imaginou uma conciliação pacífica entre o poder público e a população.', guidanceTip: 'Houve protestos ferozes da população expulsa de seus lares.', conceptReview: 'O Bota-Abaixo foi uma das intervenções mais autoritárias da história do Rio.' },
          3: { misconception: 'Você pensou em uma política voltada para o benefício operário.', guidanceTip: 'A reforma atendeu aos interesses das elites comerciais e do capital estrangeiro.', conceptReview: 'Os trabalhadores foram expulsos para as periferias e morros.' }
        },
        habilidadeBNCC: 'EF09HI02'
      },
      {
        id: 'q-9-1-4',
        pergunta: 'Como o médico sanitarista Oswaldo Cruz conseguiu erradicar a febre amarela no Rio de Janeiro no início do século XX?',
        opcoes: [
          'Identificou e combateu o mosquito transmissor (Aedes aegypti) através de brigadas de "mata-mosquitos" que eliminavam focos de água parada nos quintais e calhas.',
          'Mandou fechar todas as farmácias e hospitais da cidade.',
          'Obrigou toda a população a beber apenas água salgada do mar.',
          'Demoliu todos os navios que atracavam na Baía de Guanabara com dinamite.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Inspirado nas pesquisas em Cuba de Carlos Finlay, Oswaldo Cruz montou brigadas sanitárias que atacaram as larvas do mosquito, transformando o Rio de "porto da morte" em cidade salubre.',
        diagnosticoErros: {
          1: { misconception: 'Você atribuiu ao cientista uma atitude contrária à saúde.', guidanceTip: 'Oswaldo Cruz criou laboratórios de ponta e fortaleceu a pesquisa médica no Instituto de Manguinhos.', conceptReview: 'Oswaldo Cruz foi o pai da saúde pública científica no Brasil.' },
          2: { misconception: 'Você propôs uma medida médica tóxica e absurda.', guidanceTip: 'Água salgada desidrata o corpo humano; o combate foi focado na eliminação dos criadouros de mosquitos.', conceptReview: 'A ciência comprovou que o vetor da febre amarela era o mosquito Aedes aegypti.' },
          3: { misconception: 'Você exagerou para a destruição de embarcações.', guidanceTip: 'Os navios passavam por quarentena e desinfecção química na Ilha Grande.', conceptReview: 'As medidas sanitárias permitiram o retorno do comércio internacional seguro no porto.' }
        },
        habilidadeBNCC: 'EF09HI02'
      },
      {
        id: 'q-9-1-5',
        pergunta: 'O estopim da Revolta da Chibata em novembro de 1910 foi o castigo aplicado ao marinheiro negro Marcelino Rodrigues Menezes, que foi punido com:',
        opcoes: [
          '250 chibatadas diante de toda a tripulação em forma a bordo do encouraçado Minas Geraes, por uma infração menor.',
          'Uma condecoração de honra e uma medalha de ouro das mãos do presidente da República.',
          'Uma viagem de férias com tudo pago para a Europa.',
          'Uma promoção imediata a comandante de toda a esquadra brasileira.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'O regulamento previa no máximo 25 chibatadas, mas os oficiais aplicaram 250 chibatadas até o marinheiro desmaiar em poças de sangue, provocando a revolta indignada dos marinheiros.',
        diagnosticoErros: {
          1: { misconception: 'Você imaginou uma homenagem em vez de uma punição bárbara.', guidanceTip: 'A Marinha da época tratava os marinheiros negros como subcidadãos com punições cruéis.', conceptReview: 'A revolta foi uma reação contra a tortura sistemática na Armada.' },
          2: { misconception: 'Você confundiu cativeiro militar com privilégio turístico.', guidanceTip: 'Os marinheiros viviam confinados, comendo carne estragada e sofrendo abusos de autoridade.', conceptReview: 'O motim de João Cândido exigia o fim dos castigos corporais desumanos.' },
          3: { misconception: 'Você inverteu a hierarquia da Marinha.', guidanceTip: 'Marinheiros negros eram impedidos de subir de patente pelos regulamentos racistas da época.', conceptReview: 'Foi preciso o levante dos marinheiros para forçar o governo a prometer o fim dos açoites.' }
        },
        habilidadeBNCC: 'EF09HI03'
      },
      {
        id: 'q-9-1-6',
        pergunta: 'Apesar de o presidente Hermes da Fonseca ter prometido anistia aos marinheiros rebeldes da Chibata após eles devolverem os navios, o governo republicano:',
        opcoes: [
          'Traiu a palavra empenhada, prendeu dezenas de revoltosos na Ilha das Cobras e os enviou para trabalhos forçados nos seringais do Acre, onde muitos morreram.',
          'Cumpriu rigorosamente a anistia e nomeou João Cândido como ministro da Justiça.',
          'Entregou a cidade do Rio de Janeiro para o governo dos Estados Unidos.',
          'Proclamou a monarquia de volta e fechou todas as escolas da cidade.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'A repressão foi implacável: João Cândido sobreviveu à cela sufocante com cal virgem na Ilha das Cobras e foi expulso da Marinha, vivendo na pobreza vendendo peixe na Praça XV.',
        diagnosticoErros: {
          1: { misconception: 'Você acreditou na fidelidade da palavra das elites oligárquicas da época.', guidanceTip: 'A República Velha reprimiu brutalmente todos os levantes populares e operários.', conceptReview: 'João Cândido sofreu perseguição, prisão ilegal e internação psiquiátrica arbitrária.' },
          2: { misconception: 'Você imaginou uma perda de soberania nacional inexistente.', guidanceTip: 'O governo brasileiro sufocou o movimento internamente para demonstrar força.', conceptReview: 'O episódio demonstrou a violência da ordem oligárquica contra líderes negros populares.' },
          3: { misconception: 'Você confundiu as consequências da revolta militar com restauração monárquica.', guidanceTip: 'A República se manteve e usou o estado de sítio para prender jornalistas e ativistas.', conceptReview: 'João Cândido só foi anistiado formalmente pelo Congresso Nacional quase um século depois.' }
        },
        habilidadeBNCC: 'EF09HI03'
      },
      {
        id: 'q-9-1-7',
        pergunta: 'Durante a Revolta da Vacina em 1904, o bairro da Saúde, no Centro do Rio de Janeiro, ficou conhecido como o epicentro da resistência popular liderada por:',
        opcoes: [
          'Horácio José da Silva, o "Prata Preta", que ergueu barricadas de paralelepípedos e resistiu à polícia e ao exército.',
          'Getúlio Vargas e seus generais em tanques de guerra blindados.',
          'Soldados ingleses que queriam anexar o porto do Rio.',
          'Faraós egípcios mumificados que saíram das pirâmides.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Prata Preta foi um líder capoeirista e carvoeiro que organizou a população da Saúde, montando barricadas que impediram a entrada da cavalaria policial por vários dias.',
        diagnosticoErros: {
          1: { misconception: 'Você cometeu um anacronismo com a Revolução de 1930 de Vargas.', guidanceTip: 'Vargas só chegou à presidência 26 anos depois, em 1930.', conceptReview: 'Prata Preta era uma liderança comunitária popular do porto carioca.' },
          2: { misconception: 'Você confundiu a resistência local carioca com tropas estrangeiras.', guidanceTip: 'A revolta foi realizada por trabalhadores brasileiros que não aguentavam mais o desrespeito policial.', conceptReview: 'O bairro da Saúde era um bastião da comunidade afro-carioca e dos capoeiras.' },
          3: { misconception: 'Você misturou arqueologia egípcia com as lutas urbanas do Rio republicano.', guidanceTip: 'O Porto do Rio era habitado por operários, portuários e ex-escravizados.', conceptReview: 'A memória de Prata Preta é reverenciada na história das lutas populares cariocas.' }
        },
        habilidadeBNCC: 'EF09HI02'
      },
      {
        id: 'q-9-1-8',
        pergunta: 'O apelido "Porto da Morte", pelo qual o Rio de Janeiro era tristemente conhecido no final do século XIX por viajantes internacionais, devia-se:',
        opcoes: [
          'Às terríveis epidemias recorrentes de febre amarela, varíola e peste bubônica que matavam milhares de marinheiros e passageiros que desembarcavam na cidade.',
          'A ataques constantes de tubarões gigantes treinados por piratas holandeses.',
          'A erupções de lavas incandescentes dentro da Baía de Guanabara.',
          'Ao fato de todos os relógios da cidade terem parado de funcionar simultaneamente.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Navios estrangeiros evitavam atracar no porto carioca durante os meses de verão porque tripulações inteiras contraíam febre amarela e morriam nos hospitais locais.',
        diagnosticoErros: {
          1: { misconception: 'Você escolheu uma lenda marinha fantástica.', guidanceTip: 'A causa das mortes eram doenças infectocontagiosas transmitidas por mosquitos e ratos.', conceptReview: 'As más condições de esgoto e moradia favoreciam a proliferação de vetores biológicos.' },
          2: { misconception: 'Você inventou um cataclismo geológico inexistente.', guidanceTip: 'O problema do Rio era de saúde pública e infraestrutura sanitária precária.', conceptReview: 'Foi esse estigma internacional que motivou o plano sanitarista de Oswaldo Cruz.' },
          3: { misconception: 'Você confundiu medição de tempo mecânico com epidemias biológicas.', guidanceTip: 'A febre amarela causava vômito negro e icterícia, ceifando vidas aos milhares.', conceptReview: 'A saneamento do Rio foi uma das maiores operações médicas do continente.' }
        },
        habilidadeBNCC: 'EF09HI02'
      },
      {
        id: 'q-9-1-9',
        pergunta: 'Hoje, o Instituto Oswaldo Cruz (Fiocruz), localizado em Manguinhos na Zona Norte do Rio de Janeiro, é considerado:',
        opcoes: [
          'Uma das mais importantes instituições de ciência, pesquisa biomédica e fabricação de vacinas de toda a América Latina.',
          'Um quartel secreto de soldados gladiadores romanos.',
          'Um shopping center exclusivo de roupas de luxo europeias.',
          'Uma prisão para marinheiros que se recusam a limpar o convés.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'A Fiocruz, com seu famoso Castelo Mourisco, é patrimônio da ciência brasileira, salvando milhões de vidas com vacinas (como as da Covid-19 e febre amarela) e pesquisas de saúde pública.',
        diagnosticoErros: {
          1: { misconception: 'Você confundiu centros científicos com arenas romanas antigas.', guidanceTip: 'A Fiocruz é um complexo de laboratórios científicos da rede pública de saúde (SUS).', conceptReview: 'Oswaldo Cruz fundou a instituição originalmente como Instituto Soroterápico Federal.' },
          2: { misconception: 'Você confundiu ciência pública com comércio privado.', guidanceTip: 'A Fiocruz é uma fundação pública federal dedicada à saúde coletiva.', conceptReview: 'Seus cientistas desenvolvem medicamentos para o SUS de graça para a população.' },
          3: { misconception: 'Você confundiu instituições científicas com presídios militares.', guidanceTip: 'A Fiocruz produz conhecimento e salva vidas humanas diariamente.', conceptReview: 'É um dos maiores orgulhos do patrimônio científico e arquitetônico carioca.' }
        },
        habilidadeBNCC: 'EF09HI02'
      },
      {
        id: 'q-9-1-10',
        pergunta: 'A canção "O Mestre-Sala dos Mares", composta por Aldir Blanc e João Bosco e imortalizada na voz de Elis Regina, homenageia qual herói da história carioca e brasileira?',
        opcoes: [
          'João Cândido, o líder da Revolta da Chibata, celebrado como o "Almirante Negro".',
          'Francisco Pereira Passos, pelo desmonte dos cortiços.',
          'O imperador Napoleão Bonaparte da França.',
          'O navegador genovês Cristóvão Colombo.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'A música canta: "Glória aos piratas, às mulatas, às sereias / Glória à farofa, à cachaça, às baleias / Glória a todas as lutas inglórias / Que através da nossa história / Não renderam glórias / Salve o Almirante Negro!".',
        diagnosticoErros: {
          1: { misconception: 'Você escolheu o prefeito que realizou o Bota-Abaixo contra os mais pobres.', guidanceTip: 'A música homenageia um combatente negro da liberdade contra a opressão.', conceptReview: 'A canção foi censurada durante a ditadura militar justamente por exaltar João Cândido.' },
          2: { misconception: 'Você deslocou a MPB carioca para o imperador da França.', guidanceTip: 'A letra fala de marinheiros na Baía de Guanabara apontando os canhões para o Rio.', conceptReview: 'A MPB resgatou a memória popular de heróis esquecidos pela história oficial.' },
          3: { misconception: 'Você confundiu o navegador de 1492 com o herói do levante da Guanabara de 1910.', guidanceTip: 'João Cândido era um marinheiro negro de origem humilde do Rio Grande do Sul.', conceptReview: 'Ele é reconhecido como símbolo máximo de dignidade e cidadania dos marinheiros brasileiros.' }
        },
        habilidadeBNCC: 'EF09HI03'
      }
    ]
  },

  // ==========================================
  // 9º ANO - TÓPICO 2: ERA VARGAS & RIO (10 QUESTÕES)
  // ==========================================
  {
    id: '9-era-vargas-rio',
    grade: '9',
    gradeLabel: '9º Ano',
    period: 'Brasil República',
    title: 'A Era Vargas e o Rio de Janeiro como Capital Federal',
    subtitle: 'Industrialização, criação da CLT, rádio nacional e o Estado Novo (1930–1945)',
    tempoLeituraMin: 5,
    tags: ['Getúlio Vargas', 'CLT', 'Palácio Guanabara', 'Estado Novo', 'Industrialização'],
    summary: {
      introducao: [
        'Com a Revolução de 1930, Getúlio Vargas assumiu a presidência, pondo fim à República Oligárquica (do café com leite). Durante seus 15 anos ininterruptos no poder (1930–1945), o Rio de Janeiro foi o epicentro político e cultural do país.',
        'Vargas impulsionou a industrialização de base (como a Companhia Siderúrgica Nacional - CSN, em Volta Redonda, no estado do Rio) e instituiu leis trabalhistas fundamentais, consolidadas na CLT (Consolidação das Leis do Trabalho) em 1943: salário mínimo, férias remuneradas, jornada de 8 horas e carteira de trabalho.',
        'Em 1937, Vargas deu um golpe de Estado e instaurou a ditadura do Estado Novo. O regime fechou o Congresso, censurou a imprensa pelo DIP (Departamento de Imprensa e Propaganda) e utilizou o Rádio Nacional no Rio para construir a imagem de Vargas como o "Pai dos Pobres".',
        'Ao mesmo tempo, marcos arquitetônicos modernistas foram erguidos no Centro do Rio, como o Palácio Gustavo Capanema (antigo Ministério da Educação e Saúde, projetado por Lúcio Costa, Niemeyer e Le Corbusier).'
      ],
      pontosChave: [
        'Trabalhismo e CLT: Concessão e garantia de direitos sociais fundamentais para a classe trabalhadora urbana.',
        'Industrialização de Base: Criação da CSN em Volta Redonda (RJ), alavancando a infraestrutura nacional.',
        'Estado Novo (1937-1945): Ditadura com censura prévia, repressão política aos opositores e propaganda governamental intensiva.',
        'Cultura de Massas: O samba carioca e os programas de rádio ganharam projeção nacional a partir dos estúdios da Rádio Nacional na Praça Mauá.'
      ],
      conexaoRio: 'O Palácio do Catete (onde Vargas cometeu suicídio em 1954 com a célebre carta-testamento) é hoje o Museu da República no bairro do Catete, aberto à visitação pública!',
      linhaTempo: [
        { ano: '1930', evento: 'Vargas chega ao poder com a Revolução de 1930.' },
        { ano: '1937', evento: 'Instauração da ditadura do Estado Novo após a farsa do Plano Cohen.' },
        { ano: '1943', evento: 'Promulgação da Consolidação das Leis do Trabalho (CLT) no Estádio de São Januário no Rio.' },
        { ano: '1945', evento: 'Fim do Estado Novo e redemocratização.' }
      ],
      paraFicarLigado: 'O trabalhismo de Vargas tinha dupla face: ao mesmo tempo em que garantiu direitos reivindicados há décadas pelos operários, colocou os sindicatos sob rígido controle e tutela do Estado.'
    },
    flashcards: [
      { id: 'fc-9-ev1', termo: 'CLT (1943)', significado: 'Consolidação das Leis do Trabalho, unificando direitos como férias, jornada limite, descanso semanal e salário mínimo.' },
      { id: 'fc-9-ev2', termo: 'DIP', significado: 'Departamento de Imprensa e Propaganda do Estado Novo, responsável pela censura a jornais e exaltação cívica do governo.' },
      { id: 'fc-9-ev3', termo: 'Rádio Nacional do Rio', significado: 'Emissora sediada no Edifício A Noite na Praça Mauá, transmitia radionovelas e música para todo o Brasil.' }
    ],
    questions: [
      {
        id: 'q-9-3',
        pergunta: 'Durante a Era Vargas, a criação da Consolidação das Leis do Trabalho (CLT) em 1943 no Rio de Janeiro representou:',
        opcoes: [
          'A unificação e legalização de direitos trabalhistas históricos (como salário mínimo e férias remuneradas), mantendo os sindicatos sob tutela do Estado.',
          'A proibição imediata de qualquer trabalhador receber salário ou ter carteira de trabalho.',
          'A destruição completa de todas as indústrias nacionais brasileiras para favorecer a importação de café.',
          'Um decreto que obrigava todos os brasileiros a trabalharem 18 horas diárias sem descanso aos domingos.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'A CLT atendeu a demandas históricas da classe operária, ao mesmo tempo em que organizava os sindicatos sob o controle do Ministério do Trabalho para evitar greves autônomas.',
        diagnosticoErros: {
          1: { misconception: 'Você associou erroneamente a CLT à perda de direitos em vez de sua conquista formal.', guidanceTip: 'Pense em por que Vargas foi apelidado de "Pai dos Pobres" pelos trabalhadores fabris.', conceptReview: 'A CLT estabeleceu a carteira profissional e pisos salariais mínimos legais.' },
          2: { misconception: 'Você confundiu a política varguista com desindustrialização.', guidanceTip: 'Vargas criou a CSN e a Vale do Rio Doce para impulsionar a indústria de base.', conceptReview: 'O governo Vargas foi o grande impulsionador da substituição de importações.' },
          3: { misconception: 'Você inverteu a jornada de trabalho: a lei fixou limites máximos.', guidanceTip: 'Antes das leis trabalhistas, as pessoas trabalhavam até 14 horas diárias; a lei instituiu o teto de 8 horas.', conceptReview: 'A jornada padrão de 8 horas foi uma das maiores conquistas da CLT.' }
        },
        habilidadeBNCC: 'EF09HI05'
      },
      {
        id: 'q-9-2-2',
        pergunta: 'Em 10 de novembro de 1937, Getúlio Vargas anunciou pelo rádio a outorga da "Constituição Polaca" e o fechamento do Congresso, instaurando:',
        opcoes: [
          'A ditadura do Estado Novo (1937–1945), caracterizada por censura prévia à imprensa, proibição de partidos políticos e culto à personalidade do governante.',
          'A monarquia parlamentarista com D. Pedro III como rei vitalício.',
          'Uma democracia participativa com votações diárias via redes sociais.',
          'A independência do estado do Rio de Janeiro como um país separado do Brasil.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'O Estado Novo foi um regime autoritário inspirado no fascismo europeu, que prendeu opositores políticos (como comunistas e liberais) e censurou artistas e rádios.',
        diagnosticoErros: {
          1: { misconception: 'Você confundiu a república autoritária com uma volta da monarquia.', guidanceTip: 'Vargas era presidente republicano civil; a Constituição de 1937 concentrava todos os poderes no Executivo.', conceptReview: 'O Estado Novo foi um regime de força liderado pelo próprio Getúlio.' },
          2: { misconception: 'Você usou tecnologia de redes digitais modernas.', guidanceTip: 'O Estado Novo proibiu eleições diretas e extinguiu todos os partidos políticos do país.', conceptReview: 'Não havia liberdade de voto ou de associação partidária no Estado Novo.' },
          3: { misconception: 'Você inventou um movimento separatista fluminense.', guidanceTip: 'Vargas era um nacionalista ferrenho que centralizou a união em torno da capital Rio.', conceptReview: 'Vargas chegou a queimar publicamente as bandeiras estaduais para simbolizar a união nacional.' }
        },
        habilidadeBNCC: 'EF09HI05'
      },
      {
        id: 'q-9-2-3',
        pergunta: 'O pretexto forjado utilizado por Vargas e pelo exército para justificar o golpe de Estado de 1937 e assustar a classe média com uma suposta ameaça comunista foi o:',
        opcoes: [
          'Plano Cohen, um falso documento que planejava massacres, greves e queima de igrejas, forjado pelo capitão Mourão Filho.',
          'Plano Marshall de reconstrução da Europa.',
          'Tratado de Madri de divisão de terras com a Espanha.',
          'Plano Real de estabilização da moeda de 1994.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'O Plano Cohen foi uma farsa montada dentro das forças armadas: atribuiu-se falsamente a militantes comunistas um plano terrorista sangrento para criar pânico moral e justificar a ditadura.',
        diagnosticoErros: {
          1: { misconception: 'Você confundiu a farsa golpista interna com a ajuda econômica dos EUA no pós-Segunda Guerra.', guidanceTip: 'O Plano Marshall foi uma ajuda financeira aos países europeus em 1947.', conceptReview: 'O Plano Cohen foi uma farsa golpista brasileira criada em 1937.' },
          2: { misconception: 'Você cometeu um anacronismo de séculos com o Tratado de Madri (1750).', guidanceTip: 'O Tratado de Madri redefiniu fronteiras coloniais na América portuguesa.', conceptReview: 'O golpe do Estado Novo ocorreu no contexto da polarização ideológica dos anos 1930.' },
          3: { misconception: 'Você confundiu o plano de combate à inflação dos anos 1990 com o golpe de 1937.', guidanceTip: 'O Plano Real criou a moeda Real em 1994 no governo Itamar Franco.', conceptReview: 'O Plano Cohen foi a mentira que legitimou o fechamento democrático varguista.' }
        },
        habilidadeBNCC: 'EF09HI05'
      },
      {
        id: 'q-9-2-4',
        pergunta: 'Durante o Estado Novo, o órgão oficial encarregado de censurar jornais, rádios, livros e cinema, além de produzir a propaganda do governo Vargas, era o:',
        opcoes: [
          'DIP (Departamento de Imprensa e Propaganda).',
          'FBI dos Estados Unidos.',
          'Tribunal do Santo Ofício da Inquisição.',
          'IPHAN de preservação de museus.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'O DIP exercia censura rigorosa: nenhum jornal podia publicar notícias sem carimbo de aprovação e as rádios transmitiam diariamente "A Hora do Brasil" exaltando Vargas.',
        diagnosticoErros: {
          1: { misconception: 'Você escolheu uma agência federal de investigação norte-americana.', guidanceTip: 'O órgão foi criado por Vargas no Rio de Janeiro para atuar em todo o território nacional.', conceptReview: 'O DIP coordenava a censura e a imagem oficial do Estado Novo.' },
          2: { misconception: 'Você confundiu a inquisição religiosa medieval/moderna com a censura do século XX.', guidanceTip: 'O DIP era um departamento do governo federal laico moderno.', conceptReview: 'O DIP produzia cartilhas infantis e desfiles cívicos nas datas patrióticas.' },
          3: { misconception: 'Você confundiu proteção do patrimônio cultural com censura estatal.', guidanceTip: 'O IPHAN protege edifícios históricos; o DIP perseguia jornalistas e opositores.', conceptReview: 'O DIP fiscalizava letras de samba para que não exaltassem a malandragem.' }
        },
        habilidadeBNCC: 'EF09HI05'
      },
      {
        id: 'q-9-2-5',
        pergunta: 'A fundação da Companhia Siderúrgica Nacional (CSN) em Volta Redonda, no estado do Rio de Janeiro, representou para a economia brasileira:',
        opcoes: [
          'O nascimento da indústria de base nacional (produção de aço), permitindo que o Brasil deixasse de ser puramente agrário e pudesse fabricar máquinas e automóveis.',
          'A destruição de todas as fábricas brasileiras para comprar trilhos da Argentina.',
          'Uma fazenda colonial de cana-de-açúcar movida a tração animal.',
          'Uma mina secreta de esmeraldas de onde saíam as coroas dos imperadores.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Sem aço, nenhum país constrói ferrovias, pontes ou motores. A CSN foi o coração da arrancada industrial brasileira, negociada estrategicamente com os EUA durante a Segunda Guerra.',
        diagnosticoErros: {
          1: { misconception: 'Você presumiu um retrocesso produtivo.', guidanceTip: 'A CSN forneceu o aço necessário para ferrovias, navios e prédios do Brasil moderno.', conceptReview: 'A indústria de base é aquela que produz insumos pesados para outras indústrias.' },
          2: { misconception: 'Você confundiu usinas siderúrgicas de aço com engenhos coloniais de açúcar.', guidanceTip: 'Volta Redonda tornou-se a "Cidade do Aço", símbolo do operariado brasileiro.', conceptReview: 'A CSN transformou a economia fluminense e nacional nos anos 1940.' },
          3: { misconception: 'Você misturou mineração imperial com siderurgia industrial moderna.', guidanceTip: 'A siderurgia transforma minério de ferro e carvão em ligas de aço estrutural.', conceptReview: 'A CSN foi uma estatal estratégica construída com apoio técnico internacional.' }
        },
        habilidadeBNCC: 'EF09HI05'
      },
      {
        id: 'q-9-2-6',
        pergunta: 'No âmbito cultural, o governo Vargas valorizou o samba e a música popular, desde que as letras exaltassem:',
        opcoes: [
          'O valor do trabalho árduo, o patriotismo e a disciplina cívica, em oposição à figura do "malandro boêmio".',
          'A revolta armada da população contra o governo federal.',
          'A destruição de todas as bandeiras brasileiras.',
          'A obrigatoriedade de falar inglês em todas as escolas de samba.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Compositores como Wilson Batista e Noel Rosa foram incentivados (ou forçados pelo DIP) a trocar a exaltação da malandragem por sambas que celebravam a carteira de trabalho e o progresso do Brasil.',
        diagnosticoErros: {
          1: { misconception: 'Você imaginou que o governo autoritário tolerava canções de rebelião.', guidanceTip: 'Qualquer letra de contestação ou greve era sumariamente proibida pela censura do DIP.', conceptReview: 'O regime incentivava o "samba-exaltação" (como Aquarela do Brasil de Ary Barroso).' },
          2: { misconception: 'Você supôs uma aversão aos símbolos nacionais.', guidanceTip: 'Vargas realizava megacomícios no estádio de São Januário com milhares de estudantes cantando o Hino à Bandeira.', conceptReview: 'O nacionalismo cívico foi a principal ideologia de massas do varguismo.' },
          3: { misconception: 'Você imaginou a imposição de uma língua estrangeira.', guidanceTip: 'O Estado Novo chegou a proibir o ensino e o uso público de alemão e italiano durante a Segunda Guerra.', conceptReview: 'O nacionalismo linguístico e musical era rigorosamente fiscalizado.' }
        },
        habilidadeBNCC: 'EF09HI05'
      },
      {
        id: 'q-9-2-7',
        pergunta: 'O Palácio Gustavo Capanema, construído no Centro do Rio de Janeiro na gestão do ministro da Educação de Vargas, é internacionalmente consagrado porque:',
        opcoes: [
          'É um dos primeiros e mais perfeitos marcos mundiais da arquitetura modernista em grande escala, projetado por Lúcio Costa, Oscar Niemeyer e consultoria de Le Corbusier.',
          'Foi construído inteiramente de madeira de pau-brasil sem usar pregos ou cimento.',
          'É uma réplica exata das pirâmides de Gizé no Egito Antigo.',
          'Foi projetado por soldados espartanos da Grécia Antiga.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Com seus pilotis, fachadas de vidro (curtain wall), brise-soleil móveis, painéis de azulejos de Candido Portinari e jardins suspensos de Burle Marx, é uma obra-prima da arquitetura mundial.',
        diagnosticoErros: {
          1: { misconception: 'Você pensou em construções rústicas coloniais.', guidanceTip: 'O Palácio Capanema foi construído em concreto armado, aço e vidro com tecnologia de vanguarda.', conceptReview: 'O edifício é um marco do modernismo internacional tombado pelo IPHAN.' },
          2: { misconception: 'Você confundiu arquitetura modernista funcional com pirâmides egípcias.', guidanceTip: 'O prédio é famoso pela leveza de suas colunas e janelas horizontais.', conceptReview: 'Representou a aliança entre o Estado varguista e os intelectuais modernistas brasileiros.' },
          3: { misconception: 'Você cometeu um anacronismo clássico.', guidanceTip: 'O palácio foi inaugurado em 1945 como sede do Ministério da Educação e Saúde no Rio de Janeiro.', conceptReview: 'Niemeyer e Lúcio Costa despontaram ali como expoentes globais da arquitetura.' }
        },
        habilidadeBNCC: 'EF09HI05'
      },
      {
        id: 'q-9-2-8',
        pergunta: 'O edifício "A Noite", na Praça Mauá no Centro do Rio de Janeiro, primeiro arranha-céu da América Latina em concreto armado, foi a sede histórica de qual veículo de massa fundamental na Era Vargas?',
        opcoes: [
          'Da Rádio Nacional do Rio de Janeiro, que transmitia programas de auditório, cantores e radionovelas para todos os cantos do país.',
          'Da fábrica de automóveis elétricos de D. Pedro I.',
          'Do tribunal militar da Inquisição medieval espanhola.',
          'De um aeroporto secreto para discos voadores.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'A Rádio Nacional unificava o país: o Brasil inteiro parava para ouvir o Repórter Esso, cantoras célebres como Carmen Miranda, Emilinha Borba e Marlene, e as radionovelas.',
        diagnosticoErros: {
          1: { misconception: 'Você misturou o Primeiro Reinado imperial do século XIX com a era do rádio.', guidanceTip: 'O Edifício A Noite foi erguido nos anos 1920 e a Rádio Nacional brilhou a partir dos anos 1930.', conceptReview: 'O rádio foi o primeiro grande meio de comunicação de massas nacional.' },
          2: { misconception: 'Você confundiu o século XX no porto carioca com a Idade Média religiosa.', guidanceTip: 'O Edifício A Noite era símbolo do cosmopolitismo e da modernidade arquitetônica carioca.', conceptReview: 'A Rádio Nacional operava no topo do edifício na Praça Mauá.' },
          3: { misconception: 'Você escolheu uma opção fantasiosa de ficção científica.', guidanceTip: 'As antenas da Rádio Nacional emitiam ondas curtas e médias que alcançavam a Amazônia e o Sul.', conceptReview: 'A voz do Rio de Janeiro moldou os hábitos e o sotaque cultural do país inteiro.' }
        },
        habilidadeBNCC: 'EF09HI05'
      },
      {
        id: 'q-9-2-9',
        pergunta: 'O fim trágico do segundo governo de Getúlio Vargas ocorreu em 24 de agosto de 1954, no Palácio do Catete no Rio de Janeiro, quando o presidente:',
        opcoes: [
          'Cometeu suicídio com um tiro no coração, deixando uma célebre carta-testamento que adiou o golpe militar que a oposição preparava.',
          'Fugiu para Londres com toda a esquadra de navios da Armada.',
          'Foi coroado rei do Brasil e governou por mais cinquenta anos.',
          'Declarou guerra aos Estados Unidos e bombardeou a praia de Copacabana.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Sob intensa pressão da UDN e de militares após o atentado da Rua Tonelero contra Carlos Lacerda, Vargas disparou contra o próprio peito. Sua frase final: "Saio da vida para entrar na História".',
        diagnosticoErros: {
          1: { misconception: 'Você supôs uma fuga covarde.', guidanceTip: 'Vargas recusou a renúncia exigida pelo "Manifesto dos Coronéis" e cometeu suicídio no seu quarto no Catete.', conceptReview: 'O suicídio provocou gigantesca comoção popular nas ruas do Rio de Janeiro.' },
          2: { misconception: 'Você ignorou o fato histórico do falecimento do presidente em 1954.', guidanceTip: 'O quarto onde Vargas morreu e seu pijama com a marca da bala estão preservados no Museu da República.', conceptReview: 'O Museu da República no Catete é um dos pontos históricos mais visitados do Rio.' },
          3: { misconception: 'Você inventou um bombardeio fictício.', guidanceTip: 'A crise foi eminentemente política, entre o projeto nacionalista varguista e o projeto conservador lacerdista.', conceptReview: 'A morte de Vargas desencadeou revoltas populares e perseguição aos jornais de oposição.' }
        },
        habilidadeBNCC: 'EF09HI05'
      },
      {
        id: 'q-9-2-10',
        pergunta: 'Por que o estádio de São Januário, do Club de Regatas Vasco da Gama no Rio de Janeiro, tem lugar de honra na história social e política da Era Vargas?',
        opcoes: [
          'Porque era o maior estádio do Brasil na época, onde Vargas realizava os megacomícios do Dia do Trabalhador (1º de Maio) e onde anunciou a CLT em 1943.',
          'Porque foi onde os nobres portugueses desembarcaram com suas caravelas em 1500.',
          'Porque era uma pista de pouso de aviões a jato durante a Primeira Guerra Mundial.',
          'Porque foi construído pelos imperadores romanos para lutas de gladiadores.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'O estádio abrigava dezenas de milhares de trabalhadores fabris para discursos patrióticos, apresentações de corais com milhares de crianças regidas por Villa-Lobos e promulgações de leis sociais.',
        diagnosticoErros: {
          1: { misconception: 'Você cometeu um anacronismo de mais de quatro séculos com o descobrimento colonial.', guidanceTip: 'São Januário foi inaugurado em 1927 pelo Vasco da Gama na Zona Norte do Rio.', conceptReview: 'O estádio era o palco das grandes celebrações cívicas e trabalhistas de massas.' },
          2: { misconception: 'Você confundiu estádios de futebol com aeroportos bélicos.', guidanceTip: 'As arquibancadas de São Januário lotavam com bandeiras sindicais e cartazes de Vargas.', conceptReview: 'A CLT foi formalmente assinada em cerimônia oficial no gramado de São Januário.' },
          3: { misconception: 'Você misturou a Antiguidade clássica com o patrimônio esportivo carioca.', guidanceTip: 'O Vasco da Gama é famoso pela luta contra o racismo no futebol (Resposta Histórica de 1924).', conceptReview: 'São Januário é um patrimônio cultural e esportivo fundamental do Rio de Janeiro.' }
        },
        habilidadeBNCC: 'EF09HI05'
      }
    ]
  },

  // ==========================================
  // 9º ANO - TÓPICO 3: DITADURA MILITAR & RESISTÊNCIA (10 QUESTÕES)
  // ==========================================
  {
    id: '9-ditadura-resistencia',
    grade: '9',
    gradeLabel: '9º Ano',
    period: 'Brasil República',
    title: 'A Ditadura Militar no Brasil e a Resistência Carioca (1964–1985)',
    subtitle: 'O golpe de 64, AI-5, a Passeata dos Cem Mil na Cinelândia, Anistia e Diretas Já',
    tempoLeituraMin: 5,
    tags: ['Ditadura Militar', 'AI-5', 'Passeata dos Cem Mil', 'Anistia', 'Diretas Já', 'Constituição de 1988'],
    summary: {
      introducao: [
        'Em 31 de março de 1964, um golpe de Estado civil-militar depôs o presidente João Goulart (Jango), iniciando 21 anos de regime ditatorial no Brasil.',
        'O regime foi marcado pela suspensão das eleições diretas para presidente, cassações de mandatos políticos, censura severa às artes e à imprensa, perseguição a opositores, prisões arbitrárias, tortura e desaparecimentos forçados cometidos por órgãos de repressão como o DOI-CODI.',
        'O ano de 1968 foi divisor de águas: após o assassinato do estudante secundarista Edson Luís pela polícia militar no restaurante Calabouço, no Rio de Janeiro, cerca de 100 mil pessoas marcharam pelas avenidas do Centro na histórica Passeata dos Cem Mil. No fim daquele ano, a linha dura militar decretou o Ato Institucional nº 5 (AI-5), fechando o Congresso e retirando garantias fundamentais como o habeas corpus.',
        'A luta pela redemocratização ganhou força na década de 1970 com os movimentos sindicais, a Lei da Anistia (1979) e o comício histórico de um milhão de pessoas na Candelária durante a campanha das Diretas Já (1984), culminando na eleição civil de 1985 e na promulgação da Constituição Cidadã de 1988.'
      ],
      pontosChave: [
        'Golpe de 1964: Ruptura da ordem democrática no contexto da Guerra Fria.',
        'AI-5 (1968): O instrumento mais autoritário do regime, instaurando censura e fechamento político amplo.',
        'Passeata dos Cem Mil: Gigantesca manifestação popular e estudantil que tomou as ruas da Cinelândia e da Av. Rio Branco no Rio.',
        'Diretas Já (1984): Mobilização popular histórica no Rio de Janeiro exigindo o voto direto para a Presidência da República.'
      ],
      conexaoRio: 'A Cinelândia e a Igreja da Candelária foram os palcos mais emblemáticos da resistência democrática brasileira. O Memorial da Resistência e os arquivos do Dops revelam a coragem do povo carioca em defesa da liberdade.',
      linhaTempo: [
        { ano: '1964', evento: 'Tropas militares marcham de Minas Gerais para o Rio de Janeiro e derrubam João Goulart.' },
        { ano: '1968', evento: 'Morte de Edson Luís, Passeata dos Cem Mil e decretação do AI-5.' },
        { ano: '1979', evento: 'Promulgação da Lei da Anistia, permitindo o retorno de exilados políticos.' },
        { ano: '1984', evento: 'Comício das Diretas Já na Candelária reúne mais de um milhão de cidadãos.' },
        { ano: '1988', evento: 'Promulgação da Constituição Cidadã, garantindo direitos sociais e humanos fundamentais.' }
      ],
      paraFicarLigado: 'A Constituição de 1988 é chamada de "Cidadã" pelo deputado Ulysses Guimarães porque colocou os direitos humanos, o combate ao racismo e à tortura e a proteção social no centro do ordenamento jurídico brasileiro.'
    },
    flashcards: [
      { id: 'fc-9-dt1', termo: 'AI-5 (Ato Institucional nº 5)', significado: 'Decreto de dezembro de 1968 que fechou o Congresso, cassou o habeas corpus e oficializou a censura prévia no Brasil.' },
      { id: 'fc-9-dt2', termo: 'Passeata dos Cem Mil (1968)', significado: 'Histórica marcha popular e estudantil no Centro do Rio de Janeiro exigindo o fim da repressão militar.' },
      { id: 'fc-9-dt3', termo: 'Constituição Cidadã de 1988', significado: 'Atual Carta Magna brasileira, restabeleceu o Estado Democrático de Direito e ampliou os direitos civis e sociais.' }
    ],
    questions: [
      {
        id: 'q-9-4',
        pergunta: 'O Ato Institucional nº 5 (AI-5), baixado pelo governo militar em dezembro de 1968, é considerado o momento mais severo da ditadura porque:',
        opcoes: [
          'Fechou o Congresso Nacional, suspendeu o habeas corpus para crimes políticos, instituiu a censura prévia aos meios de comunicação e intensificou a perseguição e tortura de opositores.',
          'Concedeu o direito de voto imediato a todas as crianças do ensino fundamental do Rio de Janeiro.',
          'Determinou a realização de eleições presidenciais diretas a cada seis meses com apuração aberta na Cinelândia.',
          'Extinguiu as Forças Armadas brasileiras e transformou todos os quartéis em teatros populares.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'O AI-5 deu poderes quase ilimitados ao presidente da República para fechar o Legislativo, cassar mandatos, prender cidadãos sem direito a defesa judicial prévia e censurar músicas, peças e jornais.',
        diagnosticoErros: {
          1: { misconception: 'Você presumiu que o AI-5 concedeu direitos democráticos.', guidanceTip: 'O AI-5 foi justamente o fim de qualquer resquício de liberdade política no país.', conceptReview: 'O AI-5 fechou canais democráticos e perseguiu estudantes e professores universitários.' },
          2: { misconception: 'Você inverteu a natureza autoritária do regime.', guidanceTip: 'Os presidentes durante a ditadura eram generais escolhidos indiretamente em colégios eleitorais militares.', conceptReview: 'O voto direto para presidente só retornou ao Brasil após intensa luta popular em 1989.' },
          3: { misconception: 'Você supôs que o regime abriu mão de seu aparato bélico.', guidanceTip: 'Os militares governaram através do controle de órgãos de segurança do Estado.', conceptReview: 'O aparato de segurança foi ampliado para reprimir as dissidências.' }
        },
        habilidadeBNCC: 'EF09HI19'
      },
      {
        id: 'q-9-3-2',
        pergunta: 'O assassinato do estudante secundarista Edson Luís de Lima Souto pela polícia militar, em março de 1968, ocorreu em qual local emblemático do Centro do Rio de Janeiro?',
        opcoes: [
          'No restaurante estudantil do Calabouço, provocando comoção nacional e cortejo fúnebre acompanhado por 50 mil pessoas até a Cinelândia.',
          'Nas praias desertas da Barra da Tijuca.',
          'Dentro da biblioteca da Universidade de Paris na França.',
          'Em um estádio de futebol durante a Copa do Mundo do México.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Edson Luís, jovem de 18 anos vindo do Pará, protestava pela melhoria da comida no Calabouço quando foi baleado no peito pela PM, tornando-se o grande mártir da resistência estudantil.',
        diagnosticoErros: {
          1: { misconception: 'Você confundiu o Centro Histórico com a Zona Oeste do Rio.', guidanceTip: 'O Calabouço ficava próximo ao Aeroporto Santos Dumont no Centro do Rio.', conceptReview: 'Os estudantes levaram o corpo para a Assembleia Legislativa no Palácio Tiradentes.' },
          2: { misconception: 'Você deslocou o crime político brasileiro para a Europa.', guidanceTip: 'O episódio ocorreu no coração da capital fluminense e mobilizou a sociedade carioca.', conceptReview: 'A morte de Edson Luís detonou a onda de protestos que culminou na Passeata dos Cem Mil.' },
          3: { misconception: 'Você confundiu os protestos de rua cariocas com a Copa de 1970.', guidanceTip: 'O assassinato ocorreu em março de 1968 nas ruas do Centro do Rio.', conceptReview: 'A frase célebre do protesto foi: "Mataram um estudante, e se fosse seu filho?".' }
        },
        habilidadeBNCC: 'EF09HI19'
      },
      {
        id: 'q-9-3-3',
        pergunta: 'A histórica "Passeata dos Cem Mil", realizada em 26 de junho de 1968 na Cinelândia e Avenida Rio Branco, reuniu:',
        opcoes: [
          'Estudantes, professores, artistas (como Chico Buarque, Caetano Veloso, Nara Leão), padres, intelectuais e cidadãos cariocas exigindo liberdade e o fim da repressão militar.',
          'Soldados estrangeiros que queriam invadir o Brasil e anexar as praias do Rio.',
          'Banqueiros norte-americanos exigindo a privatização da Baía de Guanabara.',
          'Navegadores portugueses vestidos com armaduras do século XVI.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Foi a mais expressiva manifestação popular civil de oposição ao regime militar até então, demonstrando a união pacífica da sociedade carioca contra a violência do Estado autoritário.',
        diagnosticoErros: {
          1: { misconception: 'Você atribuiu o protesto a exércitos estrangeiros.', guidanceTip: 'A manifestação foi pacífica, civil e brasileira, liderada pela União Nacional dos Estudantes (UNE).', conceptReview: 'A população aplaudiu e jogou chuva de papel picado das janelas dos prédios da Rio Branco.' },
          2: { misconception: 'Você imaginou uma pauta de negócios financeiros.', guidanceTip: 'A pauta era a defesa da democracia, das universidades e da liberdade de expressão artística.', conceptReview: 'A classe artística carioca marchou de braços dados com estudantes e mães de família.' },
          3: { misconception: 'Você cometeu um anacronismo colonial fantasioso.', guidanceTip: 'Os manifestantes usavam faixas como "Abaixo a Ditadura" e "Povo Organizado Derruba a Tirania".', conceptReview: 'A Passeata dos Cem Mil é um marco indelével da memória política carioca.' }
        },
        habilidadeBNCC: 'EF09HI19'
      },
      {
        id: 'q-9-3-4',
        pergunta: 'Artistas cariocas e brasileiros enfrentaram a censura da ditadura com metáforas e poesias. A música "Cálice", composta por Chico Buarque e Gilberto Gil, fazia um jogo de palavras entre:',
        opcoes: [
          'A palavra religiosa "Cálice" (da oração bíblica) e a ordem autoritária de silêncio "Cale-se!".',
          'O café com leite e os biscoitos das confeitarias do Rio.',
          'O nome de duas praias da Zona Sul carioca.',
          'O regulamento dos jogos de futebol de botão.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'O refrão "Pai, afasta de mim esse cálice / de vinho tinto de sangue" denunciava a censura e a tortura física nas prisões da ditadura sem poder ser censurada de imediato pelos censores literais.',
        diagnosticoErros: {
          1: { misconception: 'Você minimizou uma canção de protesto corajosa a um lanche da tarde.', guidanceTip: 'A palavra soava aos ouvidos como a ordem policial "Cale-se!", censurando a voz dos cidadãos.', conceptReview: 'Chico Buarque e Gil desafiavam a censura com brilhante sofisticação poética.' },
          2: { misconception: 'Você confundiu geografia praiana com a denúncia da censura militar.', guidanceTip: 'A música é uma das mais contundentes críticas poéticas à repressão do AI-5.', conceptReview: 'Músicos eram intimados a depor e muitos foram forçados ao exílio (como Caetano e Gil).' },
          3: { misconception: 'Você fez uma associação lúdica equivocada.', guidanceTip: 'A canção foi proibida de ser cantada publicamente no festival de 1973 pelos microfones cortados.', conceptReview: 'A censura vetava palavras, peças teatrais e notícias de jornal.' }
        },
        habilidadeBNCC: 'EF09HI19'
      },
      {
        id: 'q-9-3-5',
        pergunta: 'A Lei da Anistia, promulgada em agosto de 1979 após intensa campanha liderada pelo Movimento Feminino pela Anistia no Rio, permitiu:',
        opcoes: [
          'O retorno ao Brasil de centenas de exilados políticos (líderes, artistas, intelectuais), embora tenha também beneficiado agentes do Estado acusados de tortura.',
          'A proibição imediata de qualquer pessoa votar nas eleições presidenciais.',
          'A expulsão perpétua de todos os professores universitários do país.',
          'A demolição de todos os teatros e salas de cinema do Rio de Janeiro.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'A anistia foi uma vitória da mobilização social, trazendo de volta figuras como Leonel Brizola e Betinho, embora tenha sido aprovada com a cláusula da "reciprocidade" que blindou os torturadores.',
        diagnosticoErros: {
          1: { misconception: 'Você presumiu que a lei aumentava o fechamento político.', guidanceTip: 'A anistia marcou o início do processo de abertura política "lenta, gradual e segura".', conceptReview: 'A anistia libertou presos políticos e permitiu o reencontro de famílias separadas pelo exílio.' },
          2: { misconception: 'Você supôs uma perseguição aos educadores na abertura política.', guidanceTip: 'Professores cassados pelo regime (como Darcy Ribeiro) puderam voltar às universidades brasileiras.', conceptReview: 'A volta dos intelectuais oxigenou o debate pela redemocratização.' },
          3: { misconception: 'Você imaginou a destruição do patrimônio cultural.', guidanceTip: 'Os aeroportos (como o Galeão no Rio) foram palco de celebrações emocionantes ao som de O Bêbado e a Equilibrista.', conceptReview: 'A canção de Aldir Blanc e João Bosco tornou-se o hino da Anistia.' }
        },
        habilidadeBNCC: 'EF09HI19'
      },
      {
        id: 'q-9-3-6',
        pergunta: 'Em 10 de abril de 1984, a campanha pelas "Diretas Já" realizou um comício histórico na Igreja da Candelária e Avenida Presidente Vargas no Rio de Janeiro que reuniu:',
        opcoes: [
          'Mais de um milhão de cidadãos cariocas vestindo roupas amarelas e exigindo a aprovação da Emenda Dante de Oliveira para votar diretamente para presidente.',
          'Apenas três pessoas que foram vaiadas pela polícia militar.',
          'Soldados nazistas da Segunda Guerra Mundial que pediam a anexação da cidade.',
          'Uma convenção de mágicos e ilusionistas de Las Vegas.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Foi a maior concentração cívica da história do Rio de Janeiro, unindo políticos de todos os partidos, artistas e o povo na esperança do fim definitivo da ditadura.',
        diagnosticoErros: {
          1: { misconception: 'Você minimizou o maior ato público da história republicana carioca.', guidanceTip: 'A multidão cobriu toda a extensão da Presidente Vargas da Candelária até a Central do Brasil.', conceptReview: 'Mais de 1 milhão de pessoas exigiram o retorno do direito soberano ao voto.' },
          2: { misconception: 'Você cometeu um anacronismo com a Segunda Guerra Mundial.', guidanceTip: 'O ato era pacífico, democrático e formado por brasileiros de todas as classes sociais.', conceptReview: 'A campanha das Diretas Já foi a apoteose da mobilização cívica popular.' },
          3: { misconception: 'Você descaracterizou a gravidade política do momento.', guidanceTip: 'Oradores como Ulysses Guimarães, Tancredo Neves e Brizola discursaram no palanque.', conceptReview: 'Embora a emenda não tenha passado no Congresso por poucos votos, o regime militar ruiu.' }
        },
        habilidadeBNCC: 'EF09HI19'
      },
      {
        id: 'q-9-3-7',
        pergunta: 'Por que a Constituição Federal de 1988, promulgada sob a liderança do deputado Ulysses Guimarães, foi apelidada de "Constituição Cidadã"?',
        opcoes: [
          'Porque ampliou e consolidou os direitos fundamentais, combateu o racismo (tornando-o crime inafiançável e imprescritível), proibiu a tortura e garantiu direitos sociais, trabalhistas e indígenas.',
          'Porque obrigava todos os cidadãos a morarem no Palácio do Planalto em Brasília.',
          'Porque proibia a realização de qualquer manifestação popular nas ruas.',
          'Porque determinava que apenas os comandantes do exército poderiam escrever leis.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'A Carta de 1988 rompeu definitivamente com o entulho autoritário da ditadura, estabelecendo o Estado Democrático de Direito e o respeito à dignidade da pessoa humana.',
        diagnosticoErros: {
          1: { misconception: 'Você interpretou "cidadã" como uma ordem de habitação governamental.', guidanceTip: 'O termo expressa a consagração da cidadania plena e dos direitos de todos os brasileiros.', conceptReview: 'A Constituição de 1988 é o pilar da democracia brasileira atual.' },
          2: { misconception: 'Você inverteu a essência da Carta: ela garantiu o direito de reunião e protesto.', guidanceTip: 'A liberdade de manifestação e a livre expressão do pensamento foram plenamente reestabelecidas.', conceptReview: 'A censura foi expressamente proibida pela nova Carta Magna.' },
          3: { misconception: 'Você descreveu a ditadura militar em vez da nova ordem constitucional.', guidanceTip: 'A Assembleia Nacional Constituinte foi composta por parlamentares civis eleitos pelo povo.', conceptReview: 'A Constituição de 1988 devolveu a soberania ao voto popular.' }
        },
        habilidadeBNCC: 'EF09HI19'
      },
      {
        id: 'q-9-3-8',
        pergunta: 'O atentado do Riocentro, ocorrido na noite de 30 de abril de 1981 no Rio de Janeiro durante um show comemorativo do Dia do Trabalhador, foi executado por:',
        opcoes: [
          'Militares da chamada "linha dura" que tentavam forjar um atentado terrorista para culpar a esquerda e impedir a abertura democrática, mas a bomba explodiu no próprio carro dos oficiais.',
          'Líderes sindicais operários que queriam fechar as fábricas de automóveis.',
          'Estudantes da Universidade Federal do Rio de Janeiro que queriam cancelar o show de MPB.',
          'Navegadores piratas do Caribe que queriam roubar os instrumentos musicais.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'A bomba explodiu no colo do sargento Guilherme do Rosário e feriu gravemente o capitão Wilson Machado dentro de um Puma no estacionamento, desmascarando a fraude da extrema-direita militar.',
        diagnosticoErros: {
          1: { misconception: 'Você atribuiu o atentado às vítimas que estavam assistindo ao show pacífico.', guidanceTip: 'Mais de 20 mil pessoas assistiam ao show lá dentro; a bomba foi colocada por militares contrários à abertura.', conceptReview: 'O caso revelou que setores dos órgãos de segurança estavam praticando terrorismo de Estado.' },
          2: { misconception: 'Você culpou os estudantes da UFRJ.', guidanceTip: 'Os jovens e intelectuais eram o público do evento cultural comemorativo.', conceptReview: 'A farsa desmascarada acelerou o descrédito e o isolamento do regime militar.' },
          3: { misconception: 'Você usou uma metáfora cinematográfica infantil.', guidanceTip: 'O atentado do Riocentro foi um dos mais graves crimes da ditadura em solo carioca.', conceptReview: 'O caso foi reaberto e investigado pela Comissão Nacional da Verdade em 2014.' }
        },
        habilidadeBNCC: 'EF09HI19'
      },
      {
        id: 'q-9-3-9',
        pergunta: 'A Comissão Nacional da Verdade (CNV), que investigou as graves violações de direitos humanos cometidas pelo Estado brasileiro entre 1946 e 1988, teve qual propósito essencial para a cidadania?',
        opcoes: [
          'Esclarecer a verdade histórica sobre mortos e desaparecidos, identificar centros clandestinos de tortura e recomendar reformas para fortalecer as instituições democráticas.',
          'Prender todos os estudantes que participaram de passeatas no século XX.',
          'Reinstaurar o AI-5 e fechar as emissoras de rádio do Rio de Janeiro.',
          'Obrigar todos os brasileiros a esquecerem o que aconteceu no passado.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Conhecer a verdade sobre as violências do passado é um direito inalienável da sociedade para garantir o princípio do "Nunca Mais": nunca mais ditadura, nunca mais tortura.',
        diagnosticoErros: {
          1: { misconception: 'Você inverteu o papel da comissão, que protegia a memória das vítimas.', guidanceTip: 'A CNV homenageou estudantes e trabalhadores assassinados pela repressão.', conceptReview: 'O relatório final apontou centenas de agentes públicos responsáveis por abusos.' },
          2: { misconception: 'Você associou a comissão a um golpe autoritário.', guidanceTip: 'A CNV foi criada pela presidente Dilma Rousseff em 2011 no pleno vigor da democracia.', conceptReview: 'A comissão atuou para consolidar a transparência e os direitos humanos.' },
          3: { misconception: 'Você propôs o esquecimento e o silenciamento da memória.', guidanceTip: 'Sem memória não há justiça nem prevenção contra futuros regimes de força.', conceptReview: 'O currículo Rioeduca valoriza a memória histórica como vacina contra o autoritarismo.' }
        },
        habilidadeBNCC: 'EF09HI19'
      },
      {
        id: 'q-9-3-10',
        pergunta: 'Como o currículo de História do Rioeduca orienta o estudo do período da Ditadura Militar (1964–1985)?',
        opcoes: [
          'Com rigor documental, valorizando a defesa irrestrita dos Direitos Humanos, a memória das lutas democráticas populares no Rio e o repúdio absoluto à censura e à tortura.',
          'Como uma época em que não havia nenhum problema e todas as pessoas concordavam em silêncio.',
          'Proibindo qualquer menção à Constituição Cidadã de 1988.',
          'Afirmando que a democracia não tem nenhuma importância para a vida cotidiana do cidadão.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'A educação pública carioca tem o compromisso de formar cidadãos conscientes, críticos e defensores da liberdade, da dignidade humana e do Estado Democrático de Direito.',
        diagnosticoErros: {
          1: { misconception: 'Você romantizou um período de severa restrição de liberdades civis e violência estatal.', guidanceTip: 'Milhares de brasileiros foram presos, torturados ou forçados ao exílio.', conceptReview: 'A censura impedia que o povo soubesse da inflação e das mortes nas prisões.' },
          2: { misconception: 'Você supôs uma omissão da nossa Carta Magna atual.', guidanceTip: 'A Constituição de 1988 é o documento fundador da cidadania escolar no Brasil.', conceptReview: 'O estudo da Constituição garante que os alunos conheçam seus direitos e deveres.' },
          3: { misconception: 'Você desvalorizou a conquista da democracia.', guidanceTip: 'A democracia nos dá a liberdade de escolher representantes, protestar e ter direitos protegidos.', conceptReview: 'A democracia é uma construção permanente e diária de toda a sociedade.' }
        },
        habilidadeBNCC: 'EF09HI19'
      }
    ]
  }
];
