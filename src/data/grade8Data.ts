import { Topic } from '../types/history';

export const GRADE_8_TOPICS: Topic[] = [
  // ==========================================
  // 8º ANO - TÓPICO 1: FAMÍLIA REAL EM 1808 (10 QUESTÕES)
  // ==========================================
  {
    id: '8-familia-real-1808',
    grade: '8',
    gradeLabel: '8º Ano',
    period: 'Brasil Império',
    title: 'A Chegada da Família Real Portuguesa ao Rio (1808)',
    subtitle: 'A transferência da corte, a Abertura dos Portos e a modernização da cidade',
    tempoLeituraMin: 5,
    tags: ['Dom João VI', 'Abertura dos Portos', 'Jardim Botânico', 'Rio Capital'],
    summary: {
      introducao: [
        'Em 1807, diante da invasão das tropas de Napoleão Bonaparte em Portugal por causa do Bloqueio Continental, o príncipe regente D. João e a corte portuguesa tomaram uma decisão inédita: transferir a sede da monarquia para o Brasil.',
        'Escoltados pela marinha britânica, cerca de 15 mil nobres, funcionários e militares desembarcaram no Rio de Janeiro em março de 1808, transformando uma pacata cidade colonial na capital provisória de todo o Império Português.',
        'Ao chegar, D. João assinou a Carta Régia de Abertura dos Portos às Nações Amigas, rompendo com três séculos de Pacto Colonial (o monopólio comercial) e beneficiando principalmente a Inglaterra.',
        'A presença da corte transformou profundamente o Rio: surgiram a Imprensa Régia, o Banco do Brasil, o Jardim Botânico (Horto Real), a Real Biblioteca (atual Biblioteca Nacional), a Academia Real de Belas Artes e as primeiras escolas de medicina e cirurgia.'
      ],
      pontosChave: [
        'Fuga da Corte: Resposta à expansão napoleônica e aliança defensiva com os ingleses.',
        'Fim do Pacto Colonial: A Abertura dos Portos permitiu que o Brasil comercializasse livremente com outras nações.',
        'Urbanização e Cultura: O Rio ganhou iluminação, teatros, academias científicas e a Missão Artística Francesa (Debret).',
        'Elevação a Reino Unido (1815): O Brasil deixou a condição de colônia e passou a ter o mesmo status de Portugal.'
      ],
      conexaoRio: 'Caminhe pelo Centro do Rio: o Paço Imperial na Praça XV, o Chafariz do Mestre Valentim, o Real Gabinete Português e o Jardim Botânico na Zona Sul são heranças diretas da corte joanina!',
      linhaTempo: [
        { ano: '1807', evento: 'Embarque da Família Real em Lisboa rumo ao Brasil.' },
        { ano: '1808', evento: 'Chegada ao Rio de Janeiro e decreto de Abertura dos Portos.' },
        { ano: '1815', evento: 'O Brasil é elevado a Reino Unido de Portugal, Brasil e Algarves.' },
        { ano: '1821', evento: 'D. João VI retorna a Portugal após a Revolução Liberal do Porto, deixando seu filho Pedro como regente.' }
      ],
      paraFicarLigado: 'Para acomodar os milhares de nobres, a corte usou o carimbo "P.R." (Príncipe Regente) nas portas das melhores casas da cidade, confiscando-as. O povo carioca, com seu bom humor ácido, apelidou a sigla de "Ponha-se na Rua"!'
    },
    flashcards: [
      { id: 'fc-8-corte1', termo: 'Abertura dos Portos (1808)', significado: 'Fim do monopólio comercial português, permitindo o comércio direto com a Grã-Bretanha e outras nações.' },
      { id: 'fc-8-corte2', termo: 'Ponha-se na Rua (P.R.)', significado: 'Expressão popular carioca para os imóveis requisitados para abrigar a nobreza portuguesa recém-chegada.' },
      { id: 'fc-8-corte3', termo: 'Jardim Botânico', significado: 'Criado por D. João VI em 1808 para aclimatação de especiarias do Oriente, como a noz-moscada e a canela.' }
    ],
    questions: [
      {
        id: 'q-8-1',
        pergunta: 'A assinatura do decreto de Abertura dos Portos às Nações Amigas, por D. João em 1808, teve como consequência econômica imediata:',
        opcoes: [
          'O fim do pacto colonial (exclusivo metropolitano), beneficiando o comércio exterior brasileiro, especialmente com a Inglaterra.',
          'O fechamento total de todas as fronteiras brasileiras, impedindo a entrada de qualquer produto estrangeiro.',
          'A abolição imediata da escravidão em todas as fazendas de café do Vale do Paraíba.',
          'A declaração de guerra imediata do Brasil contra Portugal e Inglaterra.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'A Abertura dos Portos extinguiu o monopólio comercial que obrigava os colonos a comprar e vender apenas para Portugal, abrindo as portas do mercado brasileiro para os produtos manufaturados ingleses.',
        diagnosticoErros: {
          1: { misconception: 'Você interpretou "abertura" como "fechamento".', guidanceTip: 'Atenção ao termo: os portos foram abertos, não trancados.', conceptReview: 'A Abertura dos Portos significou livre comércio de navios estrangeiros.' },
          2: { misconception: 'Você antecipou a Abolição da Escravidão em oito décadas!', guidanceTip: 'A escravidão infelizmente continuou como base da economia até 1888.', conceptReview: 'A chegada da corte até aumentou o tráfico de escravizados.' },
          3: { misconception: 'Você supôs que a corte portuguesa entrou em guerra contra sua maior aliada.', guidanceTip: 'A marinha inglesa foi quem escoltou os navios portugueses em segurança.', conceptReview: 'Inglaterra e Portugal eram fortes aliados contra Napoleão Bonaparte.' }
        },
        habilidadeBNCC: 'EF08HI05'
      },
      {
        id: 'q-8-1-2',
        pergunta: 'Qual fato histórico europeu forçou o príncipe regente D. João e cerca de 15 mil membros da corte portuguesa a transferirem a sede do reino para o Rio de Janeiro em 1807/1808?',
        opcoes: [
          'A invasão de Portugal pelas tropas francesas de Napoleão Bonaparte por causa do desrespeito ao Bloqueio Continental imposto contra a Inglaterra.',
          'A erupção violenta de um vulcão de fogo no centro de Lisboa que cobriu a cidade de cinzas.',
          'Um convite amigável dos caciques tamoios para festejar o carnaval nas praias cariocas.',
          'A derrota de Portugal na Primeira Guerra Mundial em 1914.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Portugal mantinha laços comerciais com a Inglaterra e não aderiu integralmente ao Bloqueio Continental ordenado por Napoleão, levando à invasão francesa e à fuga da corte.',
        diagnosticoErros: {
          1: { misconception: 'Você atribuiu a mudança a uma catástrofe vulcânica inexistente.', guidanceTip: 'Em 1755 houve um terremoto em Lisboa, mas a fuga da corte em 1807 foi causada pela guerra napoleônica.', conceptReview: 'A transferência da corte foi uma decisão político-militar estratégica.' },
          2: { misconception: 'Você romantizou o evento histórico com festa popular.', guidanceTip: 'A viagem durou semanas em condições difíceis, com falta de água e epidemia de piolhos a bordo.', conceptReview: 'A corte precisou fugir às pressas escoltada pela esquadra inglesa.' },
          3: { misconception: 'Você cometeu um anacronismo de mais de cem anos.', guidanceTip: 'A Primeira Guerra Mundial ocorreu em 1914–1918; a transferência da corte deu-se em 1807–1808.', conceptReview: 'O contexto das Guerras Napoleônicas ocorreu no início do século XIX.' }
        },
        habilidadeBNCC: 'EF08HI05'
      },
      {
        id: 'q-8-1-3',
        pergunta: 'Ao chegarem ao Rio de Janeiro, os funcionários reais colocavam a sigla "P.R." (Príncipe Regente) nas portas das melhores casas para requisitá-las para os nobres. Como o povo carioca, com seu humor ácido, traduziu a sigla?',
        opcoes: [
          '"Ponha-se na Rua".',
          '"Prédio de Respeito".',
          '"Pode Repousar".',
          '"Paraíso Real".'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'A expressão "Ponha-se na Rua" refletia a revolta bem-humorada dos cariocas que foram expulsos de suas próprias residências para abrigar a nobreza parasitária vinda de Lisboa.',
        diagnosticoErros: {
          1: { misconception: 'Você escolheu uma expressão elogiosa inexistente no humor popular.', guidanceTip: 'Os proprietários ficaram inconformados por perderem suas casas sem indenização.', conceptReview: 'O termo popular caricaturava o autoritarismo da nobreza joanina.' },
          2: { misconception: 'Você interpretou como um convite hospitaleiro.', guidanceTip: 'As famílias cariocas foram obrigadas a desocupar suas casas em poucos dias.', conceptReview: 'A sigla oficial era Príncipe Regente, mas o povo a apelidou de Ponha-se na Rua.' },
          3: { misconception: 'Você escolheu uma opção que exalta a realeza.', guidanceTip: 'O povo carioca sempre usou a sátira e a ironia política para criticar os abusos do poder.', conceptReview: 'Essa anedota histórica é frequentemente citada nas aulas do Rioeduca.' }
        },
        habilidadeBNCC: 'EF08HI05'
      },
      {
        id: 'q-8-1-4',
        pergunta: 'Entre as inúmeras instituições culturais e científicas fundadas por D. João VI no Rio de Janeiro que existem até hoje, destacam-se:',
        opcoes: [
          'O Jardim Botânico, a Biblioteca Nacional, a Imprensa Régia e o Banco do Brasil.',
          'A fábrica de naves espaciais da NASA em Madureira.',
          'O primeiro canal de televisão a cores da América Latina.',
          'A ferrovia subterrânea do metrô ligando o Rio a Tóquio.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Para transformar o Rio na sede do império, D. João criou as bases da imprensa, do sistema financeiro, da botânica agronômica e do acervo bibliográfico nacional.',
        diagnosticoErros: {
          1: { misconception: 'Você utilizou instituições aeroespaciais do século XX.', guidanceTip: 'As instituições criadas no início do século XIX eram de pesquisa botânica, imprensa e economia.', conceptReview: 'O Jardim Botânico foi fundado em 1808 como Horto Real.' },
          2: { misconception: 'Você usou tecnologia de telecomunicações do século XX.', guidanceTip: 'Na época joanina surgiram os primeiros jornais impressos em papel (como a Gazeta do Rio de Janeiro).', conceptReview: 'A Imprensa Régia trouxe os primeiros prelos tipográficos ao Brasil.' },
          3: { misconception: 'Você cometeu um anacronismo sobre o transporte metropolitano.', guidanceTip: 'O transporte no Rio de 1808 era feito a cavalo, em liteiras carregadas por escravizados e carruagens.', conceptReview: 'As grandes obras joaninas focaram na infraestrutura administrativa da corte.' }
        },
        habilidadeBNCC: 'EF08HI05'
      },
      {
        id: 'q-8-1-5',
        pergunta: 'Em 1815, D. João tomou uma medida política fundamental que mudou a condição colonial da nossa terra, ao decretar:',
        opcoes: [
          'A elevação do Brasil a Reino Unido a Portugal e Algarves, deixando oficialmente de ser uma simples colônia.',
          'A venda de todo o território brasileiro para o imperador da China.',
          'A devolução de todas as terras brasileiras aos indígenas tupinambás.',
          'A proibição do uso de moedas de prata e ouro no comércio carioca.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'A elevação a Reino Unido permitiu que D. João participasse do Congresso de Viena como monarca europeu com sede legal no Rio de Janeiro, igualando o status do Brasil a Portugal.',
        diagnosticoErros: {
          1: { misconception: 'Você imaginou uma transação imobiliária internacional inexistente.', guidanceTip: 'O Brasil era a parte mais rica e próspera do Império Português.', conceptReview: 'O Brasil tornou-se a sede da própria monarquia portuguesa.' },
          2: { misconception: 'Você imaginou uma restituição territorial que não ocorreu.', guidanceTip: 'A Coroa manteve o sistema de sesmarias e a exploração da terra para os grandes proprietários.', conceptReview: 'A medida foi política e administrativa internacional.' },
          3: { misconception: 'Você supôs uma proibição comercial de metais.', guidanceTip: 'O Banco do Brasil foi criado justamente para emitir papel-moeda e organizar o crédito.', conceptReview: 'A economia monetária fortaleceu-se com a corte no Rio.' }
        },
        habilidadeBNCC: 'EF08HI05'
      },
      {
        id: 'q-8-1-6',
        pergunta: 'A Missão Artística Francesa, trazida ao Rio de Janeiro em 1816 a convite de D. João VI, contou com renomados artistas, entre os quais o pintor:',
        opcoes: [
          'Jean-Baptiste Debret, que pintou aquarelas inestimáveis retratando o cotidiano, as ruas e a escravidão no Rio de Janeiro.',
          'Leonardo da Vinci, que pintou a Mona Lisa nos Arcos da Lapa.',
          'Pablo Picasso, que criou o cubismo durante o carnaval da Tijuca.',
          'Michelangelo, que esculpiu estátuas de mármore em Copacabana.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'As obras de Debret (reunidas em "Viagem Pitoresca e Histórica ao Brasil") são fontes históricas visuais indispensáveis para entender a vida de brancos, libertos e escravizados no Rio joanino.',
        diagnosticoErros: {
          1: { misconception: 'Você confundiu o Renascimento italiano do século XVI com o século XIX no Rio.', guidanceTip: 'Leonardo da Vinci faleceu em 1519 na França e nunca esteve no continente americano.', conceptReview: 'A Missão Francesa incluía Debret, Taunay e o arquiteto Grandjean de Montigny.' },
          2: { misconception: 'Você misturou a vanguarda cubista espanhola do século XX com a missão clássica francesa.', guidanceTip: 'A Missão Francesa difundiu o estilo Neoclássico na arquitetura e na pintura cariocas.', conceptReview: 'Eles fundaram a Academia Imperial de Belas Artes no Centro do Rio.' },
          3: { misconception: 'Você deslocou o mestre escultor italiano do século XVI para as praias do Rio.', guidanceTip: 'Michelangelo viveu em Florença e Roma nos anos 1500.', conceptReview: 'Debret é o grande cronista visual do Rio de Janeiro do início dos anos 1800.' }
        },
        habilidadeBNCC: 'EF08HI06'
      },
      {
        id: 'q-8-1-7',
        pergunta: 'Apesar de todas as modernizações trazidas pela corte joanina ao Rio de Janeiro, qual foi a grande contradição social mantida intacta na cidade?',
        opcoes: [
          'A permanência da brutal escravidão de milhares de africanos e seus descendentes, que continuavam realizando todos os trabalhos pesados da cidade.',
          'A proibição de que navios ingleses vendessem tecidos nas lojas da Rua do Ouvidor.',
          'A inexistência de qualquer árvore ou vegetação em toda a Baía de Guanabara.',
          'A obrigação de que todos os nobres andassem a pé sem usar sapatos.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'O Rio de Janeiro transformou-se em uma corte com teatros e academias, mas sustentada pelo trabalho forçado de uma gigantesca população escravizada, visível em cada esquina.',
        diagnosticoErros: {
          1: { misconception: 'Você supôs uma barreira comercial com a Inglaterra.', guidanceTip: 'Os produtos ingleses inundaram o comércio da Rua do Ouvidor a preços privilegiados.', conceptReview: 'A Inglaterra foi a grande beneficiária comercial da chegada da corte.' },
          2: { misconception: 'Você ignorou a exuberante Mata Atlântica que cercava o Rio.', guidanceTip: 'A cidade era cercada por florestas tropicais, onde foi criado o Jardim Botânico.', conceptReview: 'O contraste era entre o luxo da corte e a extrema miséria e violência do cativeiro.' },
          3: { misconception: 'Você inverteu a hierarquia: os nobres andavam em carruagens e liteiras.', guidanceTip: 'Quem andava descalço eram as pessoas escravizadas, como marca legal do cativeiro.', conceptReview: 'O sapato era um símbolo de distinção entre homens livres e escravizados.' }
        },
        habilidadeBNCC: 'EF08HI05'
      },
      {
        id: 'q-8-1-8',
        pergunta: 'Em 1820, estourou em Portugal a Revolução Liberal do Porto. Quais eram as principais exigências dos revolucionários portugueses em relação ao Brasil?',
        opcoes: [
          'O retorno imediato de D. João VI a Lisboa e a recolonização do Brasil, com restabelecimento do monopólio comercial.',
          'A entrega de todo o poder em Portugal para o presidente dos Estados Unidos.',
          'A coroação de Napoleão Bonaparte como novo rei de Lisboa e do Rio.',
          'A proibição definitiva do cultivo de café e cana em todo o planeta Terra.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'As Cortes portuguesas queriam que Portugal voltasse a ter uma constituição liberal, mas queriam rebaixar o Brasil de volta ao estatuto de colônia submissa, o que acelerou a nossa Independência.',
        diagnosticoErros: {
          1: { misconception: 'Você confundiu a revolução constitucional portuguesa com alianças norte-americanas.', guidanceTip: 'Os liberais portugueses queriam limitar o absolutismo do rei português, mas manter o império ultramarino.', conceptReview: 'A Revolução do Porto exigiu a volta da sede para Lisboa.' },
          2: { misconception: 'Você cometeu um equívoco sobre o imperador francês Napoleão.', guidanceTip: 'Napoleão já havia sido derrotado na Batalha de Waterloo em 1815 e estava preso na ilha de Santa Helena.', conceptReview: 'A revolução era de inspiração liberal e antinapoleônica.' },
          3: { misconception: 'Você inventou proibições agrícolas irreais.', guidanceTip: 'Portugal dependia desesperadamente das receitas aduaneiras e do comércio com o Brasil.', conceptReview: 'A tentativa portuguesa de recolonizar o Brasil desencadeou o processo do Sete de Setembro.' }
        },
        habilidadeBNCC: 'EF08HI06'
      },
      {
        id: 'q-8-1-9',
        pergunta: 'Ao retornar a Portugal em 1821 para jurar as novas bases constitucionais, D. João VI deixou seu filho Pedro como regente no Rio de Janeiro e pronunciou a célebre frase preventiva:',
        opcoes: [
          '"Pedro, se o Brasil se separar, antes seja para ti, que me hás de respeitar, do que para algum desses aventureiros!"',
          '"Pedro, entregue imediatamente todas as nossas terras ao imperador da França!"',
          '"Pedro, queime todos os livros da Biblioteca Real antes que alguém aprenda a ler!"',
          '"Pedro, torne-se um pescador na praia de Copacabana e nunca mais governe nada!"'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'D. João antecipou com perspicácia política que o processo de emancipação do Brasil era inevitável, preferindo manter a coroa imperial sob a dinastia dos Bragança.',
        diagnosticoErros: {
          1: { misconception: 'Você supôs uma entrega do reino a uma nação rival.', guidanceTip: 'A família de Bragança queria manter o trono sob seu controle hereditário.', conceptReview: 'A frase demonstra a estratégia da dinastia em preservar o poder político.' },
          2: { misconception: 'Você atribuiu ao monarca um ódio à cultura letrada.', guidanceTip: 'D. João foi o criador da Real Biblioteca e de escolas de cirurgia no Brasil.', conceptReview: 'A educação superior brasileira teve suas primeiras faculdades criadas na corte joanina.' },
          3: { misconception: 'Você tratou com desdém o príncipe herdeiro.', guidanceTip: 'D. Pedro permaneceu como Príncipe Regente e liderou o processo da Independência em 1822.', conceptReview: 'A regência de D. Pedro foi o elo direto que levou à fundação do Império do Brasil.' }
        },
        habilidadeBNCC: 'EF08HI06'
      },
      {
        id: 'q-8-1-10',
        pergunta: 'O Jardim Botânico do Rio de Janeiro foi originalmente concebido por D. João VI com o objetivo prático de:',
        opcoes: [
          'Aclimatar e cultivar especiarias orientais (como canela, cravo, cânfora e noz-moscada) e plantas de alto valor comercial no clima tropical brasileiro.',
          'Servir de pista de pouso para pequenos helicópteros da guarda real.',
          'Construir um laboratório secreto para fabricar ouro falso.',
          'Um campo de batalha para gladiadores lutarem contra leões africanos.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Chamado de Real Horto, o Jardim Botânico tinha finalidade econômica agronômica: testar mudas botânicas exóticas trazidas das possessões portuguesas da Ásia para multiplicar a renda da Coroa.',
        diagnosticoErros: {
          1: { misconception: 'Você cometeu um anacronismo tecnológico aéreo.', guidanceTip: 'Helicópteros surgiram em meados do século XX.', conceptReview: 'O Real Horto foi criado para pesquisas de botânica aplicada e agricultura.' },
          2: { misconception: 'Você confundiu ciência botânica com alquimia medieval.', guidanceTip: 'A aclimatação de plantas agrícolas era um dos maiores ramos científicos do Iluminismo.', conceptReview: 'Mudas de canela, pimenta e palmeiras-imperiais foram introduzidas no Rio.' },
          3: { misconception: 'Você misturou o Coliseu romano com um centro botânico de preservação da natureza.', guidanceTip: 'O Jardim Botânico sempre foi um santuário de espécies vegetais e estudos científicos.', conceptReview: 'Hoje é um dos mais importantes centros de pesquisa ecológica e conservação do planeta.' }
        },
        habilidadeBNCC: 'EF08HI05'
      }
    ]
  },

  // ==========================================
  // 8º ANO - TÓPICO 2: ABOLIÇÃO & RESISTÊNCIA (10 QUESTÕES)
  // ==========================================
  {
    id: '8-abolicao-resistencia',
    grade: '8',
    gradeLabel: '8º Ano',
    period: 'Brasil Império',
    title: 'O Movimento Abolicionista e a Resistência Negra no Rio',
    subtitle: 'Quilombos urbanos, imprensa negra, André Rebouças, Patrocínio e a Lei Áurea (1888)',
    tempoLeituraMin: 5,
    tags: ['Abolicionismo', 'Resistência Negra', 'André Rebouças', 'José do Patrocínio', 'Lei Áurea'],
    summary: {
      introducao: [
        'Durante mais de três séculos, o Brasil foi o maior território escravista do Ocidente. No século XIX, o Rio de Janeiro era conhecido como a maior "cidade negra" das Américas, onde escravizados realizavam todas as tarefas, desde o trabalho doméstico e carregamento até ofícios especializados de pedreiros e marinheiros.',
        'O fim da escravidão não foi uma dádiva ou presente bondoso da Princesa Isabel, mas o resultado de séculos de resistência e revoltas dos próprios escravizados aliada à pressão de um vibrante movimento social abolicionista na década de 1880.',
        'No Rio, destacaram-se líderes negros letrados como o engenheiro André Rebouças (que defendia a reforma agrária para os libertos), o jornalista José do Patrocínio (o "Tigre da Abolição"), o advogado Luís Gama e o tipógrafo Ferreira de Menezes.',
        'Além da imprensa e dos comícios públicos nos teatros cariocas, redes clandestinas escondiam escravizados fugitivos no Quilombo do Leblon (famoso pelo cultivo de camélias brancas, símbolo do abolicionismo) e os transportavam de trem para províncias que já haviam libertado seus escravos, como o Ceará.'
      ],
      pontosChave: [
        'Resistência Escrava: Fugas em massa, recusa ao trabalho, formação de quilombos e compra de alforrias.',
        'Camélias do Leblon: Flor símbolo dos abolicionistas, cultivada no quilombo de Seixas no atual bairro do Leblon.',
        'Leis Gradualistas: Lei Eusébio de Queirós (1850), Lei do Ventre Livre (1871) e Lei dos Sexagenários (1885) tentavam adiar o fim da escravidão sem reforma agrária.',
        '13 de Maio de 1888: Assinatura da Lei Áurea em meio à insustentabilidade social e política da escravidão.'
      ],
      conexaoRio: 'O Quilombo do Leblon ficava nas encostas do Morro Dois Irmãos. Hoje, o Túnel Rebouças homenageia os irmãos André e Antônio Rebouças, grandes engenheiros e ativistas abolicionistas negros cariocas!',
      linhaTempo: [
        { ano: '1850', evento: 'Lei Eusébio de Queirós extingue o tráfico negreiro transatlântico.' },
        { ano: '1871', evento: 'Lei do Ventre Livre: filhos de escravizadas nascem livres, sob tutela.' },
        { ano: '1880', evento: 'Fundação da Sociedade Brasileira Contra a Escravidão no Rio de Janeiro.' },
        { ano: '1888', evento: 'Assinatura da Lei Áurea em 13 de Maio, libertando cerca de 700 mil escravizados sem indenização ou terras.' }
      ],
      paraFicarLigado: 'Importante visão crítica do Rioeduca: A Lei Áurea extinguiu o estatuto jurídico da escravidão, mas não garantiu emprego, terra ou educação aos libertos, empurrando a população negra para a marginalização social e ocupação dos morros cariocas.'
    },
    flashcards: [
      { id: 'fc-8-ab1', termo: 'Camélia Branca', significado: 'Flor cultivada no Quilombo do Leblon que servia de código secreto e símbolo de solidariedade abolicionista na lapela dos cariocas.' },
      { id: 'fc-8-ab2', termo: 'André Rebouças', significado: 'Brilhante engenheiro e intelectual negro carioca que planejou estradas de ferro e propunha a "democracia rural" com terras para os ex-escravizados.' },
      { id: 'fc-8-ab3', termo: 'José do Patrocínio', significado: 'Jornalista e tribuno abolicionista, proprietário do jornal "A Cidade do Rio", inflamava a população contra o cativeiro.' }
    ],
    questions: [
      {
        id: 'q-8-2',
        pergunta: 'Por que o currículo do Rioeduca enfatiza que a Abolição da Escravidão em 1888 NÃO foi simplesmente uma "concessão generosa" da Princesa Isabel?',
        opcoes: [
          'Porque a abolição foi fruto de intensa resistência dos próprios escravizados (fugas, quilombos e revoltas) e de uma mobilização popular liderada por intelectuais abolicionistas.',
          'Porque a Princesa Isabel era uma inimiga secreta dos proprietários de terras e queria destruir o Brasil.',
          'Porque os fazendeiros do café decidiram libertar todos os escravizados voluntariamente sem nenhuma pressão social.',
          'Porque a Lei Áurea determinou a entrega imediata de 50% das terras do país aos ex-escravizados.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'A historiografia contemporânea ensina que a abolição foi conquistada por lutas históricas dos negros escravizados e libertos, fugas em massa nas fazendas fluminenses e ampla pressão civil urbana.',
        diagnosticoErros: {
          1: { misconception: 'Você personificou a história como uma intriga pessoal e sem base factual.', guidanceTip: 'A monarquia imperial dependia do apoio dos barões do café escravistas; a princesa assinou a lei porque a escravidão era insustentável.', conceptReview: 'As decisões políticas respondem a pressões de forças sociais.' },
          2: { misconception: 'Você supôs que a elite escravista abriu mão do cativeiro por livre vontade.', guidanceTip: 'Os barões da terra resistiram à abolição até o último segundo, exigindo indenizações em dinheiro.', conceptReview: 'Os proprietários lutaram para manter seus privilégios através de leis gradualistas.' },
          3: { misconception: 'Você acreditou que houve distribuição de terras aos libertos.', guidanceTip: 'Pense na realidade dos negros no pós-abolição: eles receberam apoio do Estado?', conceptReview: 'A Lei Áurea não previu distribuição de terras, indenização ou escolas aos libertos.' }
        },
        habilidadeBNCC: 'EF08HI14'
      },
      {
        id: 'q-8-2-2',
        pergunta: 'As camélias brancas usadas na lapela por cariocas no final do século XIX tinham qual significado político secreto?',
        opcoes: [
          'Eram o símbolo do movimento abolicionista, cultivadas no Quilombo do Leblon por fugitivos e apoiadores da causa da liberdade.',
          'Indicavam que aquela pessoa era a favor da escravidão perpétua dos africanos.',
          'Serviam apenas para espantar mosquitos na praia de Copacabana.',
          'Eram uma exigência da rainha da Inglaterra para comprar café brasileiro.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Cultivar ou usar a camélia branca no Rio era uma declaração aberta de simpatia e compromisso com o fim da escravidão e apoio aos quilombolas do Leblon.',
        diagnosticoErros: {
          1: { misconception: 'Você inverteu completamente o significado do símbolo.', guidanceTip: 'Quem usava camélia apoiava a liberdade dos negros e desafiava os escravocratas.', conceptReview: 'A camélia branca foi o emblema mais poético e corajoso do abolicionismo carioca.' },
          2: { misconception: 'Você desconsiderou a dimensão política do símbolo floral.', guidanceTip: 'O Quilombo do Leblon, de Seixas Magalhães, cultivava essas flores como símbolo de resistência.', conceptReview: 'A flor funcionava como senha e senha de acolhimento a fugitivos.' },
          3: { misconception: 'Você atribuiu uma ordem externa à monarquia britânica.', guidanceTip: 'Foi uma criação genuína de libertos e abolicionistas cariocas.', conceptReview: 'A Princesa Isabel chegou a receber camélias brancas de presente dos abolicionistas.' }
        },
        habilidadeBNCC: 'EF08HI14'
      },
      {
        id: 'q-8-2-3',
        pergunta: 'O engenheiro André Rebouças, grande intelectual negro abolicionista homenageado no nome do Túnel Rebouças no Rio, defendia que a abolição da escravidão só seria completa se fosse acompanhada por:',
        opcoes: [
          'Uma reforma agrária ("democracia rural"), que distribuísse lotes de terra e ferramentas aos ex-escravizados para garantir sua autonomia econômica.',
          'A entrega de todas as terras brasileiras aos bancos ingleses.',
          'A deportação forçada de todos os trabalhadores negros de volta para a Europa.',
          'A proibição de que pessoas negras aprendessem a ler e escrever.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Rebouças foi um pensador visionário: alertava que libertar os escravizados sem terra significava deixá-los na miséria à mercê dos mesmos latifundiários que os escravizaram.',
        diagnosticoErros: {
          1: { misconception: 'Você confundiu justiça social rural com enriquecimento financeiro externo.', guidanceTip: 'Rebouças defendia a emancipação do trabalhador brasileiro contra os monopólios de terra.', conceptReview: 'A proposta de "Democracia Rural" de Rebouças era pioneira.' },
          2: { misconception: 'Você imaginou uma expulsão racista contrária aos princípios de Rebouças.', guidanceTip: 'Rebouças lutava pela cidadania plena da população negra no solo brasileiro.', conceptReview: 'Ele defendia que os negros construíram o país e mereciam suas terras.' },
          3: { misconception: 'Você supôs uma barreira educacional que Rebouças sempre combateu.', guidanceTip: 'Ele próprio era um professor universitário e engenheiro de prestígio.', conceptReview: 'Rebouças considerava a educação e a terra os dois pilares da verdadeira liberdade.' }
        },
        habilidadeBNCC: 'EF08HI14'
      },
      {
        id: 'q-8-2-4',
        pergunta: 'Conhecido como o "Tigre da Abolição", fundou jornais combativos no Rio de Janeiro e discursava inflamando teatros lotados pela liberdade dos escravizados. Trata-se de:',
        opcoes: [
          'José do Patrocínio.',
          'Duque de Caxias.',
          'Barão de Mauá.',
          'Marquês de Pombal.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'José do Patrocínio, filho de uma quituteira negra liberta, foi o maior orador e jornalista do movimento abolicionista no Rio de Janeiro.',
        diagnosticoErros: {
          1: { misconception: 'Você escolheu o comandante militar do exército imperial.', guidanceTip: 'Caxias foi líder militar na Guerra do Paraguai, ligado à elite monárquica.', conceptReview: 'José do Patrocínio era um jornalista civil, orador negro e agitador popular.' },
          2: { misconception: 'Você escolheu o grande empresário das estradas de ferro e iluminação a gás.', guidanceTip: 'Mauá foi um pioneiro da indústria e do telégrafo submarino.', conceptReview: 'José do Patrocínio utilizou a imprensa escrita (jornal Gazeta de Notícias e A Cidade do Rio) para a causa da liberdade.' },
          3: { misconception: 'Você confundiu o século XIX brasileiro com o primeiro-ministro de Portugal do século XVIII.', guidanceTip: 'Pombal governou Portugal de 1750 a 1777.', conceptReview: 'José do Patrocínio viveu no Rio de Janeiro e foi um dos signatários intelectuais da campanha abolicionista.' }
        },
        habilidadeBNCC: 'EF08HI14'
      },
      {
        id: 'q-8-2-5',
        pergunta: 'As leis denominadas "gradualistas" aprovadas pelo parlamento imperial (Lei Eusébio de Queirós em 1850, Lei do Ventre Livre em 1871 e Lei dos Sexagenários em 1885) tinham como objetivo principal da elite cafeeira:',
        opcoes: [
          'Adiar ao máximo a libertação total dos escravizados, prolongando o cativeiro enquanto buscavam mão de obra alternativa de imigrantes europeus.',
          'Libertar todos os escravizados em 24 horas sem qualquer condição.',
          'Transformar o Brasil em uma colônia submissa da Argentina.',
          'Proibir que qualquer cidadão comprasse ou bebesse café nas confeitarias cariocas.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Os proprietários de escravos aprovaram leis cheias de brechas para acalmar a pressão inglesa e os protestos internos, mantendo a exploração por mais de três décadas.',
        diagnosticoErros: {
          1: { misconception: 'Você supôs uma abolição imediata.', guidanceTip: 'A Lei do Ventre Livre mantinha os filhos nascidos livres trabalhando para os senhores até os 21 anos!', conceptReview: 'As leis gradualistas eram uma estratégia conservadora de protelação.' },
          2: { misconception: 'Você inventou uma anexação territorial absurda.', guidanceTip: 'O Brasil era um Império soberano com a maior economia do continente sul-americano.', conceptReview: 'A questão da escravidão era o debate central da política nacional interna.' },
          3: { misconception: 'Você confundiu as leis de trabalho escravo com proibições de consumo.', guidanceTip: 'O café era a maior fonte de riqueza e divisas exportadas pelo porto do Rio.', conceptReview: 'A cafeicultura do Vale do Paraíba dependia fundamentalmente dos braços escravizados.' }
        },
        habilidadeBNCC: 'EF08HI14'
      },
      {
        id: 'q-8-2-6',
        pergunta: 'A Lei dos Sexagenários (Lei Saraiva-Cotegipe de 1885) foi duramente ironizada e criticada pelos abolicionistas porque:',
        opcoes: [
          'Libertava apenas pessoas com mais de 60 anos (idade que pouquíssimos escravizados atingiam devido às péssimas condições) e ainda exigia mais 3 anos de trabalho de indenização.',
          'Dava aposentadoria milionária em barras de ouro a todos os jovens com menos de 15 anos.',
          'Determinava que todos os idosos do país deveriam se mudar para navios no mar aberto.',
          'Obrigava os idosos a construírem pirâmides de pedra na Cinelândia.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Era uma lei cínica: desobrigava o fazendeiro de alimentar um escravizado idoso e doente, deixando os idosos desamparados na velhice.',
        diagnosticoErros: {
          1: { misconception: 'Você imaginou benefícios generosos que nunca existiram no cativeiro.', guidanceTip: 'A expectativa de vida de um escravizado raramente ultrapassava os 40 anos.', conceptReview: 'A Lei dos Sexagenários foi chamada pelos historiadores de "farsa legislativa".' },
          2: { misconception: 'Você usou uma punição fantasiosa.', guidanceTip: 'Os escravizados idosos foram na verdade abandonados à própria sorte nas ruas.', conceptReview: 'O abolicionismo denunciou a crueldade da lei no parlamento e na imprensa.' },
          3: { misconception: 'Você misturou Roma e Egito com a política imperial brasileira.', guidanceTip: 'A lei tramitou no Senado imperial no Campo de Santana no Rio de Janeiro.', conceptReview: 'A bancada escravista tentou usar a lei para frear o avanço das fugas em massa.' }
        },
        habilidadeBNCC: 'EF08HI14'
      },
      {
        id: 'q-8-2-7',
        pergunta: 'No Rio de Janeiro, a Sociedade Brasileira Contra a Escravidão, fundada em 1880, promoveu qual estratégia inovadora para conscientizar a população urbana?',
        opcoes: [
          'Festivais cívicos em teatros (como o Teatro São Pedro de Alcântara), comícios com discursos, poemas e apresentações musicais para arrecadar fundos de alforria.',
          'Um pacto secreto com os donos de senzalas para comprar chicotes mais fortes.',
          'A destruição de todas as prensas de jornais da cidade do Rio.',
          'A invasão armada de Portugal para sequestrar a corte joanina.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'O movimento abolicionista carioca levou o debate político para as massas: lotava teatros, criava marchas cívicas e mobilizava a classe trabalhadora urbana, cocheiros e tipógrafos.',
        diagnosticoErros: {
          1: { misconception: 'Você associou os abolicionistas aos instrumentos de tortura escravista.', guidanceTip: 'Os abolicionistas compravam cartas de alforria e financiavam a fuga de cativos.', conceptReview: 'Eles formavam uma rede de solidariedade e humanismo.' },
          2: { misconception: 'Você supôs que eles destruíam a imprensa quando eles viviam dela.', guidanceTip: 'A imprensa foi a maior arma dos abolicionistas (jornais como O Abolicionista e A Redempção).', conceptReview: 'Jornalistas e tipógrafos recusavam-se a compor anúncios de fuga de escravizados.' },
          3: { misconception: 'Você cometeu um anacronismo internacional sem nexo com o debate interno.', guidanceTip: 'A luta era pelo fim da escravidão no território imperial brasileiro.', conceptReview: 'A campanha abolicionista foi um dos primeiros movimentos populares de massa do Brasil.' }
        },
        habilidadeBNCC: 'EF08HI14'
      },
      {
        id: 'q-8-2-8',
        pergunta: 'O que foram os chamados "quilombos urbanos", que se multiplicaram nas encostas dos morros e matas do Rio de Janeiro no final do século XIX?',
        opcoes: [
          'Comunidades autônomas formadas por escravizados fugidos e libertos em locais de mata densa (como no Leblon e Tijuca), que interagiam com a economia informal da cidade.',
          'Quartéis militares onde os soldados imperiais treinavam para a guerra no exterior.',
          'Fábricas têxteis inglesas onde era proibido falar a língua portuguesa.',
          'Fazendas de plantação de trigo trazidas da Rússia czarista.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Ao contrário de grandes quilombos distantes no interior como Palmares, os quilombos cariocas ficavam perto da cidade, fornecendo flores, lenha e hortaliças e recebendo apoio de abolicionistas.',
        diagnosticoErros: {
          1: { misconception: 'Você confundiu refúgios de escravizados com quartéis do exército oficial.', guidanceTip: 'O exército muitas vezes era mandado para caçar quilombos, embora no final muitos oficiais se recusassem.', conceptReview: 'Quilombos eram espaços soberanos de liberdade e resistência negra.' },
          2: { misconception: 'Você confundiu locais de fuga e moradia livre com fábricas inglesas.', guidanceTip: 'Nos morros e chácaras do Rio, os quilombolas criavam suas próprias redes comunitárias.', conceptReview: 'O Quilombo da Serra dos Três Irmãos (Leblon) foi o mais célebre deles.' },
          3: { misconception: 'Você cometeu um equívoco geográfico e agronômico.', guidanceTip: 'O clima carioca de Mata Atlântica não cultivava trigo russo, mas sim frutas, mandioca e flores.', conceptReview: 'A economia dos quilombos urbanos integrava-se ao abastecimento dos mercados cariocas.' }
        },
        habilidadeBNCC: 'EF08HI14'
      },
      {
        id: 'q-8-2-9',
        pergunta: 'Quando a Lei Áurea foi assinada em 13 de Maio de 1888, qual foi a reação imediata dos grandes proprietários cafeeiros escravistas do Vale do Paraíba?',
        opcoes: [
          'Ficaram revoltados com a monarquia por não terem recebido indenização em dinheiro e abandonaram o apoio a D. Pedro II, aderindo ao movimento republicano ("republicanos de última hora").',
          'Comemoraram nas ruas distribuindo todas as suas terras aos trabalhadores rurais.',
          'Doaram todas as suas fazendas para a Igreja Católica e foram morar na selva.',
          'Declararam guerra civil contra a Inglaterra para exigir a volta do tráfico negreiro.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'Sentindo-se "traídos" pelo Império, os fazendeiros do café romperam com o trono, o que acelerou a queda da Monarquia e a Proclamação da República no ano seguinte (1889).',
        diagnosticoErros: {
          1: { misconception: 'Você supôs uma postura nobre e caridosa dos barões escravistas.', guidanceTip: 'Os barões do café queriam que o Estado pagasse uma indenização por cada pessoa liberta.', conceptReview: 'A falta de indenização levou esses barões a derrubar a monarquia que não mais os servia.' },
          2: { misconception: 'Você imaginou uma renúncia monástica dos latifundiários.', guidanceTip: 'Eles continuaram como donos absolutos das terras, contratando os ex-escravizados por salários miseráveis.', conceptReview: 'A estrutura fundiária continuou intocada e concentrada.' },
          3: { misconception: 'Você imaginou um confronto com a Inglaterra que não ocorreu.', guidanceTip: 'O tráfico transatlântico já estava extinto desde 1850 pela Lei Eusébio de Queirós.', conceptReview: 'A vingança dos barões foi política: derrubar o imperador e proclamar a República oligárquica.' }
        },
        habilidadeBNCC: 'EF08HI14'
      },
      {
        id: 'q-8-2-10',
        pergunta: 'Qual foi o principal legado da abolição sem reformas sociais para a geografia urbana e social da cidade do Rio de Janeiro no início do século XX?',
        opcoes: [
          'Os libertos foram abandonados sem terra, moradia ou indenização, sendo empurrados para os cortiços centrais e para a ocupação das encostas dos morros (origem das primeiras favelas).',
          'Todos os libertos tornaram-se diplomatas e embaixadores do Brasil na Europa.',
          'O Rio de Janeiro transformou-se em uma cidade sem pobreza ou desigualdade.',
          'A cidade foi abandonada por completo e os habitantes se mudaram para o polo sul.'
        ],
        respostaCorreta: 0,
        explicacaoGeral: 'A abolição inconclusa gerou a segregação socioespacial carioca: sem apoio governamental, a população negra ocupou os morros como o Morro da Providência, resistindo e criando a cultura comunitária.',
        diagnosticoErros: {
          1: { misconception: 'Você ignorou o racismo institucional que barrou o acesso dos negros aos cargos de poder.', guidanceTip: 'Apenas uma minúscula elite branca ocupava os postos diplomáticos do Itamaraty.', conceptReview: 'O pós-abolição foi marcado pelo desamparo e pela criminalização da vadiagem e da capoeira.' },
          2: { misconception: 'Você imaginou um cenário utópico que nega a história do Rio.', guidanceTip: 'As desigualdades raciais e econômicas do Rio têm raízes profundas nesse pós-abolição excludente.', conceptReview: 'O currículo Rioeduca estimula a compreensão crítica da favelização e da cidadania.' },
          3: { misconception: 'Você fez uma brincadeira fantasiosa sobre abandono urbano.', guidanceTip: 'O Rio continuou sendo a capital federal e o centro mais pulsante do país.', conceptReview: 'A luta por dignidade e moradia continuou viva nas periferias e morros cariocas.' }
        },
        habilidadeBNCC: 'EF08HI14'
      }
    ]
  }
];
