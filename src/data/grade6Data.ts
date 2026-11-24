import { Topic } from '../types/history';

export const GRADE_6_TOPICS: Topic[] = [
  // ==========================================
  // 6º ANO - TÓPICO 1: FONTES E TEMPO (10 QUESTÕES)
  // ==========================================
  {
    id: '6-fontes-tempo',
    grade: '6',
    gradeLabel: '6º Ano',
    period: 'Pré-História & Antiguidade',
    title: 'O Saber Histórico, Fontes e Noções de Tempo',
    subtitle: 'Como os historiadores investigam o passado e como medimos o tempo histórico',
    tempoLeituraMin: 4,
    tags: ['Fontes Históricas', 'Tempo Cronológico', 'Patrimônio', 'Arqueologia'],
    summary: {
      introducao: [
        'A História é a ciência que estuda a ação dos seres humanos no tempo e no espaço. O historiador não é alguém que decora datas, mas sim um pesquisador que formula perguntas ao passado.',
        'Para reconstruir os fatos, usamos fontes históricas: vestígios deixados pela humanidade, como documentos escritos, relatos orais transmitidos por gerações, objetos materiais (como cerâmicas e moedas) e produções visuais (como pinturas, mapas e fotografias).',
        'Diferenciamos o tempo cronológico (marcado pelos relógios e calendários) do tempo histórico (marcado pelas transformações sociais, culturais e econômicas).'
      ],
      pontosChave: [
        'Fontes Históricas: Materiais, escritas, orais, visuais e digitais.',
        'Tempo Cronológico vs. Tempo Histórico: A passagem dos anos físicos versus o ritmo das transformações sociais.',
        'Papel do Historiador: Interpretar criticamente os vestígios sem impor seus preconceitos atuais.',
        'Patrimônio Cultural: Bens materiais e imateriais que guardam a memória coletiva de um povo.'
      ],
      conexaoRio: 'No Rio de Janeiro, o Arquivo Nacional (Praça da República) e a Biblioteca Nacional guardam milhões de documentos históricos que contam a história da cidade e de todo o Brasil.',
      linhaTempo: [
        { ano: 'Século V a.C.', evento: 'Heródoto na Grécia Antiga é considerado o "Pai da História" por registrar acontecimentos humanos sem recorrer apenas a mitos.' },
        { ano: '1838', evento: 'Fundação do Instituto Histórico e Geográfico Brasileiro (IHGB) no Rio de Janeiro para organizar a memória nacional.' },
        { ano: 'Hoje', evento: 'Reconhecimento das fontes orais e do patrimônio imaterial (como o jongo e o samba carioca).' }
      ],
      paraFicarLigado: 'Cuidado: Nenhuma fonte histórica é 100% neutra! Todo documento foi produzido por alguém, com uma intenção e a partir de um determinado ponto de vista.'
    },
    flashcards: [
      { id: 'fc-6-1', termo: 'Fonte Histórica', significado: 'Qualquer vestígio deixado por seres humanos no passado que serve de evidência para o historiador.' },
      { id: 'fc-6-2', termo: 'Tempo Histórico', significado: 'Ritmo das mudanças e permanências na vida das sociedades humanas, que varia de cultura para cultura.' },
      { id: 'fc-6-3', termo: 'Patrimônio Imaterial', significado: 'Saberes, celebrações, formas de expressão e costumes transmitidos de geração em geração (ex: capoeira, cordel).' }
    ],
    questions: [
      {
        id: 'q-6-1',
        pergunta: 'Um arqueólogo encontra no centro histórico do Rio de Janeiro fragmentos de cachimbos de barro e contas de colares utilizados por escravizados no século XIX. Como essa descoberta é classificada na investigação histórica?',
        opcoes: [
          'Como uma fonte histórica material, que ajuda a compreender o cotidiano e a cultura da população afro-brasileira.',
          'Como uma fonte escrita oficial, produzida exclusivamente pelo governo imperial da época.',
          'Como um simples entulho sem valor histórico, pois apenas livros e decretos reais são fontes confiáveis.',
          'Como uma fonte cronológica natural, que mede a passagem matemática das horas.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Fragmentos de objetos como cerâmicas, colares e cachimbos são fontes históricas materiais fundamentais para resgatar o cotidiano e as formas de resistência de grupos historicamente marginalizados.',
        diagnosticoErros: {
          1: { misconception: 'Você confundiu objetos materiais com textos escritos oficiais.', guidanceTip: 'Fontes escritas contêm palavras e textos. Pense: cachimbos e colares são objetos físicos palpáveis.', conceptReview: 'Fontes materiais são vestígios físicos (ferramentas, vestimentas, utensílios).' },
          2: { misconception: 'Você acreditou na ideia antiga de que apenas leis e documentos da nobreza contam a História.', guidanceTip: 'A História hoje valoriza a vida de todas as pessoas, incluindo escravizados, trabalhadores e mulheres.', conceptReview: 'Toda manifestação humana é valiosa para o historiador.' },
          3: { misconception: 'Você misturou instrumentos de medição do tempo com vestígios deixados pelos seres humanos.', guidanceTip: 'O tempo cronológico é a medida pura dos anos e minutos; cachimbos e colares contam histórias de vida.', conceptReview: 'Objetos humanos são fontes históricas culturais e materiais.' }
        },
        habilidadeBNCC: 'EF06HI01'
      },
      {
        id: 'q-6-2',
        pergunta: 'Qual a principal diferença entre tempo cronológico e tempo histórico?',
        opcoes: [
          'O tempo cronológico é linear e medido por relógios e calendários; o tempo histórico é marcado pelo ritmo das transformações sociais.',
          'O tempo histórico é aquele que mede os segundos e minutos, enquanto o cronológico se refere apenas a lendas antigas.',
          'Não há diferença alguma, pois todas as sociedades humanas evoluem exatamente na mesma velocidade cronológica.',
          'O tempo cronológico só existe no Brasil e o tempo histórico só existe na Europa Antiga.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'O tempo cronológico organiza os fatos em sequência matemática constante, enquanto o tempo histórico observa continuidades e rupturas na sociedade.',
        diagnosticoErros: {
          1: { misconception: 'Você inverteu a definição dos conceitos!', guidanceTip: 'Lembre-se da raiz da palavra: "Cronos" (cronômetro, relógio) mede os minutos.', conceptReview: 'Cronologia = contagem uniforme de horas/anos. Tempo histórico = mudanças sociais.' },
          2: { misconception: 'Você supôs que a passagem do tempo social é idêntica para todas as civilizações.', guidanceTip: 'Observe que certas tradições duram milênios em um lugar, enquanto em outros tudo muda rapidamente.', conceptReview: 'Diferentes sociedades têm diferentes ritmos de transformação.' },
          3: { misconception: 'Você limitou conceitos universais a regiões geográficas específicas.', guidanceTip: 'Ambos os conceitos são ferramentas teóricas usadas em todo o mundo.', conceptReview: 'Tanto o tempo cronológico quanto o histórico são categorias de análise globais.' }
        },
        habilidadeBNCC: 'EF06HI02'
      },
      {
        id: 'q-6-1-3',
        pergunta: 'Relatos orais de griôs africanos e depoimentos de moradores antigos de uma comunidade quilombola são exemplos de:',
        opcoes: [
          'Fontes históricas orais, fundamentais para sociedades de tradição oral e memórias não registradas em papel.',
          'Documentos fósseis petrificados pela ação de vulcões pré-históricos.',
          'Falsificações que não possuem qualquer utilidade para os historiadores.',
          'Fontes astronômicas para calcular o eclipse solar.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'As fontes orais transmitem memórias, saberes ancestrais e canções essenciais para a história de povos que preservam sua cultura oralmente.',
        diagnosticoErros: {
          1: { misconception: 'Você confundiu falas humanas com fósseis minerais.', guidanceTip: 'Depoimentos orais vêm da voz e da memória de seres humanos vivos.', conceptReview: 'Fósseis são restos biológicos mineralizados; relatos orais são fontes históricas imateriais.' },
          2: { misconception: 'Você desvalorizou a riqueza da história oral.', guidanceTip: 'Muitas culturas africanas e indígenas transmitem sua sabedoria pela palavra falada.', conceptReview: 'A História Oral é hoje uma das metodologias mais respeitadas na ciência histórica.' },
          3: { misconception: 'Você confundiu história humana com astronomia física.', guidanceTip: 'Griôs e quilombolas contam sobre costumes humanos e resistências históricas.', conceptReview: 'Fontes orais revelam o passado sociocultural das populações.' }
        },
        habilidadeBNCC: 'EF06HI01'
      },
      {
        id: 'q-6-1-4',
        pergunta: 'Por que o historiador deve analisar uma fonte histórica com olhar crítico e investigativo?',
        opcoes: [
          'Porque todo documento expressa o ponto de vista, interesses e intenções de quem o produziu.',
          'Porque todas as fontes escritas são mentiras inventadas para enganar os leitores.',
          'Porque os historiadores não precisam de evidências e podem inventar o passado à vontade.',
          'Porque as fontes antigas perdem a validade após 50 anos de existência.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Nenhum documento é neutro. O historiador analisa quem escreveu, para quem escreveu e com qual objetivo.',
        diagnosticoErros: {
          1: { misconception: 'Você generalizou todas as fontes como falsas.', guidanceTip: 'Ter um ponto de vista não significa ser mentira; significa que retrata uma perspectiva.', conceptReview: 'Crítica documental busca entender o contexto da fonte, não descartá-la.' },
          2: { misconception: 'Você confundiu história com ficção literária.', guidanceTip: 'A História é uma ciência baseada em métodos rigorosos e evidências.', conceptReview: 'O historiador formula hipóteses fundamentadas em vestígios reais.' },
          3: { misconception: 'Você inventou um prazo de validade para a memória histórica.', guidanceTip: 'Documentos com milhares de anos (como tábuas sumérias) continuam valiosos.', conceptReview: 'A distância temporal muitas vezes enriquece a análise histórica.' }
        },
        habilidadeBNCC: 'EF06HI02'
      },
      {
        id: 'q-6-1-5',
        pergunta: 'O samba de roda e o jongo, reconhecidos como Patrimônio Cultural Imaterial pelo IPHAN, diferenciam-se de monumentos como os Arcos da Lapa porque:',
        opcoes: [
          'São práticas culturais vivas, transmitidas pela tradição oral e corporal, enquanto os Arcos são patrimônio material.',
          'Não têm qualquer valor histórico para a cidade do Rio de Janeiro.',
          'Foram criados exclusivamente por computadores no século XXI.',
          'São construções de pedra e cal feitas por engenheiros europeus.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Patrimônio imaterial diz respeito a saberes, celebrações e expressões vivas; patrimônio material engloba edifícios, praças e objetos.',
        diagnosticoErros: {
          1: { misconception: 'Você desconsiderou manifestações artísticas como parte do patrimônio.', guidanceTip: 'O patrimônio imaterial é reconhecido pela UNESCO e pelo IPHAN pela sua riqueza identitária.', conceptReview: 'Danças, culinária e festas são pilares da memória coletiva.' },
          2: { misconception: 'Você cometeu um anacronismo tecnológico.', guidanceTip: 'O jongo e o samba têm raízes seculares na diáspora africana.', conceptReview: 'São saberes ancestrais herdados de povos escravizados.' },
          3: { misconception: 'Você inverteu o conceito de material e imaterial.', guidanceTip: 'Arcos da Lapa são feitos de pedra; jongo é ritmo, dança e canto.', conceptReview: 'Práticas corporais e musicais são imateriais.' }
        },
        habilidadeBNCC: 'EF06HI03'
      },
      {
        id: 'q-6-1-6',
        pergunta: 'Ao dividir a história em períodos (Idade Antiga, Média, Moderna e Contemporânea), a historiografia tradicional adotou uma perspectiva:',
        opcoes: [
          'Eurocêntrica, pois utilizou marcos da história europeia para balizar a linha do tempo mundial.',
          'Indígena, baseada unicamente nos calendários maias e tupis.',
          'Universal e perfeita, aplicável com exatidão a todos os povos asiáticos e africanos da mesma forma.',
          'Puramente biológica, calculada pelo batimento cardíaco dos mamíferos.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'A periodização tradicional tomou a Europa como centro (queda de Roma, queda de Constantinopla, Revolução Francesa), o que exige hoje uma visão crítica que valorize histórias indígenas e africanas.',
        diagnosticoErros: {
          1: { misconception: 'Você atribuiu aos povos originários das Américas a divisão dos períodos clássicos.', guidanceTip: 'Quem dividiu a história em Idade Média e Moderna foram filósofos e historiadores europeus.', conceptReview: 'A divisão quadripartite tradicional é de matriz europeia.' },
          2: { misconception: 'Você aceitou a periodização tradicional como uma verdade matemática neutra.', guidanceTip: 'Pense: a Idade Média europeia teve o mesmo significado para o Império do Mali ou para os povos Tupis?', conceptReview: 'O currículo Rioeduca estimula questionar o eurocentrismo.' },
          3: { misconception: 'Você confundiu ciências humanas com biologia médica.', guidanceTip: 'Divisões de épocas são convenções humanas e políticas.', conceptReview: 'Periodização é uma construção teórica dos historiadores.' }
        },
        habilidadeBNCC: 'EF06HI01'
      },
      {
        id: 'q-6-1-7',
        pergunta: 'Fotografias antigas tiradas no século XIX por Marc Ferrez mostrando a Praia de Botafogo e as ruas do Rio de Janeiro são classificadas como:',
        opcoes: [
          'Fontes históricas visuais ou iconográficas.',
          'Fontes puramente sonoras de transmissão via rádio.',
          'Fósseis vegetais da Mata Atlântica.',
          'Leis jurídicas aprovadas pelo Senado Romano.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Pinturas, fotografias, gravuras e mapas são fontes históricas visuais indispensáveis para estudar a evolução urbana e social.',
        diagnosticoErros: {
          1: { misconception: 'Você confundiu imagens visuais com ondas sonoras.', guidanceTip: 'Marc Ferrez era fotógrafo; a fotografia é uma fonte que se vê com os olhos.', conceptReview: 'Fotografias são fontes visuais/iconográficas.' },
          2: { misconception: 'Você confundiu registros fotográficos com plantas fossilizadas.', guidanceTip: 'Fotografias são produtos da técnica e cultura humana.', conceptReview: 'A fotografia é uma tecnologia de registro visual do século XIX em diante.' },
          3: { misconception: 'Você confundiu imagens cariocas com leis do império romano.', guidanceTip: 'As fotos de Marc Ferrez mostram o Rio de Janeiro imperial e republicano.', conceptReview: 'São registros do cotidiano e da paisagem urbana brasileira.' }
        },
        habilidadeBNCC: 'EF06HI02'
      },
      {
        id: 'q-6-1-8',
        pergunta: 'Qual o papel fundamental do Arquivo Nacional e da Biblioteca Nacional, localizados no Rio de Janeiro?',
        opcoes: [
          'Preservar a memória documental do país e disponibilizar fontes primárias para a pesquisa histórica.',
          'Servir apenas de depósito de lixo para papéis velhos que ninguém quer ler.',
          'Impedir que qualquer estudante ou pesquisador tenha acesso aos livros.',
          'Vender documentos históricos para turistas estrangeiros.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Arquivos e bibliotecas públicas garantem o direito à memória, à cidadania e ao conhecimento preservando documentos para a sociedade.',
        diagnosticoErros: {
          1: { misconception: 'Você desvalorizou a preservação de arquivos históricos.', guidanceTip: 'Sem arquivos, não teríamos como comprovar direitos, leis ou acontecimentos do passado.', conceptReview: 'Arquivos são guardiões da cidadania e da identidade nacional.' },
          2: { misconception: 'Você pensou que essas instituições proíbem a pesquisa pública.', guidanceTip: 'Tanto a Biblioteca Nacional quanto o Arquivo Nacional têm consultas abertas ao público e online.', conceptReview: 'A função dessas instituições é a democratização do acesso às fontes.' },
          3: { misconception: 'Você confundiu patrimônio público inalienável com comércio.', guidanceTip: 'Documentos históricos nacionais são protegidos por lei contra venda ou extravio.', conceptReview: 'O patrimônio documental pertence a toda a sociedade brasileira.' }
        },
        habilidadeBNCC: 'EF06HI03'
      },
      {
        id: 'q-6-1-9',
        pergunta: 'Quando dizemos que "o hábito de tomar banho diariamente no Brasil é uma herança dos povos indígenas", estamos analisando um exemplo de:',
        opcoes: [
          'Permanência cultural ao longo do tempo histórico.',
          'Ruptura violenta que acabou no século XVIII.',
          'Regra imposta exclusivamente pelos nobres franceses na corte de Versalhes.',
          'Erro do calendário solar babilônico.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Permanências históricas são hábitos, costumes ou crenças que resistem e continuam presentes no cotidiano de um povo através dos séculos.',
        diagnosticoErros: {
          1: { misconception: 'Você confundiu permanência com ruptura.', guidanceTip: 'Se nós tomamos banho todos os dias hoje, esse hábito continuou (permaneceu).', conceptReview: 'Permanência = aquilo que continua; Ruptura = aquilo que muda bruscamente.' },
          2: { misconception: 'Você cometeu um equívoco sobre os hábitos de higiene europeus da época moderna.', guidanceTip: 'Os europeus da corte moderna tomavam banho raramente; foram os indígenas brasileiros que ensinaram o banho diário.', conceptReview: 'A higiene dos povos originários brasileiros impressionou os cronistas portugueses.' },
          3: { misconception: 'Você misturou costumes culturais com calendários matemáticos.', guidanceTip: 'Hábitos do cotidiano dizem respeito à cultura e à vida em sociedade.', conceptReview: 'A antropologia e a história estudam as permanências culturais dos povos.' }
        },
        habilidadeBNCC: 'EF06HI02'
      },
      {
        id: 'q-6-1-10',
        pergunta: 'A frase "o historiador não é um juiz que condena o passado, mas sim alguém que busca compreendê-lo em seu contexto" significa que:',
        opcoes: [
          'Devemos evitar o anacronismo, analisando os valores e limites da época em que as pessoas viveram.',
          'O historiador deve concordar com todos os crimes do passado sem nenhuma reflexão crítica.',
          'É impossível aprender qualquer coisa com o passado histórico.',
          'O passado só pode ser julgado pelos tribunais de justiça militar.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Evitar o anacronismo (julgar o passado usando apenas os olhos e tecnologias do presente) é o primeiro mandamento do historiador.',
        diagnosticoErros: {
          1: { misconception: 'Você confundiu compreender o contexto com justificar violências.', guidanceTip: 'Compreender os motivos históricos nos ajuda a não repetir os mesmos erros hoje.', conceptReview: 'Contextualizar é entender as circunstâncias sociais de uma época.' },
          2: { misconception: 'Você adotou uma postura pessimista e niilista sobre o estudo histórico.', guidanceTip: 'A História nos ensina a valorizar as conquistas democráticas e a cidadania.', conceptReview: 'Estudar história nos torna cidadãos mais conscientes e críticos.' },
          3: { misconception: 'Você misturou tribunais penais com o ofício acadêmico do historiador.', guidanceTip: 'O historiador produz conhecimento científico para a sociedade.', conceptReview: 'A História busca explicar as motivações e consequências dos atos humanos.' }
        },
        habilidadeBNCC: 'EF06HI02'
      }
    ]
  },

  // ==========================================
  // 6º ANO - TÓPICO 2: SAMBAQUIS & POVOAMENTO (10 QUESTÕES)
  // ==========================================
  {
    id: '6-sambaquis-primeiros-povos',
    grade: '6',
    gradeLabel: '6º Ano',
    period: 'Pré-História & Antiguidade',
    title: 'Povoamento da América e os Sambaquis Fluminenses',
    subtitle: 'Os primeiros habitantes do território brasileiro e a arqueologia litorânea do Rio',
    tempoLeituraMin: 5,
    tags: ['Sambaquis', 'Luzia', 'Pré-História Brasileira', 'Arqueologia Fluminense'],
    summary: {
      introducao: [
        'Milhares de anos antes da chegada dos colonizadores europeus em 1500, o continente americano e o atual território brasileiro já eram habitados por ricas e diversas sociedades humanas.',
        'Entre as teorias de povoamento mais estudadas estão a travessia pelo Estreito de Bering (durante a última Era Glacial) e possíveis migrações costeiras pelo Oceano Pacífico e Atlântico.',
        'No Brasil, o fóssil humano de Luzia (datado de cerca de 11.500 anos), descoberto em Lagoa Santa (MG) e tombado no Museu Nacional do Rio de Janeiro, revolucionou as teorias sobre a antiguidade e feições dos primeiros americanos.',
        'No litoral fluminense (região de Saquarema, Araruama, Niterói e Ilha Grande), destacam-se os sambaquis: grandes montes formados por conchas, restos de peixes, ossos e sepultamentos humanos deixados por povos pescadores e coletores há milênios.'
      ],
      pontosChave: [
        'Teoria de Bering: Migração a pé pelo estreito congelado entre Ásia e América do Norte.',
        'Fóssil Luzia: Mulher que viveu há cerca de 11.500 anos, com traços ancestrais fundamentais para a arqueologia.',
        'Povos dos Sambaquis: Sociedades sedentárias de pescadores do litoral que erguiam montes com conchas e enterravam seus mortos com oferendas.',
        'Preservação Arqueológica: Os sambaquis são patrimônios protegidos por lei federal no Brasil.'
      ],
      conexaoRio: 'A Região dos Lagos e a Baía de Guanabara possuem dezenas de sítios de sambaquis (como o Sambaqui da Beirada em Saquarema e em Camboinhas em Niterói), provando que o Rio já era densamente habitado há mais de 4 mil anos!',
      linhaTempo: [
        { ano: 'Aprox. 15.000 a.C.', evento: 'Presença humana consolidada na América do Sul.' },
        { ano: 'Aprox. 9.500 a.C.', evento: 'Período em que viveu Luzia na região de Lagoa Santa (Minas Gerais).' },
        { ano: '4.000 a 1.000 a.C.', evento: 'Apogeu das sociedades construtoras de sambaquis no litoral fluminense do Rio de Janeiro.' },
        { ano: '1975', evento: 'Descoberta do crânio de Luzia pela missão arqueológica franco-brasileira.' }
      ],
      paraFicarLigado: 'Sambaquis NÃO eram lixões casuais! Eles eram construções intencionais com funções funerárias, rituais e de moradia elevada para proteger da maré alta.'
    },
    flashcards: [
      { id: 'fc-6-sb1', termo: 'Sambaqui', significado: 'Palavra de origem Tupi (tamba = concha, ki = monte). Depósito intencional de conchas, ossos e artefatos de povos pré-colombianos litorâneos.' },
      { id: 'fc-6-sb2', termo: 'Luzia', significado: 'O mais antigo esqueleto humano feminino já identificado na América do Sul, com mais de 11 mil anos.' },
      { id: 'fc-6-sb3', termo: 'Nômades vs. Sedentários', significado: 'Nômades se deslocavam em busca de caça; os povos dos sambaquis eram sedentários graças à abundância de frutos do mar.' }
    ],
    questions: [
      {
        id: 'q-6-3',
        pergunta: 'Os sambaquis encontrados no litoral do estado do Rio de Janeiro (como em Saquarema e Niterói) revelam sobre os povos que os construíram que eles:',
        opcoes: [
          'Eram grupos fixados no litoral, especializados na pesca e coleta marinha, que usavam essas estruturas para rituais e sepultamento de seus mortos.',
          'Eram povos nômades que apenas passavam correndo sem deixar qualquer ritual funerário ou marcas na paisagem.',
          'Eram imigrantes europeus trazidos pelas caravelas de Pedro Álvares Cabral no século XVI.',
          'Eram faraós que construíram pirâmides de pedra maciça para adoração aos deuses gregos.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Os sambaquis eram montículos intencionais de conchas erguidos por comunidades litorâneas bem organizadas, servindo como mirantes, locais de habitação e cemitérios rituais para seus antepassados.',
        diagnosticoErros: {
          1: { misconception: 'Você achou que eles eram nômades errantes sem organização social.', guidanceTip: 'Pense no trabalho gigantesco de acumular milhares de toneladas de conchas durante gerações.', conceptReview: 'A abundância de peixes e mariscos permitiu o sedentarismo litorâneo.' },
          2: { misconception: 'Você cometeu um anacronismo de milhares de anos.', guidanceTip: 'Cabral chegou em 1500 d.C.; os sambaquis têm milhares de anos de idade!', conceptReview: 'Os sambaquis são vestígios pré-cabralinos milenares.' },
          3: { misconception: 'Você misturou o Egito e a Grécia com a arqueologia brasileira.', guidanceTip: 'Pirâmides egípcias eram de blocos de calcário; sambaquis são elevações litorâneas de conchas.', conceptReview: 'Os sambaquis pertencem à pré-história do litoral brasileiro.' }
        },
        habilidadeBNCC: 'EF06HI03'
      },
      {
        id: 'q-6-2-2',
        pergunta: 'O fóssil de Luzia, descoberto em Minas Gerais e preservado no Museu Nacional da Quinta da Boa Vista no Rio de Janeiro, é considerado histórico porque:',
        opcoes: [
          'É um dos fósseis humanos mais antigos da América do Sul (cerca de 11.500 anos), comprovando a ocupação remota do continente.',
          'Foi a primeira rainha de Portugal a desembarcar no Rio de Janeiro.',
          'É um dinossauro voador que habitava a Baía de Guanabara.',
          'Foi uma estátua esculpida em ouro por artistas do Renascimento italiano.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Luzia revolucionou as teorias sobre a colonização do continente americano devido à sua antiguidade e aos seus traços morfológicos ancestrais.',
        diagnosticoErros: {
          1: { misconception: 'Você confundiu um esqueleto pré-histórico com a monarquia portuguesa.', guidanceTip: 'Luzia viveu mais de 11 mil anos atrás; a monarquia portuguesa no Brasil é do século XIX.', conceptReview: 'Luzia foi uma mulher caçadora-coletora pré-histórica.' },
          2: { misconception: 'Você confundiu fósseis de hominídeos com a paleontologia dos dinossauros.', guidanceTip: 'Dinossauros foram extintos há 66 milhões de anos; Luzia era um ser humano Homo sapiens.', conceptReview: 'Luzia pertence à arqueologia humana americana.' },
          3: { misconception: 'Você confundiu restos ósseos naturais com uma escultura artística.', guidanceTip: 'Luzia é o crânio e esqueleto real de uma mulher pré-histórica.', conceptReview: 'Trata-se de um fóssil arqueológico autêntico.' }
        },
        habilidadeBNCC: 'EF06HI04'
      },
      {
        id: 'q-6-2-3',
        pergunta: 'A teoria mais tradicional sobre o povoamento da América afirma que os primeiros grupos humanos chegaram ao continente através:',
        opcoes: [
          'Do Estreito de Bering, que estava congelado durante a última era glacial ligando a Ásia à América do Norte.',
          'De aviões a jato supersônicos operados por povos maias.',
          'De trens que atravessavam túneis submarinos construídos no fundo do oceano.',
          'Do Canal do Panamá aberto pelos imperadores romanos.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Durante a última glaciação, o nível do mar baixou, formando uma ponte de terra e gelo (Beríngia) que permitiu a travessia a pé de animais e caçadores da Sibéria para o Alasca.',
        diagnosticoErros: {
          1: { misconception: 'Você usou tecnologia moderna do século XX na pré-história.', guidanceTip: 'As migrações humanas primitivas foram feitas a pé ou em pequenas canoas rústicas.', conceptReview: 'Grupos humanos pré-históricos deslocavam-se a pé e com navegação costeira.' },
          2: { misconception: 'Você cometeu um anacronismo tecnológico impossível.', guidanceTip: 'Trens a vapor só surgiram na Revolução Industrial no século XIX.', conceptReview: 'A pré-história utilizava ferramentas de pedra lascada e polida.' },
          3: { misconception: 'Você confundiu o Canal do Panamá (século XX) com a rota migratória antiga.', guidanceTip: 'O Estreito de Bering fica no extremo norte do globo, entre a Rússia e o Alasca.', conceptReview: 'A teoria do Estreito de Bering explica a rota pelo norte.' }
        },
        habilidadeBNCC: 'EF06HI04'
      },
      {
        id: 'q-6-2-4',
        pergunta: 'A palavra "Sambaqui" tem origem na língua indígena Tupi e significa literalmente:',
        opcoes: [
          '"Monte de conchas" (tamba = concha e ki = amontoado).',
          '"Navio que navega veloz".',
          '"Castelo de ferro e pedra".',
          '"Floresta de árvores sem folhas".'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'A palavra expressa com precisão a estrutura desses sítios arqueológicos litorâneos compostos por camadas de conchas de moluscos acumuladas por séculos.',
        diagnosticoErros: {
          1: { misconception: 'Você associou o termo a embarcações marítimas.', guidanceTip: 'Os sambaquis são colinas e montes em terra firme perto de praias e lagoas.', conceptReview: 'Sambaqui é uma palavra tupi para monte de mariscos/conchas.' },
          2: { misconception: 'Você confundiu conchas calcárias com castelos medievais de ferro.', guidanceTip: 'Os povos sambaquieiros usavam recursos da natureza local como conchas e ossos.', conceptReview: 'Sambaquis são formados por material biológico marinho compactado.' },
          3: { misconception: 'Você pensou em vegetação botânica.', guidanceTip: 'O elemento central de um sambaqui são conchas de ostras, berbigões e mariscos.', conceptReview: 'Sambaquis são montes calcários bioculturais.' }
        },
        habilidadeBNCC: 'EF06HI03'
      },
      {
        id: 'q-6-2-5',
        pergunta: 'Os sepultamentos encontrados dentro dos sambaquis da Região dos Lagos fluminense (como em Saquarema) provam que:',
        opcoes: [
          'Essas comunidades tinham sentimentos religiosos, cuidados fúnebres e enterravam seus mortos com oferendas e adornos de pedra e conchas.',
          'Eles jogavam seus falecidos no mar sem qualquer ritual ou afeição.',
          'Eles não sabiam que as pessoas morriam e fugiam com medo das sombras.',
          'Todos os sepultamentos eram de soldados espanhóis do século XVIII.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Os corpos eram colocados em posições específicas, frequentemente acompanhados de corantes vermelhos (ocre), estatuetas esculpidas de peixes em pedra (zoolitos) e colares.',
        diagnosticoErros: {
          1: { misconception: 'Você imaginou um desdém com os mortos que contradiz a arqueologia.', guidanceTip: 'Os arqueólogos encontram covas cuidadosamente preparadas com leitos de conchas.', conceptReview: 'Rituais funerários demonstram crença em outra vida e laços de parentesco.' },
          2: { misconception: 'Você subestimou a consciência e a humanidade dos povos pré-históricos.', guidanceTip: 'O respeito aos mortos é uma das mais antigas manifestações da inteligência humana.', conceptReview: 'Sepultamentos elaborados existem há mais de 50 mil anos na história humana.' },
          3: { misconception: 'Você errou a época em milhares de anos.', guidanceTip: 'Sambaquis fluminenses datam de 4.000 a 1.000 a.C., muito antes de qualquer europeu.', conceptReview: 'Os esqueletos pertencem a povos indígenas originários da costa brasileira.' }
        },
        habilidadeBNCC: 'EF06HI03'
      },
      {
        id: 'q-6-2-6',
        pergunta: 'Os objetos esculpidos em pedra polida com formato de peixes, tartarugas e aves marinhas encontrados nos sambaquis são chamados de:',
        opcoes: [
          'Zoolitos.',
          'Computadores quânticos.',
          'Espadas de bronze.',
          'Canhões de pólvora.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Zoolitos (zoo = animal, litos = pedra) são magníficas esculturas líticas que expressavam a arte e a relação espiritual dos povos dos sambaquis com a fauna marinha.',
        diagnosticoErros: {
          1: { misconception: 'Você escolheu uma invenção tecnológica moderna.', guidanceTip: 'Pense em esculturas de pedra polidas com areia e água há milênios.', conceptReview: 'Zoolitos são esculturas líticas em forma de animais.' },
          2: { misconception: 'Você confundiu pedra com ligas metálicas.', guidanceTip: 'Os povos sambaquieiros trabalhavam a pedra, ossos de baleia e conchas, não metais.', conceptReview: 'Eles dominavam a tecnologia da pedra polida.' },
          3: { misconception: 'Você cometeu um anacronismo com armas de fogo.', guidanceTip: 'A pólvora só chegou à América com os europeus a partir de 1492.', conceptReview: 'Armas de caça dos sambaquis eram arpões de osso e flechas.' }
        },
        habilidadeBNCC: 'EF06HI04'
      },
      {
        id: 'q-6-2-7',
        pergunta: 'Por que muitos sambaquis no litoral do Rio de Janeiro foram destruídos ao longo dos séculos XIX e XX?',
        opcoes: [
          'Porque suas conchas foram mineradas para fabricar cal para a construção civil e devido à especulação imobiliária nas praias.',
          'Porque os próprios indígenas os destruíram para construir fábricas de plástico.',
          'Porque um terremoto de escala máxima engoliu todas as praias do Rio.',
          'Porque eram feitos de gelo e derreteram no verão carioca.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Antes das leis de proteção arqueológica, a cal feita da queima de conchas dos sambaquis era muito usada na argamassa dos edifícios coloniais do Rio.',
        diagnosticoErros: {
          1: { misconception: 'Você atribuiu às populações originárias a degradação urbana moderna.', guidanceTip: 'Os indígenas respeitavam os sambaquis como locais sagrados de seus antepassados.', conceptReview: 'A destruição foi causada pela mineração de cal e expansão urbana recente.' },
          2: { misconception: 'Você inventou um cataclismo geológico que nunca ocorreu no Rio.', guidanceTip: 'O Brasil situa-se no centro da placa tectônica sul-americana, sem grandes terremotos.', conceptReview: 'A destruição dos sambaquis foi provocada pela ação humana predatória.' },
          3: { misconception: 'Você esqueceu que conchas são feitas de carbonato de cálcio resistente.', guidanceTip: 'Conchas são minerais rígidos que duram milênios em condições adequadas.', conceptReview: 'Sambaquis são rochas e conchas sedimentadas, não gelo.' }
        },
        habilidadeBNCC: 'EF06HI03'
      },
      {
        id: 'q-6-2-8',
        pergunta: 'Em relação à alimentação, as escavações em sítios sambaquieiros fluminenses mostram que a dieta básica desses grupos era composta por:',
        opcoes: [
          'Peixes de estuário, moluscos (ostras, mariscos), caranguejos e frutos da vegetação de restinga.',
          'Hambúrgueres ultraprocessados e refrigerantes industriais.',
          'Pizzas de queijo importadas da Itália por avião.',
          'Exclusivamente carne de elefantes mamutes africanos.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Eles aproveitavam intensamente a rica biodiversidade aquática das baías, lagoas litorâneas e manguezais do litoral fluminense.',
        diagnosticoErros: {
          1: { misconception: 'Você usou alimentos industriais modernos.', guidanceTip: 'A alimentação pré-histórica dependia diretamente dos recursos da fauna e flora locais.', conceptReview: 'A dieta litorânea consistia em mariscos, peixes e plantas nativas.' },
          2: { misconception: 'Você cometeu um anacronismo gastronômico moderno.', guidanceTip: 'Trigo e vacas não existiam no litoral brasileiro antes da colonização.', conceptReview: 'Os recursos consumidos eram os animais marinhos nativos.' },
          3: { misconception: 'Você confundiu o litoral tropical brasileiro com a tundra siberiana.', guidanceTip: 'Mamutes viveram em regiões frias do hemisfério norte e foram extintos há milênios.', conceptReview: 'No litoral fluminense a caça era de peixes, arraias e pequenos mamíferos da Mata Atlântica.' }
        },
        habilidadeBNCC: 'EF06HI04'
      },
      {
        id: 'q-6-2-9',
        pergunta: 'Qual a importância de os sambaquis serem tombados e protegidos por lei pelo Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN)?',
        opcoes: [
          'Porque são arquivos biológicos e culturais insubstituíveis sobre o modo de vida dos primeiros seres humanos no Brasil.',
          'Para que ninguém mais possa tomar banho de mar em Niterói ou Saquarema.',
          'Porque dentro deles foram encontradas minas secretas de diamantes da família real.',
          'Para transformá-los em pistas de corrida de automóveis.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Os sambaquis guardam informações cruciais sobre clima antigo, ecologia, doenças e cultura dos povos originários que não existem em nenhum outro lugar.',
        diagnosticoErros: {
          1: { misconception: 'Você supôs que a preservação histórica fecha o acesso às praias.', guidanceTip: 'O patrimônio pode conviver harmonicamente com o turismo e o lazer consciente.', conceptReview: 'A preservação arqueológica educa e valoriza a história local.' },
          2: { misconception: 'Você imaginou tesouros de pedras preciosas da nobreza.', guidanceTip: 'O valor dos sambaquis é histórico, científico e cultural, não de pedras preciosas.', conceptReview: 'O patrimônio arqueológico é uma riqueza de conhecimento para a humanidade.' },
          3: { misconception: 'Você propôs um uso destrutivo e incompatível com patrimônio.', guidanceTip: 'A lei proíbe qualquer dano ou intervenção não autorizada em sítios arqueológicos.', conceptReview: 'Sambaquis são protegidos pela Constituição Federal e leis ambientais.' }
        },
        habilidadeBNCC: 'EF06HI03'
      },
      {
        id: 'q-6-2-10',
        pergunta: 'Além dos povos pescadores dos sambaquis, o território brasileiro conheceu grupos que domesticaram a mandioca e desenvolveram a cerâmica, como os povos do tronco:',
        opcoes: [
          'Tupi-Guarani, que se expandiram pelas bacias hidrográficas e pelo litoral séculos depois.',
          'Viking da Escandinávia.',
          'Samurai do Japão feudal.',
          'Centurião romano da península itálica.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Com o tempo, povos agricultores e ceramistas, especialmente os Tupis, ocuparam grande parte do litoral brasileiro, dominando o plantio da mandioca e a confecção de urnas funerárias.',
        diagnosticoErros: {
          1: { misconception: 'Você confundiu povos navegadores europeus com os povos originários do Brasil.', guidanceTip: 'A mandioca é uma raiz nativa da América do Sul cultivada por indígenas brasileiros.', conceptReview: 'Os povos Tupi-Guarani foram os mestres da agricultura da mandioca.' },
          2: { misconception: 'Você deslocou guerreiros japoneses medievais para a América do Sul pré-colonial.', guidanceTip: 'Os povos originários do Brasil desenvolveram tecnologias próprias adaptadas à floresta tropical.', conceptReview: 'A domesticação de plantas e a cerâmica brasileira foram criadas por indígenas locais.' },
          3: { misconception: 'Você confundiu a legião romana com as aldeias da América do Sul.', guidanceTip: 'A cerâmica tupiguarani é famosa por suas pinturas geométricas vermelhas e pretas.', conceptReview: 'A tradição ceramista Tupi-Guarani é um patrimônio arqueológico fundamental do Brasil.' }
        },
        habilidadeBNCC: 'EF06HI04'
      }
    ]
  },

  // ==========================================
  // 6º ANO - TÓPICO 3: GRÉCIA E ROMA (10 QUESTÕES)
  // ==========================================
  {
    id: '6-grecia-roma',
    grade: '6',
    gradeLabel: '6º Ano',
    period: 'Pré-História & Antiguidade',
    title: 'Grécia e Roma Antigas: Cidadania, Pólis e Império',
    subtitle: 'O nascimento da democracia em Atenas e o legado político e jurídico de Roma',
    tempoLeituraMin: 5,
    tags: ['Atenas', 'Democracia', 'República Romana', 'Cidadania'],
    summary: {
      introducao: [
        'Na Grécia Antiga, não existia um país unificado, mas cidades-estado independentes (chamadas pólis), como Atenas e Esparta, que compartilhavam a língua e a religião politeísta.',
        'Em Atenas, desenvolveu-se a democracia direta: os cidadãos debatiam e votavam diretamente as leis na Ágora (praça pública). Contudo, era uma cidadania excludente: apenas homens livres, adultos, filhos de pais atenienses eram cidadãos. Mulheres, estrangeiros (metecos) e escravizados não tinham direitos políticos.',
        'Em Roma, a trajetória política passou por Monarquia, República e Império. Na República, destacou-se a luta entre patrícios (nobres proprietários de terra) e plebeus (maioria da população livre que lutou pelo direito a magistraturas e leis escritas como a Lei das Doze Tábuas).'
      ],
      pontosChave: [
        'Democracia Ateniense: Direta e participativa, porém restrita a uma minoria de homens atenienses.',
        'Esparta: Sociedade oligárquica e militarizada, focada no treinamento para a guerra desde a infância.',
        'República Romana: Senado poderoso, tribunos da plebe e conquista militar da bacia do Mediterrâneo ("Mare Nostrum").',
        'Legado Clássico: O Direito Romano, o latim (origem do português), a filosofia e o ideal republicano de "coisa pública" (res publica).'
      ],
      conexaoRio: 'O Palácio Tiradentes (onde funcionou a Câmara dos Deputados no Rio) e o Theatro Municipal na Cinelândia possuem fachadas com colunas greco-romanas (estilo neoclássico), simbolizando os ideais de cidadania e república.',
      linhaTempo: [
        { ano: '508 a.C.', evento: 'Reformas de Clístenes estabelecem a democracia em Atenas.' },
        { ano: '509 a.C.', evento: 'Fim da Monarquia e início da República em Roma.' },
        { ano: '450 a.C.', evento: 'Redação da Lei das Doze Tábuas em Roma, garantindo leis escritas aos plebeus.' },
        { ano: '27 a.C.', evento: 'Otávio Augusto torna-se o primeiro Imperador de Roma, iniciando o Império Romano.' }
      ],
      paraFicarLigado: 'Atenção ao conceito de cidadania: Na Atenas Antiga menos de 15% da população votava. Hoje, a cidadania moderna busca ser universal (homens, mulheres, sem distinção de renda ou nascimento).'
    },
    flashcards: [
      { id: 'fc-6-gr1', termo: 'Pólis', significado: 'Cidade-Estado autônoma grega com seu próprio governo, leis e moedas (ex: Atenas, Esparta, Corinto).' },
      { id: 'fc-6-gr2', termo: 'Ágora', significado: 'Praça pública central das cidades gregas onde se realizavam o comércio e os debates democráticos.' },
      { id: 'fc-6-gr3', termo: 'Res Publica', significado: 'Expressão latina que significa "coisa pública", base da palavra República, onde o Estado pertence a todos os cidadãos.' }
    ],
    questions: [
      {
        id: 'q-6-4',
        pergunta: 'Sobre a democracia praticada em Atenas no período clássico, é correto afirmar que:',
        opcoes: [
          'Era uma democracia direta na qual os cidadãos debatiam na praça pública, mas da qual estavam excluídos as mulheres, os estrangeiros e as pessoas escravizadas.',
          'Era uma democracia representativa idêntica à do Brasil atual, em que todos os maiores de 16 anos podiam votar pela internet.',
          'Garantia a igualdade total de direitos entre homens livres e escravizados, com as mulheres ocupando a liderança do exército.',
          'Era governada por um único rei hereditário absoluto que não permitia a livre expressão dos cidadãos.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'A democracia ateniense era direta para quem era cidadão, porém a cidadania era privilégio de homens livres filhos de pais atenienses, excluindo mais de 80% da população.',
        diagnosticoErros: {
          1: { misconception: 'Você confundiu a democracia direta presencial antiga com o sufrágio universal moderno.', guidanceTip: 'Na Grécia não existiam eleições representativas gerais nem voto digital.', conceptReview: 'A democracia moderna é representativa e universal; a ateniense era direta e elitizada.' },
          2: { misconception: 'Você supôs que escravizados e mulheres tinham voz na assembleia.', guidanceTip: 'A sociedade grega era fortemente patriarcal e baseada na escravidão.', conceptReview: 'Mulheres ficavam restritas ao espaço doméstico (gineceu) e escravizados não eram cidadãos.' },
          3: { misconception: 'Você descreveu uma Monarquia Absoluta ou Tirania.', guidanceTip: 'Demos = povo, Kratos = poder. As decisões eram tomadas na Eclésia (assembleia).', conceptReview: 'A democracia ateniense rompeu com o poder individual dos reis arcaicos.' }
        },
        habilidadeBNCC: 'EF06HI10'
      },
      {
        id: 'q-6-3-2',
        pergunta: 'Enquanto Atenas desenvolveu a democracia e o debate filosófico, a pólis de Esparta caracterizou-se por:',
        opcoes: [
          'Uma organização social militarizada e oligárquica, onde a formação de soldados guerreiros (hoplitas) era prioridade desde a infância.',
          'Uma sociedade totalmente pacífica que não possuía exército e vivia exclusivamente de dança.',
          'Uma colônia de pescadores fundada por navegadores portugueses no século XV.',
          'Um governo liderado por filósofos poetas eleitos a cada semana por sorteio.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Esparta educava seus jovens na agogê para suportar a dor, o frio e obedecer cegamente às ordens militares, governada por dois reis (diarquia) e pelo conselho de anciãos (Gerúsia).',
        diagnosticoErros: {
          1: { misconception: 'Você pensou que Esparta não tinha forças armadas.', guidanceTip: 'Lembre-se da célebre Batalha das Termópilas com o rei Leônidas.', conceptReview: 'Esparta tinha o mais temido e disciplinado exército terrestre da Grécia.' },
          2: { misconception: 'Você cometeu um anacronismo de dois mil anos com a expansão marítima portuguesa.', guidanceTip: 'Esparta ficava na península do Peloponeso na Grécia Antiga no primeiro milênio a.C.', conceptReview: 'Esparta foi uma das mais importantes cidades-estado da Antiguidade Clássica.' },
          3: { misconception: 'Você confundiu o ideal platônico de Atenas com a disciplina espartana.', guidanceTip: 'Em Esparta o que importava era a força física e a obediência cívica, não a retórica.', conceptReview: 'A sociedade espartana valorizava o laconismo e o vigor militar.' }
        },
        habilidadeBNCC: 'EF06HI10'
      },
      {
        id: 'q-6-3-3',
        pergunta: 'Na República Romana, a luta dos plebeus contra os privilégios dos patrícios resultou em importantes conquistas, tais como:',
        opcoes: [
          'A criação do cargo de Tribuno da Plebe (com poder de veto) e a redação da Lei das Doze Tábuas.',
          'A expulsão de todos os generais romanos para o continente americano.',
          'A abolição total do Senado romano e a entrega do poder aos faraós egípcios.',
          'A proibição do uso da língua latina em todo o território de Roma.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Greves militares da plebe (retirada para o Monte Sagrado) forçaram os patrícios a conceder leis escritas (Lei das Doze Tábuas) e representantes com imunidade (Tribunos da Plebe).',
        diagnosticoErros: {
          1: { misconception: 'Você confundiu Roma com a América.', guidanceTip: 'O continente americano era desconhecido para romanos e gregos.', conceptReview: 'A expansão romana ocorreu na bacia do Mediterrâneo, Europa e Norte da África.' },
          2: { misconception: 'Você supôs a extinção do Senado Romano.', guidanceTip: 'O Senado permaneceu como a instituição mais poderosa durante toda a República.', conceptReview: 'Os plebeus conquistaram direitos dentro da estrutura republicana existente.' },
          3: { misconception: 'Você supôs que os romanos proibiram sua própria língua materna.', guidanceTip: 'O latim era a língua oficial de Roma e deu origem ao português, espanhol e francês.', conceptReview: 'O latim foi a base jurídica e cultural de todo o Império Romano.' }
        },
        habilidadeBNCC: 'EF06HI11'
      },
      {
        id: 'q-6-3-4',
        pergunta: 'A expressão latina "Res Publica", que deu origem à palavra República, significa literalmente:',
        opcoes: [
          '"Coisa pública", indicando que os assuntos do Estado pertencem ao bem comum de todos os cidadãos.',
          '"Propriedade privada absoluta do rei".',
          '"Cidade construída em cima de barcos de guerra".',
          '"Língua secreta usada pelos deuses do Olimpo".'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'O conceito republicano romano estabeleceu que o poder não deve ser posse hereditária de uma família real, mas gerido temporariamente no interesse da coletividade.',
        diagnosticoErros: {
          1: { misconception: 'Você descreveu o absolutismo monárquico em vez da República.', guidanceTip: 'A República foi criada exatamente para expulsar o último rei de Roma (Tarquínio, o Soberbo).', conceptReview: 'República = coisa pública em oposição à tirania pessoal.' },
          2: { misconception: 'Você imaginou uma estrutura náutica inexistente no conceito.', guidanceTip: 'Roma ficava às margens do rio Tibre e governava territórios terrestres.', conceptReview: 'Trata-se de um conceito de teoria política e jurídica.' },
          3: { misconception: 'Você confundiu termos jurídicos com religião mística.', guidanceTip: 'Res Publica é o fundamento do Direito Romano e das democracias modernas.', conceptReview: 'É o princípio de que o Estado serve aos cidadãos.' }
        },
        habilidadeBNCC: 'EF06HI11'
      },
      {
        id: 'q-6-3-5',
        pergunta: 'Durante o Império Romano, a política do "Pão e Circo" (Panem et Circenses) consistia em:',
        opcoes: [
          'Distribuir trigo gratuito e promover espetáculos públicos (lutas de gladiadores e corridas de bigas no Coliseu) para conter revoltas da plebe faminta.',
          'Obrigar todos os cidadãos a se tornarem padeiros e palhaços profissionais.',
          'Um programa de alfabetização universal gratuita e distribuição de computadores a todos os escravizados.',
          'Uma aliança pacífica entre romanos e os povos indígenas tupinambás.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Os imperadores usavam o alimento básico e as diversões sangrentas para anestesiar a insatisfação social da massa desempregada de Roma.',
        diagnosticoErros: {
          1: { misconception: 'Você levou a expressão figurativa ao pé da letra profissional.', guidanceTip: '"Circo" referia-se às arenas de espetáculos como o Circo Máximo e o Coliseu.', conceptReview: 'Pão e Circo era uma tática de controle político e despolitização social.' },
          2: { misconception: 'Você inventou políticas educacionais e tecnologias modernas.', guidanceTip: 'O império romano mantinha a grande maioria da população analfabeta e explorada.', conceptReview: 'A política do pão e circo buscava distrair o povo de suas reivindicações reais.' },
          3: { misconception: 'Você misturou romanos antigos com tribos indígenas brasileiras.', guidanceTip: 'Tupinambás viviam no litoral brasileiro mais de mil anos depois.', conceptReview: 'Povos vizinhos de Roma eram chamados genericamente de "bárbaros" (germânicos, celtas).' }
        },
        habilidadeBNCC: 'EF06HI12'
      },
      {
        id: 'q-6-3-6',
        pergunta: 'O Mar Mediterrâneo era chamado com orgulho pelos romanos de "Mare Nostrum" (Nosso Mar) porque:',
        opcoes: [
          'O Império Romano conquistou e dominou todas as terras e portos ao redor daquela grande bacia marítima.',
          'Nenhum peixe ou criatura marinha tinha permissão de nadar nas águas sem autorização do papa.',
          'O mar secou completamente durante 400 anos permitindo que as pessoas andassem a pé.',
          'Os romanos compraram o mar da rainha da Inglaterra por meio de notas promissórias.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Roma cercou todo o Mediterrâneo (Europa meridional, Oriente Médio e Norte da África), unificando rotas comerciais e militares sob a "Pax Romana".',
        diagnosticoErros: {
          1: { misconception: 'Você levou para o lado mitológico irreal.', guidanceTip: 'Trata-se de uma dominação militar e econômica de frotas e portos.', conceptReview: 'Mare Nostrum simbolizava a hegemonia militar de Roma sobre três continentes.' },
          2: { misconception: 'Você imaginou um fenômeno ecológico falso.', guidanceTip: 'O Mediterrâneo sempre foi uma via navegável de intensas rotas mercantis.', conceptReview: 'O comércio marítimo romano transportava trigo do Egito, azeite da Hispânia e vinhos.' },
          3: { misconception: 'Você cometeu um anacronismo com a Inglaterra moderna.', guidanceTip: 'Na época romana, a Grã-Bretanha era uma província distante chamada Britânia.', conceptReview: 'A dominação deu-se por guerras de conquista (como as Guerras Púnicas contra Cartago).' }
        },
        habilidadeBNCC: 'EF06HI12'
      },
      {
        id: 'q-6-3-7',
        pergunta: 'Qual foi a principal transformação trazida pelo imperador Constantino através do Edito de Milão no ano 313 d.C.?',
        opcoes: [
          'Concedeu liberdade de culto aos cristãos, pondo fim a séculos de perseguição no Império Romano.',
          'Proibiu qualquer pessoa de falar latim em toda a Europa.',
          'Ordenou a demolição do Coliseu de Roma para construir um porto de navios a vapor.',
          'Declarou que o imperador deveria ser adorado como uma estátua de mármore por todos os animais.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Após séculos em que os cristãos foram jogados aos leões por se recusarem a cultuar os deuses pagãos e o imperador, o Edito de Milão legalizou o cristianismo.',
        diagnosticoErros: {
          1: { misconception: 'Você supôs uma proibição linguística.', guidanceTip: 'A Igreja Católica adotou o latim como sua língua litúrgica oficial.', conceptReview: 'O latim fortaleceu-se ainda mais com a expansão da Igreja cristã.' },
          2: { misconception: 'Você cometeu um anacronismo industrial.', guidanceTip: 'Navios a vapor são do século XIX; Constantino viveu no século IV d.C.', conceptReview: 'O Coliseu continuou de pé e muitas basílicas cristãs foram erguidas.' },
          3: { misconception: 'Você inverteu a relação: o cristianismo combatia a divinização humana do imperador.', guidanceTip: 'Os cristãos adoravam a Deus e a Jesus, recusando cultuar o imperador como deus.', conceptReview: 'Essa recusa foi a razão das antigas perseguições romanas aos cristãos.' }
        },
        habilidadeBNCC: 'EF06HI13'
      },
      {
        id: 'q-6-3-8',
        pergunta: 'A principal herança institucional deixada pelo mundo romano para o direito e a justiça das nações ocidentais modernas, incluindo o Brasil, foi:',
        opcoes: [
          'O Direito Romano, com princípios como presunção de inocência, igualdade perante a lei escrita e contratos formais.',
          'A exigência de que todos os advogados lutem com espadas de gladiadores no tribunal.',
          'A proibição de juízes utilizarem provas materiais nos julgamentos.',
          'A determinação de que apenas reis estrangeiros podem julgar conflitos entre vizinhos.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'O Direito Romano (organizado no Corpus Juris Civilis por Justiniano) é a base de todo o Código Civil brasileiro e da maioria dos países ocidentais.',
        diagnosticoErros: {
          1: { misconception: 'Você confundiu espetáculos de gladiadores com o sistema judiciário formal.', guidanceTip: 'Tribunais romanos julgavam causas através de testemunhas, leis escritas e advogados (oradores como Cícero).', conceptReview: 'O Direito Romano estruturou os conceitos modernos de petição, recurso e julgamento.' },
          2: { misconception: 'Você inverteu o princípio: Roma valorizava imensamente as evidências.', guidanceTip: 'Princípios jurídicos como "in dubio pro reo" (na dúvida, a favor do réu) nasceram em Roma.', conceptReview: 'A lei escrita romana superou o arbítrio das vontades pessoais.' },
          3: { misconception: 'Você descreveu uma regra feudal e não o direito republicano romano.', guidanceTip: 'Cidadãos romanos eram julgados por magistrados eleitos (pretores).', conceptReview: 'A magistratura romana separou as funções administrativas das judiciais.' }
        },
        habilidadeBNCC: 'EF06HI13'
      },
      {
        id: 'q-6-3-9',
        pergunta: 'Na cidade do Rio de Janeiro, edifícios históricos como o Theatro Municipal na Cinelândia e o Palácio Tiradentes usam colunas e frontões inspirados na arquitetura greco-romana. Esse estilo artístico é denominado:',
        opcoes: [
          'Neoclássico.',
          'Pré-histórico de cavernas.',
          'Gótico medieval com gárgulas de pedra pontiagudas.',
          'Cubista futurista dos anos 2000.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'O Neoclassicismo (séculos XVIII e XIX) reviveu a simetria, harmonia e proporção dos templos gregos e romanos para transmitir ordem e autoridade cívica.',
        diagnosticoErros: {
          1: { misconception: 'Você associou monumentos de mármore do Centro do Rio a cavernas pré-históricas.', guidanceTip: 'Observe as colunas imponentes e os capitéis jônicos e coríntios.', conceptReview: 'O estilo neoclássico remete à Grécia e Roma antigas.' },
          2: { misconception: 'Você confundiu estilo clássico com o gótico das catedrais medievais.', guidanceTip: 'O gótico usa ogivas altas e vitrais; o neoclássico usa colunas retas e frontões triangulares.', conceptReview: 'O Centro do Rio foi desenhado no século XIX e XX com forte influência neoclássica.' },
          3: { misconception: 'Você confundiu as vanguardas do século XX com a arte clássica.', guidanceTip: 'A inspiração nos templos gregos (como o Partenon) é a marca do Neoclássico.', conceptReview: 'O Theatro Municipal mescla ecletismo com forte base clássica.' }
        },
        habilidadeBNCC: 'EF06HI10'
      },
      {
        id: 'q-6-3-10',
        pergunta: 'Em Atenas, o mecanismo do "ostracismo" consistia em:',
        opcoes: [
          'Um voto popular escrito em pedaços de cerâmica (óstracon) para banir da cidade por dez anos qualquer político suspeito de ameaçar a democracia.',
          'Um campeonato esportivo em que o vencedor se tornava dono de todas as casas de Atenas.',
          'Uma festa anual em que os cidadãos comiam apenas frutos do mar na beira da praia.',
          'Uma cerimônia de coroação dos generais espartanos dentro do Senado ateniense.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'O ostracismo foi criado por Clístenes para proteger a jovem democracia contra qualquer cidadão que acumulasse poder excessivo e tentasse se tornar um tirano.',
        diagnosticoErros: {
          1: { misconception: 'Você confundiu eleições de banimento com os Jogos Olímpicos.', guidanceTip: 'O ostracismo era uma medida de defesa cívica e política, não atlética.', conceptReview: 'Cidadãos escreviam o nome de quem consideravam perigoso para o regime popular.' },
          2: { misconception: 'Você fez uma associação literal com a palavra ostra.', guidanceTip: 'Óstracon era o nome do caco de cerâmica usado como cédula eleitoral.', conceptReview: 'O termo "ostracismo" hoje significa isolamento ou exclusão política.' },
          3: { misconception: 'Você misturou rivais mortais (Esparta e Atenas).', guidanceTip: 'Atenas e Esparta disputavam a hegemonia da Grécia e tinham governos opostos.', conceptReview: 'O ostracismo era uma lei exclusiva da democracia ateniense.' }
        },
        habilidadeBNCC: 'EF06HI10'
      }
    ]
  }
];
