import { Topic } from '../types/history';

export const GRADE_7_TOPICS: Topic[] = [
  // ==========================================
  // 7º ANO - TÓPICO 1: REINOS AFRICANOS & HERANÇA (10 QUESTÕES)
  // ==========================================
  {
    id: '7-reinos-africanos',
    grade: '7',
    gradeLabel: '7º Ano',
    period: 'Mundo Moderno & Expansão',
    title: 'Reinos e Impérios Africanos: Mali, Congo e Iorubás',
    subtitle: 'A riqueza civilizatória da África antes da colonização e sua matriz fundamental no Rio',
    tempoLeituraMin: 5,
    tags: ['História da África', 'Mansa Musa', 'Reino do Congo', 'Iorubás', 'Lei 10.639'],
    summary: {
      introducao: [
        'A África é um continente vasto, berço da humanidade, marcado por uma multiplicidade de línguas, religiões e impérios altamente desenvolvidos muito antes da chegada dos europeus.',
        'O Império do Mali destacou-se pelo controle das rotas comerciais transaarianas de ouro e sal. Seu imperador mais famoso, Mansa Musa, realizou no século XIV uma lendária peregrinação a Meca e fundou centros universitários em Tombuctu.',
        'Nas regiões centro-ocidentais da África, povos de línguas bantas fundaram reinos organizados como o Reino do Congo, com sofisticado domínio da metalurgia do ferro. Na África Ocidental, a civilização Iorubá notabilizou-se por suas esculturas em bronze e rica cosmologia.',
        'Milhões de africanos dessas regiões foram escravizados e trazidos à força para as Américas. Seus descendentes construíram a economia, a arquitetura, a música, a culinária e a cultura do Brasil e, muito especialmente, do Rio de Janeiro.'
      ],
      pontosChave: [
        'Império do Mali: Grande potência econômica e intelectual nos séculos XIII a XV, com a famosa cidade universitária de Tombuctu.',
        'Mansa Musa: Considerado uma das pessoas mais ricas de toda a história humana graças ao comércio de ouro.',
        'Reino do Congo & Povos Bantos: Mestres da ferraria e agricultura, forneceram a maior parte dos escravizados que desembarcaram no Rio de Janeiro.',
        'Povos Iorubás: Matriz de saberes religiosos, urbanos e artísticos fundamentais no Candomblé e na cultura carioca.'
      ],
      conexaoRio: 'A maioria dos africanos escravizados que chegaram pelo Cais do Valongo no Rio de Janeiro pertencia aos povos bantos (Angola, Congo, Moçambique), deixando palavras no nosso vocabulário como caçula, samba, moleque, fubá e dengo!',
      linhaTempo: [
        { ano: '1235', evento: 'Sundiata Keita funda o Império do Mali na África Ocidental.' },
        { ano: '1324', evento: 'Mansa Musa realiza sua grandiosa peregrinação a Meca, distribuindo tanto ouro que abalou a economia do Mediterrâneo.' },
        { ano: '1482', evento: 'Primeiros contatos entre navegadores portugueses e o Manicongo (rei do Congo).' },
        { ano: '2003', evento: 'Promulgação da Lei Federal 10.639 no Brasil, tornando obrigatório o ensino de História da África nas escolas.' }
      ],
      paraFicarLigado: 'Desconstrua o estereótipo: a África antes da colonização não era uma terra de selvas isoladas e sem história, mas sim um continente de reinos cosmopolitas, impérios letrados e rotas comerciais globais.'
    },
    flashcards: [
      { id: 'fc-7-af1', termo: 'Mansa Musa', significado: 'Imperador do Mali no século XIV, patrono da Universidade de Sankoré em Tombuctu e símbolo da riqueza africana.' },
      { id: 'fc-7-af2', termo: 'Povos Bantos', significado: 'Família linguística e cultural de centenas de etnias do sul e centro da África, matriz do vocabulário e do samba carioca.' },
      { id: 'fc-7-af3', termo: 'Tombuctu', significado: 'Grande metrópole intelectual no Império do Mali que atraía sábios, teólogos e astrônomos de todo o mundo islâmico.' }
    ],
    questions: [
      {
        id: 'q-7-1',
        pergunta: 'No currículo do Rioeduca, o estudo dos povos bantos (oriundos de regiões como os atuais Congo e Angola) é essencial porque:',
        opcoes: [
          'Eles formaram a maioria da população africana trazida para o Rio de Janeiro, legando profunda influência na língua (palavras como moleque e samba), na música e na identidade da cidade.',
          'Eles nunca tiveram qualquer contato com o Brasil nem deixaram marcas na cultura carioca.',
          'Eles vieram ao Brasil apenas como imperadores convidados por Dom Pedro II para governar a cidade do Rio de Janeiro.',
          'Eles não conheciam a metalurgia nem a agricultura e apenas viviam no polo norte.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Os povos bantos foram a matriz africana mais numerosa a desembarcar no porto do Rio de Janeiro, influenciando diretamente o linguajar carioca, os ritmos musicais (jongo, maxixe, samba) e as técnicas de trabalho.',
        diagnosticoErros: {
          1: { misconception: 'Você ignorou a presença da cultura banta no cotidiano carioca.', guidanceTip: 'Pense em palavras que usamos todo dia no Rio: samba, cafofo, caçula, moleque. De onde vieram?', conceptReview: 'A herança linguística e cultural banta é um dos pilares da identidade do Rio.' },
          2: { misconception: 'Você confundiu o cativeiro colonial com um convite imperial.', guidanceTip: 'Relembre o tráfico transatlântico de escravizados: seres humanos sequestrados.', conceptReview: 'Os africanos foram submetidos à escravidão forçada, resistindo bravamente e recriando sua cultura.' },
          3: { misconception: 'Você atribuiu características geográficas e tecnológicas incorretas à África.', guidanceTip: 'Os bantos eram mundialmente famosos por forjar ferro e cultivar a terra.', conceptReview: 'Os reinos bantos dominavam a metalurgia e a agricultura de forma avançada.' }
        },
        habilidadeBNCC: 'EF07HI03'
      },
      {
        id: 'q-7-1-2',
        pergunta: 'O imperador Mansa Musa, governante do Império do Mali no século XIV, tornou-se célebre mundialmente por:',
        opcoes: [
          'Sua imensa riqueza em ouro e sua peregrinação a Meca em 1324, na qual distribuiu fortunas e financiou universidades em Tombuctu.',
          'Ter sido o inventor do motor a vapor na Inglaterra do século XVIII.',
          'Ter liderado a invasão francesa à Baía de Guanabara em 1555.',
          'Ter assinado a Lei Áurea no Paço Imperial em 1888.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Mansa Musa governou o próspero Império do Mali, que controlava as maiores jazidas de ouro do mundo conhecido, atraindo sábios e matemáticos para Tombuctu.',
        diagnosticoErros: {
          1: { misconception: 'Você confundiu a África medieval com a Revolução Industrial inglesa.', guidanceTip: 'Mansa Musa viveu nos anos 1300 na África Ocidental e promoveu a cultura islâmica africana.', conceptReview: 'O Império do Mali destacou-se pelo comércio de ouro e sal no Saara.' },
          2: { misconception: 'Você misturou a história africana com a fundação colonial do Rio de Janeiro.', guidanceTip: 'Quem invadiu a Baía de Guanabara foi o francês Nicolas Villegagnon.', conceptReview: 'Mansa Musa governou no continente africano séculos antes da invasão francesa.' },
          3: { misconception: 'Você confundiu o imperador africano medieval com a Princesa Isabel no Brasil.', guidanceTip: 'A Lei Áurea foi assinada no Rio de Janeiro quase seis séculos depois.', conceptReview: 'Mansa Musa foi um monarca soberano de um império africano livre e riquíssimo.' }
        },
        habilidadeBNCC: 'EF07HI03'
      },
      {
        id: 'q-7-1-3',
        pergunta: 'A cidade de Tombuctu, no Império do Mali, era um importante polo internacional no século XIV devido:',
        opcoes: [
          'Às suas prestigiadas mesquitas e à Universidade de Sankoré, que reunia manuscritos de astronomia, matemática, direito e medicina.',
          'À construção da maior fábrica de telefones celulares e computadores do mundo.',
          'Ao fato de não permitir a entrada de qualquer livro ou sábio em suas muralhas.',
          'A ser uma praia onde navegadores vikings passavam as férias de verão.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Tombuctu era um centro intelectual de destaque no mundo islâmico, com bibliotecas que continham milhares de manuscritos científicos e literários preservados até hoje.',
        diagnosticoErros: {
          1: { misconception: 'Você usou tecnologia eletrônica recente para uma cidade medieval.', guidanceTip: 'Tombuctu se notabilizou pela produção de manuscritos em pergaminho e papel.', conceptReview: 'A ciência e filosofia prosperaram em Tombuctu no período pré-colonial.' },
          2: { misconception: 'Você pensou que Tombuctu rejeitava o conhecimento.', guidanceTip: 'Mansa Musa financiava a compra de livros de todas as partes do Mediterrâneo.', conceptReview: 'Tombuctu era uma capital letrada e cosmopolita.' },
          3: { misconception: 'Você deslocou povos nórdicos para o coração do deserto africano.', guidanceTip: 'Tombuctu fica às margens do Rio Níger, no Mali (África Ocidental).', conceptReview: 'Era uma cidade caravanista ligada ao comércio transaariano.' }
        },
        habilidadeBNCC: 'EF07HI03'
      },
      {
        id: 'q-7-1-4',
        pergunta: 'Antes de ser submetido à colonização, o Reino do Congo (séculos XIV a XVII) possuía como características políticas e sociais:',
        opcoes: [
          'Um Estado centralizado liderado pelo Manicongo, com províncias administradas por governadores e uma capital urbana chamada Mbanza Kongo.',
          'Apenas pequenos grupos familiares sem nenhuma autoridade ou aldeia fixa.',
          'Uma república moderna com voto secreto eletrônico a cada quatro anos.',
          'Um domínio militar de piratas ingleses que proibiam a agricultura.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'O Reino do Congo era uma monarquia estruturada com cobrança de tributos, corpo diplomático, exército permanente e alianças políticas complexas.',
        diagnosticoErros: {
          1: { misconception: 'Você reproduziu o preconceito de que a África pré-colonial não tinha governos complexos.', guidanceTip: 'O Manicongo comandava um vasto território com centenas de milhares de súditos.', conceptReview: 'O Congo era um Estado monárquico altamente articulado.' },
          2: { misconception: 'Você projetou o modelo político atual para o século XV africano.', guidanceTip: 'O Congo era uma monarquia tradicional com títulos aristocráticos.', conceptReview: 'O governo baseava-se em linhagens nobres e conselhos de anciãos.' },
          3: { misconception: 'Você confundiu o período pré-colonial com pirataria britânica.', guidanceTip: 'Os reis do Congo chegaram a enviar embaixadores a Roma e a Lisboa.', conceptReview: 'O Reino do Congo mantinha relações diplomáticas de igual para igual inicialmente.' }
        },
        habilidadeBNCC: 'EF07HI03'
      },
      {
        id: 'q-7-1-5',
        pergunta: 'Qual o significado da Lei Federal 10.639/2003, estudada com ênfase nas escolas da rede municipal do Rioeduca?',
        opcoes: [
          'Tornou obrigatório o ensino da História e Cultura Afro-Brasileira e Africana em todas as escolas do país.',
          'Proibiu que as escolas falem sobre a história de qualquer povo afrodescendente.',
          'Decretou que os alunos devem aprender apenas a história dos reis da França e Inglaterra.',
          'Determinou a expulsão de professores de história das salas de aula cariocas.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'A Lei 10.639/2003 é uma conquista histórica dos movimentos negros para reparar o apagamento curricular e combater o racismo estrutural nas salas de aula.',
        diagnosticoErros: {
          1: { misconception: 'Você interpretou a lei como uma proibição quando ela é uma conquista afirmativa.', guidanceTip: 'A lei visa valorizar o protagonismo negro e as raízes africanas na formação do Brasil.', conceptReview: 'A Lei 10.639 estabelece a obrigatoriedade dos conteúdos afro-brasileiros.' },
          2: { misconception: 'Você descreveu o currículo eurocêntrico que a lei veio justamente combater.', guidanceTip: 'Antes dessa lei, os livros falavam quase unicamente da Europa.', conceptReview: 'A lei garante a pluralidade cultural e o resgate da memória afrodescendente.' },
          3: { misconception: 'Você imaginou uma punição a educadores.', guidanceTip: 'A lei capacita e orienta os professores a trabalhar a diversidade étnico-racial.', conceptReview: 'O Rioeduca promove projetos permanentes sobre relações étnico-raciais.' }
        },
        habilidadeBNCC: 'EF07HI03'
      },
      {
        id: 'q-7-1-6',
        pergunta: 'A civilização Iorubá (da qual descendem povos de cidades como Ifé e Oió, no atual sudoeste da Nigéria) destacou-se na história da arte mundial por:',
        opcoes: [
          'Suas primorosas esculturas realistas em bronze, latão e terracota, que desafiaram as teorias coloniais europeias sobre a arte africana.',
          'Suas catedrais de gelo no deserto do Saara.',
          'Ter inventado os automóveis elétricos e os trens-bala no século XII.',
          'Recusar qualquer forma de arte ou manifestação religiosa.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'As cabeças de bronze de Ifé (séculos XII a XIV) demonstram domínio sofisticado da técnica da cera perdida, com refinamento estético equiparável ao Renascimento europeu.',
        diagnosticoErros: {
          1: { misconception: 'Você imaginou construções incompatíveis com o clima africano.', guidanceTip: 'Os iorubás trabalhavam com metalurgia avançada, cerâmica e madeira.', conceptReview: 'A metalurgia de Ifé e Oió é uma das glórias artísticas da humanidade.' },
          2: { misconception: 'Você cometeu um anacronismo tecnológico de alta velocidade.', guidanceTip: 'A arte iorubá é expressa em estátuas, tecidos bordados e ricos orixás.', conceptReview: 'A cultura iorubá é a base religiosa e estética do candomblé Ketu no Brasil.' },
          3: { misconception: 'Você pensou que os iorubás não produziam arte.', guidanceTip: 'Os museus do mundo inteiro expõem as maravilhas da metalurgia de Ifé e Benim.', conceptReview: 'A cosmologia e as artes plásticas iorubás são celebradas internacionalmente.' }
        },
        habilidadeBNCC: 'EF07HI03'
      },
      {
        id: 'q-7-1-7',
        pergunta: 'No vocabulário carioca atual, palavras como "marimbondo", "cachaça", "quilombo", "quitanda" e "ginga" têm origem em quais línguas?',
        opcoes: [
          'Nas línguas bantas (como o quimbundo e o quicongo) faladas pelos povos de Angola e Congo.',
          'No alemão arcaico falado pelos vikings na Dinamarca.',
          'No japonês moderno dos samurais de Tóquio.',
          'No latim falado exclusivamente pelos imperadores romanos.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'O português falado no Brasil, especialmente no Rio de Janeiro (o "pretuguês", termo criado por Lélia Gonzalez), é profundamente encharcado pelas línguas bantas africanas.',
        diagnosticoErros: {
          1: { misconception: 'Você confundiu línguas africanas com idiomas germânicos nórdicos.', guidanceTip: 'Quitandas e quitutes eram termos usados pelas mulheres escravizadas que vendiam comida no Rio.', conceptReview: 'Quimbundo e quicongo enriqueceram intensamente o léxico brasileiro.' },
          2: { misconception: 'Você confundiu a matriz afro-brasileira com a língua japonesa.', guidanceTip: 'Palavras ligadas à alimentação, música e afeto no Rio vieram da África Centro-Ocidental.', conceptReview: 'A presença banta no Rio colonial e imperial foi avassaladora.' },
          3: { misconception: 'Você atribuiu palavras populares cariocas ao latim de Roma.', guidanceTip: 'Embora o português venha do latim, o vocabulário popular do Rio incorporou centenas de termos bantos.', conceptReview: 'Lélia Gonzalez ensina que o linguajar carioca é fruto dessa herança banta.' }
        },
        habilidadeBNCC: 'EF07HI03'
      },
      {
        id: 'q-7-1-8',
        pergunta: 'A tradição dos griôs (ou djélis) nas sociedades da África Ocidental é de fundamental importância porque eles:',
        opcoes: [
          'São os guardiões da memória e da história oral, transmitindo genealogias, tratados de paz e ensinamentos através da fala e de instrumentos musicais como a kora.',
          'Eram espiões europeus que vendiam segredos africanos para a França.',
          'Proibiam que os jovens aprendessem as tradições dos seus antepassados.',
          'Eram máquinas automáticas construídas com pedras e engrenagens de relógio.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Nas sociedades africanas de tradição oral, os griôs são como "bibliotecas vivas": quando um griô falece, costuma-se dizer que uma biblioteca inteira se queima.',
        diagnosticoErros: {
          1: { misconception: 'Você confundiu sábios tradicionais africanos com agentes estrangeiros.', guidanceTip: 'Os griôs ocupavam lugar de altíssima honra ao lado dos reis africanos.', conceptReview: 'Eles eram conselheiros, diplomatas e memorialistas respeitados.' },
          2: { misconception: 'Você inverteu a função dos griôs.', guidanceTip: 'A missão sagrada do griô é justamente ensinar as novas gerações pela palavra cantada.', conceptReview: 'Eles garantem a continuidade dos saberes e da identidade comunitária.' },
          3: { misconception: 'Você transformou mestres humanos da oralidade em robôs mecânicos.', guidanceTip: 'Griôs são seres humanos de carne e osso dotados de prodigiosa memória poética.', conceptReview: 'A oralidade africana é uma sofisticada arte humana.' }
        },
        habilidadeBNCC: 'EF07HI03'
      },
      {
        id: 'q-7-1-9',
        pergunta: 'A principal rota comercial que ligava o Império do Mali ao Norte da África e ao Oriente Médio, através da qual circulavam ouro, sal e livros, era chamada de:',
        opcoes: [
          'Rota Transaariana (através do deserto do Saara).',
          'Trânsito do Canal da Mancha entre França e Inglaterra.',
          'Estrada de Ferro Central do Brasil no Rio de Janeiro.',
          'Rota polar da Antártida congelada.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'As caravanas de camelos cruzavam o deserto do Saara parando em oásis estratégicos, unindo o Sahel africano aos portos do Mar Mediterrâneo.',
        diagnosticoErros: {
          1: { misconception: 'Você confundiu o Saara com mares europeus.', guidanceTip: 'O Saara é o maior deserto quente do planeta, localizado no norte da África.', conceptReview: 'O comércio transaariano foi o motor econômico do Mali e de Songai.' },
          2: { misconception: 'Você cometeu um anacronismo com a ferrovia do Rio de Janeiro do século XIX.', guidanceTip: 'A ferrovia Central do Brasil foi construída no Império brasileiro séculos depois.', conceptReview: 'O comércio do Mali utilizava cáfilas (caravanas) de dromedários.' },
          3: { misconception: 'Você deslocou a rota africana para o polo sul gelado.', guidanceTip: 'O comércio do ouro do Mali operava em clima árido e desértico tropical.', conceptReview: 'As caravanas transaarianas cruzavam o Saara em direção ao Egito e Marrocos.' }
        },
        habilidadeBNCC: 'EF07HI03'
      },
      {
        id: 'q-7-1-10',
        pergunta: 'Como o currículo de História do Rioeduca orienta os estudantes a compreender a escravização dos povos africanos durante o período moderno?',
        opcoes: [
          'Como uma violência imposta pelo colonialismo mercantil europeu que gerou lucro aos traficantes, mas que foi respondida com permanente resistência, recriação cultural e luta por liberdade.',
          'Como um processo pacífico em que os africanos concordaram alegremente em trabalhar sem receber salário.',
          'Como algo que nunca existiu e foi inventado recentemente por emissoras de televisão.',
          'Como um castigo divino justo contra quem não sabia falar português.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'A escravidão moderna foi um crime contra a humanidade motivado pelo lucro comercial, mas os escravizados nunca foram vítimas passivas: resistiram por meio de revoltas, quilombos e cultura.',
        diagnosticoErros: {
          1: { misconception: 'Você romantizou o horror do cativeiro.', guidanceTip: 'A escravidão era mantida pela violência do chicote, ferros e pelourinho.', conceptReview: 'O cativeiro foi combatido ferozmente pelos escravizados desde o momento do embarque.' },
          2: { misconception: 'Você adotou uma postura negacionista que desrespeita a história e as evidências.', guidanceTip: 'O Cais do Valongo e milhões de documentos comprovam a realidade da escravidão no Rio.', conceptReview: 'O estudo da escravidão é comprovado por farta documentação histórica internacional.' },
          3: { misconception: 'Você repetiu teorias racistas usadas pelos colonizadores para justificar a opressão.', guidanceTip: 'A escravidão foi um projeto econômico de enriquecimento das elites e da metrópole.', conceptReview: 'A dignidade e a humanidade dos povos africanos são inalienáveis.' }
        },
        habilidadeBNCC: 'EF07HI03'
      }
    ]
  },

  // ==========================================
  // 7º ANO - TÓPICO 2: FUNDAÇÃO DO RIO (10 QUESTÕES)
  // ==========================================
  {
    id: '7-fundacao-rio',
    grade: '7',
    gradeLabel: '7º Ano',
    period: 'Brasil Colônia',
    title: 'A Fundação do Rio de Janeiro e a Resistência Indígena (1565)',
    subtitle: 'Tupinambás, Temiminós, invasão francesa e a fundação por Estácio de Sá',
    tempoLeituraMin: 5,
    tags: ['Estácio de Sá', 'Tupinambá', 'Temiminó', 'Arariboia', 'França Antártica'],
    summary: {
      introducao: [
        'A Baía de Guanabara no século XVI era o lar de milhares de indígenas, principalmente do tronco Tupi, divididos em nações como os Tupinambás (aliados dos franceses) e os Temiminós (aliados dos portugueses).',
        'Em 1555, colonos franceses liderados por Nicolas Durand de Villegagnon desembarcaram na Baía e fundaram a colônia da "França Antártica" na ilha de Serigipe (atual Ilha de Villegagnon), estabelecendo forte aliança comercial e militar com os Tupinambás na chamada Confederação dos Tamoios.',
        'Preocupada em expulsar os franceses e garantir a posse das terras, a Coroa Portuguesa enviou Estácio de Sá. Em 1º de março de 1565, entre os morros Cara de Cão e Pão de Açúcar, Estácio de Sá fundou a cidade de São Sebastião do Rio de Janeiro.',
        'Com o apoio decisivo do chefe indígena temiminó Arariboia, os portugueses venceram a Batalha de Uruçumirim (na região do atual Outeiro da Glória e Praia do Flamengo) em 1567, expulsando os franceses. Como recompensa, Arariboia recebeu as terras do outro lado da baía, fundando a vila de São Lourenço dos Índios (atual cidade de Niterói).'
      ],
      pontosChave: [
        'Confederação dos Tamoios: União das aldeias Tupinambás em resistência à escravização indígena imposta pelos colonizadores portugueses.',
        'França Antártica: Tentativa francesa de estabelecer uma colônia protestante e mercantil na Baía de Guanabara.',
        '1º de Março de 1565: Data oficial da fundação da cidade de São Sebastião do Rio de Janeiro por Estácio de Sá.',
        'Arariboia: Líder indígena temiminó crucial para a vitória portuguesa, homenageado com monumento em Niterói.'
      ],
      conexaoRio: 'A transferência da cidade do Morro Cara de Cão para o Morro do Castelo (demolido em 1922) moldou o Centro Histórico. Os restos mortais de Estácio de Sá repousam na Igreja dos Capuchinhos na Tijuca!',
      linhaTempo: [
        { ano: '1555', evento: 'Villegagnon funda a França Antártica na Baía de Guanabara.' },
        { ano: '1565', evento: 'Estácio de Sá funda São Sebastião do Rio de Janeiro em 1º de março.' },
        { ano: '1567', evento: 'Batalha de Uruçumirim: derrota dos franceses e Tupinambás; morte de Estácio de Sá por ferimento de flecha.' },
        { ano: '1573', evento: 'Arariboia funda a aldeia de São Lourenço dos Índios (atual Niterói).' }
      ],
      paraFicarLigado: 'O nome "Tamoio" vem de "Tamuya" em tupi, significando "os avós" ou "os mais velhos", pois os chefes das aldeias mais antigas se uniram em defesa de sua terra.'
    },
    flashcards: [
      { id: 'fc-7-rio1', termo: '1º de Março de 1565', significado: 'Dia da fundação da cidade de São Sebastião do Rio de Janeiro pelo capitão Estácio de Sá.' },
      { id: 'fc-7-rio2', termo: 'Arariboia', significado: 'Cacique temiminó que liderou seus guerreiros em apoio aos portugueses na expulsão dos franceses.' },
      { id: 'fc-7-rio3', termo: 'Confederação dos Tamoios', significado: 'Aliança militar entre tribos indígenas Tupinambás para combater a escravização e o avanço português.' }
    ],
    questions: [
      {
        id: 'q-7-2',
        pergunta: 'A fundação da cidade de São Sebastião do Rio de Janeiro em 1565 esteve diretamente ligada a qual contexto geopolítico do século XVI?',
        opcoes: [
          'À necessidade militar portuguesa de expulsar os colonos franceses da "França Antártica" e garantir a posse estratégica da Baía de Guanabara.',
          'À tentativa dos holandeses de plantar café em Copacabana durante a Segunda Guerra Mundial.',
          'A uma ordem direta do imperador Dom Pedro II para criar as escolas de samba.',
          'À decisão dos indígenas de doar pacificamente todas as terras cariocas aos nobres de Lisboa.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Estácio de Sá foi enviado pela Coroa com tropas de Salvador para criar uma praça-forte militar e expulsar os franceses comandados por Villegagnon.',
        diagnosticoErros: {
          1: { misconception: 'Você misturou invasões holandesas do século XVII com o século XX no Rio.', guidanceTip: 'Os holandeses invadiram o Nordeste; no Rio do século XVI os colonizadores rivais eram franceses.', conceptReview: 'A disputa em 1555–1567 foi entre portugueses e franceses calvinistas/católicos.' },
          2: { misconception: 'Você cometeu um anacronismo de três séculos com o imperador Dom Pedro II.', guidanceTip: 'Em 1565 o Brasil ainda era uma colônia de capitanias; Dom Pedro II governou no século XIX.', conceptReview: 'O nome da cidade homenageou o jovem rei de Portugal, D. Sebastião.' },
          3: { misconception: 'Você ignorou os intensos conflitos e guerras com os povos originários.', guidanceTip: 'A Confederação dos Tamoios travou combates de vida ou morte em defesa de sua liberdade.', conceptReview: 'A colonização se deu por meio de guerras e alianças bélicas.' }
        },
        habilidadeBNCC: 'EF07HI11'
      },
      {
        id: 'q-7-2-2',
        pergunta: 'Em que data e em qual local geográfico da cidade do Rio de Janeiro Estácio de Sá estabeleceu o arraial de fundação da cidade em 1565?',
        opcoes: [
          'Em 1º de março de 1565, entre o Morro Cara de Cão e o Pão de Açúcar (região da atual Urca).',
          'Em 25 de dezembro de 1900, em cima do Morro do Corcovado onde fica o Cristo Redentor.',
          'Em 7 de setembro de 1822, na praia de Ipanema.',
          'Em 15 de novembro de 1889, na Avenida Presidente Vargas.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'O local entre o Morro Cara de Cão e o Pão de Açúcar foi escolhido por ser uma enseada protegida na entrada da Baía de Guanabara, facilitando a defesa contra navios inimigos.',
        diagnosticoErros: {
          1: { misconception: 'Você confundiu o século XVI com a virada do século XX e a construção do Cristo (1931).', guidanceTip: 'O Cristo Redentor foi erguido no século XX; o arraial de Estácio de Sá ficava na beira do mar.', conceptReview: 'A fundação da cidade ocorreu em 1º de março de 1565 na Urca.' },
          2: { misconception: 'Você confundiu a fundação do Rio com o Dia da Independência do Brasil (1822).', guidanceTip: 'A independência foi proclamada por Dom Pedro I em São Paulo séculos mais tarde.', conceptReview: 'O 1º de março é o aniversário oficial da cidade do Rio de Janeiro.' },
          3: { misconception: 'Você misturou a fundação da cidade com a Proclamação da República de 1889.', guidanceTip: 'A Av. Presidente Vargas só foi aberta nos anos 1940 no governo Vargas.', conceptReview: 'A primeira fortificação carioca foi a Fortaleza de São João na Urca.' }
        },
        habilidadeBNCC: 'EF07HI11'
      },
      {
        id: 'q-7-2-3',
        pergunta: 'A Confederação dos Tamoios (1554–1567) foi uma união de aldeias indígenas liderada principalmente pelos:',
        opcoes: [
          'Tupinambás, que se aliaram aos franceses para lutar contra a escravização e invasão de suas terras pelos portugueses.',
          'Incas do Peru, que queriam construir templos nas praias de Copacabana.',
          'Soldados da marinha britânica que queriam vender carvão para os bondes.',
          'Guerrilheiros vikings que queriam plantar trigo na Floresta da Tijuca.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Grandes líderes indígenas como Aimberê, Cunhambebe e Pindobuçu uniram as aldeias do litoral fluminense e paulista em uma confederação formidável contra a dominação portuguesa.',
        diagnosticoErros: {
          1: { misconception: 'Você deslocou a civilização andina incaica para a costa brasileira.', guidanceTip: 'Os Incas viviam nos Andes (Peru/Bolívia); no Rio de Janeiro habitavam povos de língua Tupi.', conceptReview: 'Os Tupinambás dominavam toda a região da Baía de Guanabara e Cabo Frio.' },
          2: { misconception: 'Você usou tecnologia de bondes do século XIX no século XVI.', guidanceTip: 'A Confederação dos Tamoios foi uma revolta indígena contra o trabalho escravo em engenhos.', conceptReview: 'Os Tamoios foram a mais poderosa aliança indígena de resistência no Sudeste.' },
          3: { misconception: 'Você confundiu povos nórdicos com os povos originários do Rio de Janeiro.', guidanceTip: 'Tamoio é uma palavra tupi que significa "os avós/ancestrais".', conceptReview: 'A aliança foi celebrada entre caciques de várias aldeias tupinambás.' }
        },
        habilidadeBNCC: 'EF07HI11'
      },
      {
        id: 'q-7-2-4',
        pergunta: 'O cacique Arariboia e seus guerreiros Temiminós desempenharam papel decisivo na vitória portuguesa porque:',
        opcoes: [
          'Eram profundos conhecedores das matas e águas da Baía de Guanabara e lideraram o ataque aos redutos tupinambás e franceses na Batalha de Uruçumirim.',
          'Eles entregaram navios de guerra de propulsão nuclear aos franceses.',
          'Eles fugiram da batalha e se esconderam no polo norte.',
          'Eles eram piratas holandeses disfarçados de indígenas.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Sem a aliança militar e a tática de guerra de Arariboia e seus bravos guerreiros Temiminós, as forças portuguesas de Estácio e Mem de Sá dificilmente teriam vencido os Tamoios.',
        diagnosticoErros: {
          1: { misconception: 'Você cometeu um anacronismo tecnológico de propulsão atômica.', guidanceTip: 'A batalha foi travada em canoas a remo e arcabuzes de pólvora negra.', conceptReview: 'Arariboia era um líder guerreiro indígena de extraordinária habilidade tática.' },
          2: { misconception: 'Você subestimou a bravura comprovada de Arariboia.', guidanceTip: 'Arariboia entrou na história pelo seu heroísmo no combate direto na praia do Flamengo.', conceptReview: 'Sua coragem foi reconhecida pela própria Coroa Portuguesa.' },
          3: { misconception: 'Você confundiu etnias indígenas legítimas com pirataria europeia.', guidanceTip: 'Os Temiminós habitavam a Ilha do Governador antes de serem expulsos pelos Tupinambás.', conceptReview: 'A rivalidade histórica entre Tupinambás e Temiminós foi explorada pelos colonizadores.' }
        },
        habilidadeBNCC: 'EF07HI11'
      },
      {
        id: 'q-7-2-5',
        pergunta: 'Como recompensa pelo apoio militar na expulsão dos franceses em 1567, o que Arariboia recebeu do governador Mem de Sá?',
        opcoes: [
          'Terras do outro lado da Baía de Guanabara (Banda d’Além), onde fundou a vila de São Lourenço dos Índios, origem da atual cidade de Niterói.',
          'A posse definitiva da Torre Eiffel em Paris.',
          'Uma frota de trens a vapor para ligar o Rio a Brasília.',
          'O título de presidente dos Estados Unidos da América.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Arariboia foi agraciado com o batismo cristão (Martim Afonso de Sousa), o hábito da Ordem de Cristo e a sesmaria de São Lourenço, tornando-se o fundador de Niterói.',
        diagnosticoErros: {
          1: { misconception: 'Você misturou a França com a geografia da Guanabara.', guidanceTip: 'A recompensa foi a posse territorial de terras na baía para defender a entrada do Rio.', conceptReview: 'Niterói nasceu como aldeamento de defesa estratégica comandado por Arariboia.' },
          2: { misconception: 'Você cometeu um anacronismo de séculos com a capital Brasília (1960).', guidanceTip: 'No século XVI o interior do Brasil era sertão desconhecido dos europeus.', conceptReview: 'A doação de terras sesmarias foi o instrumento jurídico colonial português.' },
          3: { misconception: 'Você confundiu cargos políticos de outro país republicano.', guidanceTip: 'O Brasil era colônia governada pelo Governador-Geral nomeado pelo Rei de Portugal.', conceptReview: 'Arariboia tornou-se capitão-mor da aldeia de São Lourenço dos Índios.' }
        },
        habilidadeBNCC: 'EF07HI11'
      },
      {
        id: 'q-7-2-6',
        pergunta: 'A chamada "França Antártica" foi instalada em 1555 na Baía de Guanabara sob a liderança de:',
        opcoes: [
          'Nicolas Durand de Villegagnon.',
          'Napoleão Bonaparte.',
          'Luís XIV, o Rei Sol.',
          'General Charles de Gaulle.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Villegagnon obteve apoio da Coroa Francesa para criar uma colônia comercial e de refúgio religioso para católicos e calvinistas perseguidos nas guerras de religião da Europa.',
        diagnosticoErros: {
          1: { misconception: 'Você confundiu o século XVI com o início do século XIX de Napoleão.', guidanceTip: 'Napoleão invadiu Portugal em 1807, provocando a vinda da Família Real ao Rio.', conceptReview: 'Villegagnon liderou a expedição francesa em 1555 na Guanabara.' },
          2: { misconception: 'Você confundiu os monarcas franceses do absolutismo do século XVII.', guidanceTip: 'Luís XIV construiu o Palácio de Versalhes mais de um século depois.', conceptReview: 'A França Antártica contou com o apoio inicial do almirante francês Gaspar de Coligny.' },
          3: { misconception: 'Você usou uma personalidade francesa da Segunda Guerra Mundial (século XX).', guidanceTip: 'Villegagnon foi um cavaleiro da Ordem de Malta que construiu o Forte Coligny na ilha de Serigipe.', conceptReview: 'A Ilha de Villegagnon no Rio abriga hoje a Escola Naval.' }
        },
        habilidadeBNCC: 'EF07HI11'
      },
      {
        id: 'q-7-2-7',
        pergunta: 'Após a vitória contra os franceses em 1567 e a morte de Estácio de Sá, o novo governador Mem de Sá transferiu o núcleo da cidade para:',
        opcoes: [
          'O Morro do Castelo (antigo Morro de São Januário), um local mais alto, seguro e com água potável abundante no atual Centro.',
          'O Pico da Tijuca a mil metros de altitude.',
          'A praia de Copacabana para construir resorts para turistas.',
          'A Ilha de Marajó no estado do Pará.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'O arraial primitivo na Urca era vulnerável e apertado. O Morro do Castelo tornou-se a sede da Sé, dos colégios jesuítas e da administração carioca até ser demolido em 1922.',
        diagnosticoErros: {
          1: { misconception: 'Você escolheu o pico mais alto e inacessível da cidade.', guidanceTip: 'Cidades coloniais precisavam de acesso fácil ao porto e ao mar.', conceptReview: 'O Morro do Castelo ficava em frente ao mar, na região da atual Praça XV/Esplanada do Castelo.' },
          2: { misconception: 'Você pensou na ocupação litorânea de lazer moderna.', guidanceTip: 'Copacabana era um areal deserto e isolado até o início do século XX.', conceptReview: 'O coração do Rio colonial desenvolveu-se na região central da cidade.' },
          3: { misconception: 'Você confundiu o Rio de Janeiro com a foz do Rio Amazonas.', guidanceTip: 'A cidade continuou dentro da Baía de Guanabara, apenas mudando de colina.', conceptReview: 'A transferência para o Morro do Castelo consolidou o Centro Histórico do Rio.' }
        },
        habilidadeBNCC: 'EF07HI11'
      },
      {
        id: 'q-7-2-8',
        pergunta: 'O que ocorreu com o fundador do Rio de Janeiro, Estácio de Sá, durante as batalhas finais de expulsão dos franceses em 1567?',
        opcoes: [
          'Foi ferido no rosto por uma flecha envenenada dos guerreiros tupinambás durante a Batalha de Uruçumirim e faleceu cerca de um mês depois.',
          'Retornou a Portugal rico e viveu até os 105 anos em Lisboa.',
          'Tornou-se imperador de Roma e governou o Senado latino.',
          'Fugiu em um avião a hélice para a Inglaterra.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Estácio de Sá liderou bravamente suas tropas no ataque às fortificações tupinambás de Uruçumirim (na Glória/Flamengo), onde foi atingido por uma flecha no olho, vindo a falecer.',
        diagnosticoErros: {
          1: { misconception: 'Você imaginou um desfecho pacífico na velhice.', guidanceTip: 'Estácio de Sá morreu jovem, com cerca de 47 anos, no próprio Rio de Janeiro.', conceptReview: 'Seus ossos estão sepultados na Igreja dos Capuchinhos na Tijuca.' },
          2: { misconception: 'Você confundiu a capitania colonial do Rio com o Império Romano.', guidanceTip: 'Estácio de Sá era capitão-mor a serviço da monarquia de Portugal.', conceptReview: 'Ele deu a vida na consolidação da cidade de São Sebastião do Rio de Janeiro.' },
          3: { misconception: 'Você usou tecnologia aeronáutica do século XX.', guidanceTip: 'Navios a vela eram o único meio de transporte intercontinental na época.', conceptReview: 'A memória de Estácio de Sá é celebrada com estátuas e bairros no Rio.' }
        },
        habilidadeBNCC: 'EF07HI11'
      },
      {
        id: 'q-7-2-9',
        pergunta: 'A Batalha de Uruçumirim (janeiro de 1567) ocorreu aproximadamente em qual região da atual geografia carioca?',
        opcoes: [
          'Na região entre a Praia do Flamengo e o Outeiro da Glória.',
          'Nas dunas do deserto do Saara.',
          'No cume do Cristo Redentor no Corcovado.',
          'Na Avenida Niemeyer em São Conrado.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Uruçumirim era uma fortificação tupinambá construída com troncos de árvores e estacas pontiagudas na enseada da Glória e Flamengo.',
        diagnosticoErros: {
          1: { misconception: 'Você deslocou a batalha para o continente africano.', guidanceTip: 'A guerra foi travada nas praias da Baía de Guanabara dentro da cidade do Rio.', conceptReview: 'A Batalha de Uruçumirim foi o combate decisivo para o nascimento da cidade.' },
          2: { misconception: 'Você escolheu uma montanha íngreme sem valor tático na época.', guidanceTip: 'Os navios e canoas desembarcavam diretamente na linha da praia.', conceptReview: 'O Outeiro da Glória tem sua capela erguida próxima a esse campo de batalha histórico.' },
          3: { misconception: 'Você confundiu a Zona Sul costeira ocidental com o acesso à Baía.', guidanceTip: 'Os franceses e tupinambás controlavam os pontos de entrada das águas da Guanabara.', conceptReview: 'Flamengo e Glória eram os redutos fortificados de proteção à baía.' }
        },
        habilidadeBNCC: 'EF07HI11'
      },
      {
        id: 'q-7-2-10',
        pergunta: 'Os padres jesuítas Manuel da Nóbrega e José de Anchieta desempenharam qual papel na Guerra dos Tamoios no litoral?',
        opcoes: [
          'Negociaram a Paz de Iperoig (1563) com os chefes tamoios em Ubatuba, neutralizando temporariamente o conflito para que os portugueses pudessem atacar o Rio.',
          'Comandaram os navios de guerra franceses contra o papa.',
          'Construíram fábricas de fuzis modernos para os indígenas.',
          'Fundaram o primeiro parque de diversões temático da Disney no Rio.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'A mediação dos jesuítas na Paz de Iperoig conseguiu desmobilizar os tamoios paulistas, permitindo que as forças de Estácio de Sá concentrassem suas forças na Guanabara.',
        diagnosticoErros: {
          1: { misconception: 'Você atribuiu aos jesuítas católicos a liderança da frota protestante francesa.', guidanceTip: 'A Companhia de Jesus era uma ordem católica leal à Coroa Portuguesa.', conceptReview: 'Os jesuítas atuavam na catequese dos indígenas aliados.' },
          2: { misconception: 'Você cometeu um anacronismo bélico moderno.', guidanceTip: 'Armas de fogo na época eram mosquetes e canhões rudimentares controlados pela Coroa.', conceptReview: 'A estratégia jesuítica baseava-se no diálogo diplomático e na catequização.' },
          3: { misconception: 'Você fez uma brincadeira anacrônica sobre parques contemporâneos.', guidanceTip: 'José de Anchieta chegou a ficar como refém dos indígenas em Ubatuba durante as negociações de paz.', conceptReview: 'A Paz de Iperoig é considerada o primeiro tratado de paz das Américas.' }
        },
        habilidadeBNCC: 'EF07HI11'
      }
    ]
  }
];
