import React, { useState } from 'react';
import { RIOEDUCA_TOPICS } from '../data/rioeducaData';
import { GLOSSARY_ITEMS } from '../data/glossary';
import { Send, GraduationCap, Lightbulb, User, Bot, HelpCircle } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'tutor';
  text: string;
  timestamp: string;
  references?: string[];
}

export const TutorView: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'tutor',
      text: 'Olá! Sou o seu Professor Virtual Rioeduca de História. Estou aqui para tirar suas dúvidas sobre a matéria do 6º ao 9º ano, explicar termos difíceis, esclarecer a história e o patrimônio do Rio de Janeiro ou dar dicas para você não errar nas provas. O que você gostaria de explorar hoje?',
      timestamp: 'Agora'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const suggestedQuestions = [
    'Por que o Cais do Valongo é Patrimônio da UNESCO?',
    'O que foi o Bota-Abaixo de Pereira Passos?',
    'Qual a diferença entre tempo histórico e cronológico?',
    'Quem foi João Cândido na Revolta da Chibata?',
    'O que foram as Camélias Brancas do Quilombo do Leblon?',
    'Como Arariboia ajudou na fundação do Rio em 1565?'
  ];

  const generateAnswer = (userQuery: string): { reply: string; refs: string[] } => {
    const q = userQuery.toLowerCase();

    // 1. Check Valongo / Pequena África
    if (q.includes('valongo') || q.includes('pequena áfrica') || q.includes('unesco') || q.includes('tia ciata') || q.includes('pedra do sal')) {
      return {
        reply: 'O Cais do Valongo, situado na Região Portuária do Rio de Janeiro, foi o principal porto de desembarque de africanos escravizados em todo o continente americano — estima-se que mais de 1 milhão de pessoas tenham chegado por ali. Em 2017, a UNESCO o reconheceu como Patrimônio Mundial da Humanidade na categoria de "sítio de memória sensível", assim como Auschwitz e Hiroshima, para que a tragédia da escravidão jamais seja esquecida e para celebrar a herança e resistência afro-brasileira.\n\nNa região ao redor, conhecida como Pequena África (compreendendo Saúde, Gamboa e Praça Onze), nasceram tradições fundamentais da cidade, como o samba de roda na Pedra do Sal e a resistência comunitária articulada por matriarcas como Tia Ciata.',
        refs: ['Cais do Valongo e Pequena África', 'Pedra do Sal', 'Patrimônio Mundial UNESCO']
      };
    }

    // 2. Check Bota-Abaixo / Pereira Passos / Revolta da Vacina
    if (q.includes('bota-abaixo') || q.includes('pereira passos') || q.includes('vacina') || q.includes('oswaldo cruz')) {
      return {
        reply: 'O "Bota-Abaixo" foi como o povo carioca chamou a reforma urbana conduzida pelo prefeito Pereira Passos entre 1902 e 1906 no Centro do Rio de Janeiro. Inspirado nas reformas de Paris, o governo demoliu centenas de cortiços e casarões antigos para abrir largas avenidas (como a Avenida Central, hoje Rio Branco) e sanear a cidade.\n\nContudo, essa modernização foi excludente: os milhares de moradores pobres e negros despejados não receberam habitação alternativa e foram empurrados para os morros (como o Morro da Providência). Esse descontentamento acumulado, somado à imposição autoritária da vacinação obrigatória contra a varíola liderada por Oswaldo Cruz, detonou a lendária Revolta da Vacina em novembro de 1904!',
        refs: ['Revoltas Urbanas: Vacina e Chibata', 'Bota-Abaixo', 'Morro da Providência']
      };
    }

    // 3. Check João Cândido / Revolta da Chibata
    if (q.includes('chibata') || q.includes('joão cândido') || q.includes('marinheiro') || q.includes('almirante negro')) {
      return {
        reply: 'A Revolta da Chibata ocorreu em novembro de 1910 na Baía de Guanabara. Os marinheiros da Armada Nacional, em sua grande maioria negros e mestiços, rebelaram-se contra a permanência dos castigos corporais (chibatadas e açoites) aplicados pelos oficiais como herança da escravidão, além de péssima alimentação e baixos soldos.\n\nSob a liderança de João Cândido Felisberto, conhecido popularmente como o "Almirante Negro", os marinheiros assumiram o controle dos principais navios de guerra e apontaram os canhões para o Rio de Janeiro exigindo anistia e dignidade humana. Hoje, João Cândido tem uma estátua na Praça XV voltada para a baía!',
        refs: ['Revolta da Chibata (1910)', 'João Cândido', 'Direitos Humanos na Marinha']
      };
    }

    // 4. Check Tempo Histórico vs Cronológico / Fontes
    if (q.includes('tempo') || q.includes('fonte') || q.includes('cronológico') || q.includes('historiador')) {
      return {
        reply: 'Excelente pergunta teórica do 6º ano! Diferenciamos o tempo em duas categorias principais:\n\n1. Tempo Cronológico: É a passagem física e matemática do tempo, medida por instrumentos humanos constantes como segundos, horas, relógios e calendários.\n\n2. Tempo Histórico: É o ritmo das transformações sociais, culturais e econômicas vividas pelos seres humanos. Ele não é uniforme: em algumas épocas as coisas mudam em questão de semanas (como em revoluções), enquanto em outras certas tradições permanecem intactas por séculos.\n\nE para investigar isso, o historiador usa Fontes Históricas: vestígios materiais (cerâmicas, armas), escritos (cartas, leis), orais (relatos transmitidos entre gerações) e visuais (pinturas, mapas e fotos).',
        refs: ['O Saber Histórico, Fontes e Tempo', 'Tempo Cronológico vs. Histórico']
      };
    }

    // 5. Check Quilombo do Leblon / Abolicionismo / Camélias
    if (q.includes('camélia') || q.includes('leblon') || q.includes('rebouças') || q.includes('patrocínio') || q.includes('abolição')) {
      return {
        reply: 'As Camélias Brancas eram o símbolo secreto de solidariedade abolicionista no Rio de Janeiro do século XIX! Elas eram cultivadas no Quilombo do Leblon, localizado nas encostas do Morro Dois Irmãos por escravizados fugidos e apoiadores como o comerciante José de Seixas Magalhães.\n\nUsar uma camélia branca na lapela do paletó ou cultivá-la no jardim de casa sinalizava que aquela pessoa apoiava a libertação e protegia os fugitivos. Líderes como André Rebouças (ilustre engenheiro negro carioca) e José do Patrocínio usavam e até presentearam a Princesa Isabel com elas!',
        refs: ['Movimento Abolicionista', 'Quilombo do Leblon', 'André Rebouças']
      };
    }

    // 6. Check Fundação do Rio / Arariboia / Estácio de Sá
    if (q.includes('fundação') || q.includes('estácio de sá') || q.includes('arariboia') || q.includes('1565') || q.includes('tamoios')) {
      return {
        reply: 'A cidade de São Sebastião do Rio de Janeiro foi fundada em 1º de março de 1565 por Estácio de Sá, entre os morros Cara de Cão e Pão de Açúcar na Urca. O motivo principal foi militar: expulsar os colonos franceses comandados por Villegagnon, que haviam instalado a "França Antártica" na Baía de Guanabara com apoio dos indígenas Tupinambás (Confederação dos Tamoios).\n\nA vitória portuguesa só foi possível graças à aliança com o cacique Arariboia e seus guerreiros Temiminós. Após vencerem a batalha final em 1567, Arariboia recebeu terras do outro lado da baía, onde fundou a vila de São Lourenço dos Índios — que deu origem à cidade de Niterói!',
        refs: ['Fundação do Rio de Janeiro (1565)', 'Arariboia', 'Confederação dos Tamoios']
      };
    }

    // 7. General search fallback across topics
    const matchedTopic = RIOEDUCA_TOPICS.find(t => 
      q.split(' ').some(w => w.length > 3 && (t.title.toLowerCase().includes(w) || t.summary.introducao.join(' ').toLowerCase().includes(w)))
    );

    if (matchedTopic) {
      return {
        reply: `Sobre "${matchedTopic.title}":\n\n${matchedTopic.summary.introducao[0]}\n\n• Ponto crucial: ${matchedTopic.summary.pontosChave[0]}\n• Olhar Carioca: ${matchedTopic.summary.conexaoRio}\n• Dica de prova: ${matchedTopic.summary.paraFicarLigado}`,
        refs: [matchedTopic.title, matchedTopic.gradeLabel]
      };
    }

    // Fallback general pedagogical guidance
    return {
      reply: 'Essa é uma questão muito interessante da História! Para entender com clareza, lembre-se de que a História investiga o porquê dos acontecimentos, os interesses dos diferentes grupos sociais envolvidos e as consequências para a cidadania.\n\nSugiro que você explore o tópico correspondente no menu de Currículo ou me pergunte especificamente sobre períodos como a Fundação do Rio, a Chegada da Família Real em 1808, o Cais do Valongo ou a Era Vargas!',
      refs: ['Currículo Geral Rioeduca']
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: 'Agora'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const { reply, refs } = generateAnswer(text);
      const tutorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'tutor',
        text: reply,
        timestamp: 'Agora',
        references: refs
      };
      setMessages(prev => [...prev, tutorMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="max-w-4xl mx-auto pb-12">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-wide mb-1">
          <span>Orientação Pedagógica</span>
          <span aria-hidden="true">·</span>
          <span>Plantão de Dúvidas de História</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif">
          Professor Virtual Rioeduca
        </h2>
        <p className="text-sm text-stone-600 mt-1">
          Tire dúvidas pontuais sobre temas históricos, solicite explicações descomplicadas ou receba orientações personalizadas para não cair em pegadinhas.
        </p>
      </div>

      {/* Suggested Quick Question chips */}
      <div className="mb-4">
        <div className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <Lightbulb className="w-4 h-4 text-amber-700" />
          <span>Dúvidas Frequentes dos Estudantes:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {suggestedQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(q)}
              className="text-xs px-3 py-1.5 bg-white hover:bg-amber-50 hover:border-amber-400 border border-stone-200 text-stone-700 rounded-lg text-left transition-all shadow-2xs"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Container */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-xs flex flex-col h-[520px] overflow-hidden">
        {/* Messages feed */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${
                msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                msg.sender === 'user'
                  ? 'bg-amber-800 text-white'
                  : 'bg-amber-100 text-amber-900 border border-amber-300'
              }`}>
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <GraduationCap className="w-4 h-4 text-amber-800" />}
              </div>

              <div className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-amber-800 text-white rounded-tr-none'
                  : 'bg-stone-50 border border-stone-200 text-stone-800 rounded-tl-none font-serif'
              }`}>
                <div className="whitespace-pre-wrap">{msg.text}</div>

                {msg.references && msg.references.length > 0 && (
                  <div className="mt-3 pt-2 border-t border-stone-200 text-xs text-amber-900 font-sans flex items-center gap-1 flex-wrap">
                    <span className="font-semibold">Módulos relacionados: </span>
                    {msg.references.join(' · ')}
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-stone-400 font-sans italic p-2">
              <Bot className="w-4 h-4 animate-spin text-amber-700" />
              <span>O Professor Rioeduca está consultando os registros históricos...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 border-t border-stone-200 bg-stone-50">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Digite sua dúvida sobre qualquer tema de História..."
              className="flex-1 px-4 py-2.5 text-sm bg-white border border-stone-300 rounded-xl focus:outline-none focus:border-amber-800 text-stone-900 transition-all shadow-inner"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2.5 bg-amber-800 hover:bg-amber-900 disabled:opacity-40 text-white rounded-xl transition-all shadow-xs"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
