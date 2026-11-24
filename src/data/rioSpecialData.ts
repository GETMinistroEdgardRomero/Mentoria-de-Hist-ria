import { Topic } from '../types/history';

export const RIO_SPECIAL_TOPICS: Topic[] = [
  // ==========================================
  // ESPECIAL HISTÓRIA DO RIO - TÓPICO 1: CAIS DO VALONGO & PEQUENA ÁFRICA (10 QUESTÕES)
  // ==========================================
  {
    id: 'rio-valongo-pequena-africa',
    grade: 'rio',
    gradeLabel: 'História do Rio',
    period: 'História do Rio de Janeiro',
    title: 'Cais do Valongo e a Pequena África: Memória e Herança',
    subtitle: 'O sítio arqueológico do Valongo, Patrimônio Mundial da UNESCO, e o berço do samba',
    tempoLeituraMin: 5,
    tags: ['Cais do Valongo', 'Pequena África', 'UNESCO', 'Tia Ciata', 'Pedra do Sal'],
    summary: {
      introducao: [
        'Entre o final do século XVIII e a primeira metade do século XIX, o Cais do Valongo, localizado na Região Portuária do Rio de Janeiro, foi o principal porto de entrada de africanos escravizados em todo o continente americano. Estima-se que mais de um milhão de seres humanos escravizados tenham desembarcado em suas pedras.',
        'Para apagar essa memória incômoda, o cais foi aterrado e reformado em 1843 para receber a futura imperatriz Teresa Cristina, passando a se chamar Cais da Imperatriz. Mais tarde, nas reformas de Pereira Passos no início do século XX, toda a região foi novamente soterrada sob a nova praça da Zona Portuária.',
        'Em 2011, durante as escavações das obras do Porto Maravilha, os calçamentos de pedra do Cais do Valongo e milhares de artefatos de matriz africana (amuletos, búzios, anéis, cachimbos) foram redescobertos. Em 2017, a UNESCO reconheceu o Cais do Valongo como Patrimônio Mundial da Humanidade, no mesmo nível de sensibilidade histórica de locais como Auschwitz e Hiroshima.',
        'A região ao redor ficou conhecida como a "Pequena África" (termo cunhado pelo artista Heitor dos Prazeres): abrange a Pedra do Sal (onde estivadores negros descarregavam sal e criaram as primeiras rodas de samba), o Jardim Suspenso do Valongo e a casa de Tia Ciata, matrona baiana cujo terreiro na Praça Onze foi o útero de onde nasceu o primeiro samba gravado: "Pelo Telefone" (1916).'
      ],
      pontosChave: [
        'Porta de Entrada: O Cais do Valongo foi o maior ponto de desembarque de africanos escravizados das Américas.',
        'Patrimônio Mundial da UNESCO (2017): Sítio de memória sensível que recorda a tragédia da escravidão e a resistência afro-brasileira.',
        'Pedra do Sal: Ponto de encontro de marinheiros, estivadores e compositores, marco zero do samba carioca.',
        'Tia Ciata (Hilária Batista de Almeida): Líder religiosa do candomblé, rezadeira e empreendedora fundamental na proteção e florescimento da cultura negra carioca.'
      ],
      conexaoRio: 'Você pode visitar a pé o Circuito Histórico e Arqueológico da Celebração da Herança Africana na Zona Portuária: o Cais do Valongo, o Cemitério dos Pretos Novos (onde eram enterrados os recém-chegados) e a Pedra do Sal no Morro da Conceição!',
      linhaTempo: [
        { ano: '1779', evento: 'Criação do Cais do Valongo para transferir o comércio de escravizados da Praça XV para uma área afastada do Centro.' },
        { ano: '1843', evento: 'O Cais é aterrado e rebatizado como Cais da Imperatriz para o casamento de D. Pedro II.' },
        { ano: '2011', evento: 'Redescoberta arqueológica das pedras originais do Cais do Valongo durante as obras urbanas no porto.' },
        { ano: '2017', evento: 'O Cais do Valongo é declarado Patrimônio Mundial pela UNESCO.' }
      ],
      paraFicarLigado: 'O Cemitério dos Pretos Novos, na Rua Pedro Ernesto na Gamboa, é o maior cemitério de escravizados das Américas. Ele revela a extrema crueldade do tráfico e é local de respeito e reflexão pedagógica obrigatória no Rioeduca.'
    },
    flashcards: [
      { id: 'fc-rio-vl1', termo: 'Cais do Valongo', significado: 'Principal ponto de desembarque de africanos escravizados nas Américas, hoje Patrimônio Mundial da UNESCO de valor universal excepcional.' },
      { id: 'fc-rio-vl2', termo: 'Pequena África', significado: 'Região portuária carioca (Saúde, Gamboa, Santo Cristo e Praça Onze) que se tornou o centro da comunidade negra livre e cultural no pós-abolição.' },
      { id: 'fc-rio-vl3', termo: 'Pedra do Sal', significado: 'Monumento histórico cravado no Morro da Conceição, onde os escravizados descarregavam sacos de sal e onde nasceu a tradição do samba de roda carioca.' }
    ],
    questions: [
      {
        id: 'q-rio-1',
        pergunta: 'Em 2017, a UNESCO declarou o Cais do Valongo, na Região Portuária do Rio de Janeiro, como Patrimônio Mundial da Humanidade. Qual foi a razão fundamental para esse reconhecimento internacional?',
        opcoes: [
          'Por ser o mais importante vestígio físico do desembarque de mais de um milhão de africanos escravizados nas Américas, servindo como sítio de memória para que os horrores da escravidão nunca sejam esquecidos e celebrando a resistência afro-brasileira.',
          'Porque ali foi construído o maior shopping center de luxo e porto turístico de cruzeiros da América Latina.',
          'Porque foi o local onde Cristóvão Colombo atracou suas três caravelas em 1492 para fundar a cidade do Rio de Janeiro.',
          'Porque é o único local no mundo onde foram encontradas pirâmides de ouro construídas pelos navegadores vikings.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'O Valongo foi reconhecido na categoria de sítio de memória sensível (assim como Auschwitz e Hiroshima), garantindo que a memória dos africanos escravizados seja preservada e transmitida às futuras gerações com honra e verdade histórica.',
        diagnosticoErros: {
          1: { misconception: 'Você confundiu um memorial de patrimônio histórico com empreendimentos comerciais modernos.', guidanceTip: 'A UNESCO tomba bens por seu inestimável valor cultural, histórico ou ecológico para toda a humanidade.', conceptReview: 'O Valongo é um sítio sagrado de memória e reflexão sobre os crimes contra a humanidade cometidos na escravidão.' },
          2: { misconception: 'Você confundiu Colombo na América Central (1492) com a história do Rio de Janeiro no século XVIII e XIX.', guidanceTip: 'Colombo nunca pisou no Rio de Janeiro; quem construiu o Valongo foram os colonizadores portugueses em 1779.', conceptReview: 'O Valongo operou como porto negreiro da Coroa Portuguesa até as proibições do tráfico no século XIX.' },
          3: { misconception: 'Você mencionou lendas sem conexão com a arqueologia do Rio de Janeiro.', guidanceTip: 'As pedras do Valongo foram talhadas à mão por escravizados e calceteiros no século XVIII.', conceptReview: 'Os achados arqueológicos do Valongo são amuletos, contas de colares e instrumentos da diáspora africana.' }
        },
        habilidadeBNCC: 'EF08HI14'
      },
      {
        id: 'q-rio-2',
        pergunta: 'Qual foi o papel histórico de figuras como Tia Ciata (Hilária Batista de Almeida) e dos encontros na Pedra do Sal na formação da cultura carioca?',
        opcoes: [
          'Eles articularam redes de acolhimento comunitário, resistência religiosa e intercâmbio musical que deram origem ao samba carioca e às primeiras agremiações carnavalescas.',
          'Eles tentaram proibir qualquer manifestação de música ou percussão nas ruas do Rio de Janeiro.',
          'Eles eram generais do exército português encarregados de policiar as praias de Copacabana.',
          'Eles representavam empresas estrangeiras que queriam substituir o samba pelo jazz americano nos anos 1800.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Tia Ciata e os estivadores da Pedra do Sal transformaram suas casas e praças em refúgios onde as tradições musicais, culinárias e religiosas de matriz africana floresceram, originando o samba moderno carioca.',
        diagnosticoErros: {
          1: { misconception: 'Você pensou que essas personalidades eram contra a música popular.', guidanceTip: 'Muito pelo contrário! Na casa de Tia Ciata os músicos se reuniam no quintal para tocar e cantar a noite toda.', conceptReview: 'Tia Ciata foi uma grande incentivadora da música e do candomblé, protegendo os músicos da perseguição policial.' },
          2: { misconception: 'Você confundiu líderes populares comunitárias com comandantes das forças armadas coloniais.', guidanceTip: 'Tia Ciata era uma mulher negra, quituteira e mãe de santo baiana que viveu na Cidade Nova no Rio.', conceptReview: 'Tia Ciata é celebrada como a grande matriarca do samba carioca.' },
          3: { misconception: 'Você atribuiu influência corporativa externa ao nascimento de uma manifestação genuinamente afro-carioca.', guidanceTip: 'O samba nasceu do batuque, do jongo, do lundu e do maxixe tocado pelos trabalhadores do cais.', conceptReview: 'O samba é fruto da resistência cultural dos negros cariocas contra a discriminação da época.' }
        },
        habilidadeBNCC: 'EF09HI04'
      },
      {
        id: 'q-rio-3',
        pergunta: 'O termo "Pequena África", utilizado para denominar a área portuária carioca que engloba a Saúde, Gamboa e Santo Cristo, foi criado por qual artista e compositor histórico?',
        opcoes: [
          'Heitor dos Prazeres, compositor, pintor e sambista carioca que viveu intensamente o cotidiano da Praça Onze.',
          'Napoleão Bonaparte da França.',
          'Duque de Caxias, general do exército imperial.',
          'Santos Dumont, o inventor do avião 14-Bis.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Heitor dos Prazeres cunhou o termo para expressar o território de pertencimento, solidariedade e recriação cultural dos negros forros e descendentes de escravizados no Centro do Rio.',
        diagnosticoErros: {
          1: { misconception: 'Você atribuiu o termo ao líder militar francês do século XIX.', guidanceTip: 'O termo nasceu da vivência de quem morava nas rodas de samba e terreiros do porto carioca.', conceptReview: 'Heitor dos Prazeres é um dos maiores artistas negros plásticos e musicais do Rio.' },
          2: { misconception: 'Você confundiu líderes populares do samba com generais do exército imperial.', guidanceTip: 'A Pequena África era um refúgio da população negra contra o preconceito das elites governantes.', conceptReview: 'A região congregava estivadores, baianas quituteiras, músicos e babalorixás.' },
          3: { misconception: 'Você confundiu o pioneiro da aviação brasileira com a história do samba.', guidanceTip: 'Santos Dumont construiu dirigíveis em Paris; Heitor dos Prazeres pintou a cultura negra do Rio.', conceptReview: 'A Pequena África é o coração da identidade cultural carioca.' }
        },
        habilidadeBNCC: 'EF09HI04'
      },
      {
        id: 'q-rio-4',
        pergunta: 'O Cemitério dos Pretos Novos, localizado na Rua Pedro Ernesto no bairro da Gamboa no Rio de Janeiro, é considerado:',
        opcoes: [
          'O maior sítio arqueológico de cemitério de africanos escravizados das Américas, onde eram enterrados os corpos daqueles que não sobreviviam à travessia do oceano.',
          'Um cemitério nobre onde repousam todos os imperadores do Brasil e suas rainhas.',
          'Uma estação de metrô moderna desativada nos anos 1990.',
          'Um teatro imperial construído para óperas italianas.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Descoberto casualmente em 1996 durante a reforma de uma residência, o sítio guarda fragmentos de ossos de mais de 30 mil jovens e crianças escravizados jogados em valas comuns entre 1769 e 1830.',
        diagnosticoErros: {
          1: { misconception: 'Você confundiu sepultamentos de escravizados descartados com mausoléus da nobreza.', guidanceTip: 'A família imperial era sepultada no Convento de Santo Antônio e na Catedral de Petrópolis.', conceptReview: 'O Cemitério dos Pretos Novos é um local de dor, respeito e denúncia do horror do tráfico.' },
          2: { misconception: 'Você usou tecnologia de transporte urbano do final do século XX.', guidanceTip: 'É um sítio arqueológico sensível tombado pelo patrimônio histórico.', conceptReview: 'O Instituto de Pesquisa e Memória Pretos Novos (IPN) atua como museu e centro educativo.' },
          3: { misconception: 'Você confundiu um campo santo fúnebre com casas de espetáculo.', guidanceTip: 'Lá estão sepultados milhares de seres humanos escravizados que sequer receberam nomes em suas covas.', conceptReview: 'As escolas do Rioeduca visitam o local para reflexão sobre direitos humanos e antirracismo.' }
        },
        habilidadeBNCC: 'EF08HI14'
      },
      {
        id: 'q-rio-5',
        pergunta: 'Por que o Cais do Valongo foi soterrado e reformado em 1843, mudando temporariamente de nome para "Cais da Imperatriz"?',
        opcoes: [
          'Para apagar o passado incômodo do comércio de escravizados e receber com pompa a princesa napolitana Teresa Cristina Maria de Bourbon, que se casaria com Dom Pedro II.',
          'Porque uma tempestade de gelo congelou toda a Baía de Guanabara.',
          'Porque os próprios escravizados decidiram construir um castelo medieval de pedra maciça.',
          'Porque o prefeito mandou fechar o porto para transformar a baía em uma fazenda de algodão.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'A monarquia imperial queria esconder a vergonha do tráfico negreiro dos olhos da nobreza estrangeira, cobrindo as pedras irregulares do Valongo com cantaria nobre e estátuas de mármore.',
        diagnosticoErros: {
          1: { misconception: 'Você imaginou um fenômeno climático incompatível com o clima tropical do Rio.', guidanceTip: 'A reforma foi uma decisão política de embelezamento cortesão para o casamento real.', conceptReview: 'O apagamento da memória do Valongo foi uma tentativa de higienização histórica.' },
          2: { misconception: 'Você atribuiu a iniciativa aos escravizados submetidos ao cativeiro.', guidanceTip: 'A obra foi custeada pela Coroa Portuguesa/Brasileira com projetos de arquitetos oficiais.', conceptReview: 'As pedras antigas do Valongo ficaram soterradas por quase 170 anos.' },
          3: { misconception: 'Você imaginou a transformação marítima em lavoura.', guidanceTip: 'O porto continuou ativo para navios a vapor e barcos da alfândega.', conceptReview: 'Em 2011, as escavações do Porto Maravilha reencontraram o piso original do Valongo intacto.' }
        },
        habilidadeBNCC: 'EF08HI14'
      },
      {
        id: 'q-rio-6',
        pergunta: 'A "Pedra do Sal", no sopé do Morro da Conceição, recebeu esse nome histórico no século XIX porque:',
        opcoes: [
          'Era o ponto do cais onde os trabalhadores negros e estivadores escravizados e libertos descarregavam sacos de sal marinho vindos das salinas fluminenses.',
          'Era feita inteiramente de pedras de sal que se desmanchavam quando chovia.',
          'Foi comprada por uma fábrica de pipocas do século XVI.',
          'Era uma montanha de ouro branco protegida por soldados gregos.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Cravada na rocha, a escadaria da Pedra do Sal era o local de trabalho duro dos estivadores do porto que, ao final da jornada, reuniam-se ali para tocar chocalho, prato-e-faca e cantar samba.',
        diagnosticoErros: {
          1: { misconception: 'Você levou o nome ao sentido geológico literal impossível.', guidanceTip: 'A pedra é de gnaisse duro e resistente da geologia carioca.', conceptReview: 'O nome decorre do sal marinho que era ali ensacado e comercializado.' },
          2: { misconception: 'Você fez uma brincadeira gastronômica moderna anacrônica.', guidanceTip: 'O sal era um dos produtos comerciais mais vitais para conservar carnes (charque) no país.', conceptReview: 'Os trabalhadores do sal fundaram as primeiras sociedades de socorro mútuo negro.' },
          3: { misconception: 'Você confundiu sal marinho com ouro e Roma com o Rio de Janeiro.', guidanceTip: 'A Pedra do Sal é tombada pelo Instituto Estadual do Patrimônio Cultural (INEPAC).', conceptReview: 'Hoje é um dos maiores pontos de encontro do samba e da juventude carioca.' }
        },
        habilidadeBNCC: 'EF09HI04'
      },
      {
        id: 'q-rio-7',
        pergunta: 'Qual música histórica é considerada o primeiro samba gravado em disco no Brasil, registrada na Biblioteca Nacional do Rio de Janeiro em 1916 e nascida no terreiro de Tia Ciata?',
        opcoes: [
          '"Pelo Telefone", de autoria atribuída a Donga e Mauro de Almeida.',
          '"As Quatro Estações", de Vivaldi.',
          '"Aquarela do Brasil", de Ary Barroso.',
          '"O Hino Nacional Brasileiro", composto por Francisco Manuel da Silva.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'A gravação de "Pelo Telefone" pela gravadora Odeon em 1916 marcou a consagração do samba urbano carioca que nascia nos quintais da Praça Onze na Pequena África.',
        diagnosticoErros: {
          1: { misconception: 'Você escolheu um concerto de violinos do barroco italiano do século XVIII.', guidanceTip: 'A questão trata da história da música popular brasileira carioca.', conceptReview: 'Pelo Telefone é o marco zero da discografia do samba nacional.' },
          2: { misconception: 'Você cometeu um anacronismo de três décadas.', guidanceTip: 'Aquarela do Brasil é dos anos 1930 na Era Vargas.', conceptReview: 'Pelo Telefone retratava a Praça Onze e a relação ambígua entre o samba e a polícia.' },
          3: { misconception: 'Você confundiu o símbolo cívico nacional com o samba carioca.', guidanceTip: 'O Hino Nacional é uma marcha patriótica de 1831.', conceptReview: 'O samba nasceu como manifestação das comunidades negras periféricas do Rio.' }
        },
        habilidadeBNCC: 'EF09HI04'
      },
      {
        id: 'q-rio-8',
        pergunta: 'A repressão policial contra o samba e a capoeira no Rio de Janeiro no final do século XIX e início do século XX demonstrava que a recém-criada República:',
        opcoes: [
          'Adotava uma política de controle social e criminalização das práticas culturais e corpos das pessoas negras e pobres da cidade.',
          'Adorava o samba e premiava todos os capoeiristas com pensões vitalícias em dinheiro.',
          'Considerava a capoeira como a única religião oficial obrigatória do Estado.',
          'Obrigava todos os generais do exército a jogarem capoeira todas as manhãs.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'O Código Penal Republicano de 1890 tinha artigos específicos criminalizando a vadiagem e a capoeiragem, usados pela polícia para prender negros sem trabalho formal no Centro do Rio.',
        diagnosticoErros: {
          1: { misconception: 'Você imaginou apoio governamental que nunca existiu na época.', guidanceTip: 'A polícia prendia sambistas e apreendia pandeiros e violões sob acusação de desordem.', conceptReview: 'O samba teve que resistir à perseguição policial até ser aceito como símbolo nacional.' },
          2: { misconception: 'Você confundiu uma manifestação corporal e de luta com religião estatal.', guidanceTip: 'A República proclamada em 1889 separou a Igreja do Estado (Estado Laico).', conceptReview: 'A capoeira foi perseguida pela elite como ameaça à ordem pública.' },
          3: { misconception: 'Você inverteu a relação: o exército reprimia os capoeiristas.', guidanceTip: 'Muitos capoeiristas foram desterrados e enviados presos para Fernando de Noronha.', conceptReview: 'A capoeira e o samba sobreviveram graças à resistência heroica dos mestres populares.' }
        },
        habilidadeBNCC: 'EF09HI04'
      },
      {
        id: 'q-rio-9',
        pergunta: 'Nas escavações arqueológicas do Cais do Valongo em 2011, que tipo de objetos foram resgatados que hoje ajudam a contar a história íntima da diáspora africana no Rio?',
        opcoes: [
          'Amuletos de proteção espiritual, búzios de adivinhação, contas de colares de vidro azul e cachimbos de barro africanos.',
          'Motores de combustão interna de automóveis franceses.',
          'Armaduras de aço inoxidável de cavaleiros do rei Artur.',
          'Restos de aviões militares supersônicos da Guerra Fria.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Esses objetos íntimos caíram na água ou foram jogados pelos africanos ao pisarem na praia do Valongo como forma de oferenda, prece ou ligação espiritual com seus orixás e ancestrais.',
        diagnosticoErros: {
          1: { misconception: 'Você usou peças de mecânica industrial moderna.', guidanceTip: 'O Valongo funcionou entre 1779 e 1831, em plena era colonial e imperial.', conceptReview: 'Os artefatos mostram a humanidade, espiritualidade e identidade dos escravizados.' },
          2: { misconception: 'Você confundiu o litoral brasileiro com lendas medievais britânicas.', guidanceTip: 'Os achados são peças rituais e de vestimenta das etnias bantas e iorubás.', conceptReview: 'A arqueologia do Valongo resgata a voz dos oprimidos pelo tráfico.' },
          3: { misconception: 'Você cometeu um anacronismo tecnológico de aviação militar.', guidanceTip: 'São milhares de peças pequenas e delicadas expostas hoje em museus cariocas.', conceptReview: 'O sítio do Valongo é um laboratório aberto de arqueologia histórica afro-brasileira.' }
        },
        habilidadeBNCC: 'EF08HI14'
      },
      {
        id: 'q-rio-10',
        pergunta: 'Por que o estudo da "Pequena África" e do Cais do Valongo é considerado estruturante para a educação antirracista nas escolas municipais do Rioeduca?',
        opcoes: [
          'Porque reconhece a centralidade da população negra na construção material, cultural e imaterial da cidade do Rio de Janeiro, promovendo a justiça histórica e a valorização da diversidade.',
          'Porque defende que o Rio de Janeiro não possui nenhuma herança africana.',
          'Porque recomenda que os monumentos históricos sejam demolidos para abrir estacionamentos.',
          'Porque ensina que a escravidão foi um benefício para os povos que vieram para o Brasil.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Estudar o Valongo e a Pequena África permite aos alunos compreender que o Rio é uma cidade forjada pela matriz africana, ensinando o respeito mútuo, o combate ao racismo e o orgulho das raízes.',
        diagnosticoErros: {
          1: { misconception: 'Você negou a evidência mais profunda da identidade carioca.', guidanceTip: 'O Rio tem a maior herança urbana afrodescendente de todo o continente americano.', conceptReview: 'A valorização das raízes africanas é uma diretriz obrigatória da SME-Rio.' },
          2: { misconception: 'Você propôs o apagamento do patrimônio que a UNESCO protegeu.', guidanceTip: 'O patrimônio mundial do Valongo deve ser cuidado e ensinado às próximas gerações.', conceptReview: 'O Circuito da Herança Africana é um patrimônio vivo e protegido por lei.' },
          3: { misconception: 'Você repetiu uma falácia racista colonial ultrapassada.', guidanceTip: 'A escravidão foi um crime de lesa-humanidade combatido por séculos de resistência negra.', conceptReview: 'A educação antirracista promove a emancipação, a igualdade e a dignidade de todos os estudantes.' }
        },
        habilidadeBNCC: 'EF09HI04'
      }
    ]
  }
];
