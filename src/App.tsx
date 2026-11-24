import React, { useState, useEffect } from 'react';
import { RIOEDUCA_TOPICS } from './data/rioeducaData';
import { Topic, GradeId, TopicProgress, UserAnswerRecord, PlayerStats } from './types/history';
import { 
  getStoredProgress, saveTopicProgress, getStoredAnswers, 
  recordUserAnswer, getBookmarks, toggleBookmark, resetAllProgress,
  getPlayerStats
} from './utils/storage';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { GradeFilter } from './components/GradeFilter';
import { TopicCard } from './components/TopicCard';
import { TopicModal } from './components/TopicModal';
import { SimuladoView } from './components/SimuladoView';
import { TimelineView } from './components/TimelineView';
import { GlossaryView } from './components/GlossaryView';
import { TutorView } from './components/TutorView';
import { ProgressModal } from './components/ProgressModal';
import { Sparkles, Compass, BookOpen } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<'curriculum' | 'simulado' | 'timeline' | 'glossary' | 'tutor'>('curriculum');
  const [selectedGrade, setSelectedGrade] = useState<GradeId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Topic inspection modal
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);
  const [modalTab, setModalTab] = useState<'summary' | 'quiz'>('summary');
  
  // Progress modal
  const [showProgressModal, setShowProgressModal] = useState(false);

  // Storage states
  const [progressMap, setProgressMap] = useState<Record<string, TopicProgress>>({});
  const [userAnswers, setUserAnswers] = useState<UserAnswerRecord[]>([]);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [playerStats, setPlayerStats] = useState<PlayerStats>(getPlayerStats());

  useEffect(() => {
    setProgressMap(getStoredProgress());
    setUserAnswers(getStoredAnswers());
    setBookmarks(getBookmarks());
    setPlayerStats(getPlayerStats());
  }, []);

  const handleToggleBookmark = (topicId: string) => {
    const updated = toggleBookmark(topicId);
    setBookmarks(updated);
  };

  const handleOpenSummary = (topic: Topic) => {
    setActiveTopic(topic);
    setModalTab('summary');
  };

  const handleOpenQuiz = (topic: Topic) => {
    setActiveTopic(topic);
    setModalTab('quiz');
  };

  const handleSaveProgress = (topicId: string, score: number, totalQuestions: number, summaryRead: boolean) => {
    const current = progressMap[topicId];
    const newProgress: TopicProgress = {
      topicId,
      summaryRead: summaryRead || (current ? current.summaryRead : false),
      quizCompleted: true,
      score: Math.max(score, current?.score || 0),
      totalQuestions,
      lastStudied: Date.now(),
    };
    saveTopicProgress(newProgress);
    setProgressMap(getStoredProgress());
    setPlayerStats(getPlayerStats());
  };

  const handleRecordAnswer = (questionId: string, selectedOption: number, isCorrect: boolean) => {
    if (!activeTopic) return;
    const record: UserAnswerRecord = {
      questionId,
      topicId: activeTopic.id,
      selectedOption,
      isCorrect,
      attemptsCount: 1,
      timestamp: Date.now(),
    };
    recordUserAnswer(record);
    setUserAnswers(getStoredAnswers());
    setPlayerStats(getPlayerStats());
  };

  const handleResetProgress = () => {
    resetAllProgress();
    setProgressMap({});
    setUserAnswers([]);
    setPlayerStats(getPlayerStats());
  };

  const handleStartRandomQuiz = () => {
    const randomTopic = RIOEDUCA_TOPICS[Math.floor(Math.random() * RIOEDUCA_TOPICS.length)];
    handleOpenQuiz(randomTopic);
  };

  // Grade topic counts
  const gradeCounts: Record<GradeId, number> = {
    all: RIOEDUCA_TOPICS.length,
    '6': RIOEDUCA_TOPICS.filter(t => t.grade === '6').length,
    '7': RIOEDUCA_TOPICS.filter(t => t.grade === '7').length,
    '8': RIOEDUCA_TOPICS.filter(t => t.grade === '8').length,
    '9': RIOEDUCA_TOPICS.filter(t => t.grade === '9').length,
    'rio': RIOEDUCA_TOPICS.filter(t => t.grade === 'rio').length,
  };

  // Filter topics
  const filteredTopics = RIOEDUCA_TOPICS.filter(topic => {
    if (selectedGrade !== 'all' && topic.grade !== selectedGrade) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = topic.title.toLowerCase().includes(q);
      const matchSub = topic.subtitle.toLowerCase().includes(q);
      const matchTags = topic.tags.some(t => t.toLowerCase().includes(q));
      const matchIntro = topic.summary.introducao.join(' ').toLowerCase().includes(q);
      const matchRio = topic.summary.conexaoRio.toLowerCase().includes(q);
      return matchTitle || matchSub || matchTags || matchIntro || matchRio;
    }
    return true;
  });

  const completedCount = Object.values(progressMap).filter(p => p.quizCompleted).length;
  const totalQuestionsCount = RIOEDUCA_TOPICS.reduce((acc, t) => acc + t.questions.length, 0);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans">
      {/* 3-Zone Header with Player Stats */}
      <Header
        activeView={activeView}
        onNavigate={(view) => setActiveView(view)}
        onOpenProgress={() => setShowProgressModal(true)}
        completedCount={completedCount}
        totalTopics={RIOEDUCA_TOPICS.length}
        playerRankTitle={playerStats.rankTitle}
        playerXp={playerStats.xp}
        playerLevel={playerStats.level}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {activeView === 'curriculum' && (
          <>
            {/* Hero Banner with Search */}
            <HeroBanner
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onStartRandomQuiz={handleStartRandomQuiz}
              totalTopics={RIOEDUCA_TOPICS.length}
              totalQuestions={totalQuestionsCount}
            />

            {/* Curriculum Grade Filters */}
            <GradeFilter
              selectedGrade={selectedGrade}
              onSelectGrade={setSelectedGrade}
              counts={gradeCounts}
            />

            {/* Filter result feedback */}
            {searchQuery && (
              <div className="flex items-center justify-between text-xs text-stone-600 mb-4 px-1">
                <span>
                  Resultados para a busca "{searchQuery}": <strong>{filteredTopics.length} tópico(s)</strong>
                </span>
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-amber-800 hover:underline"
                >
                  Limpar busca
                </button>
              </div>
            )}

            {/* Topics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredTopics.map((topic) => (
                <TopicCard
                  key={topic.id}
                  topic={topic}
                  progress={progressMap[topic.id]}
                  isBookmarked={bookmarks.includes(topic.id)}
                  onToggleBookmark={handleToggleBookmark}
                  onOpenSummary={handleOpenSummary}
                  onOpenQuiz={handleOpenQuiz}
                />
              ))}
            </div>

            {filteredTopics.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8">
                <BookOpen className="w-10 h-10 text-stone-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-stone-900 font-serif mb-1">
                  Nenhum módulo encontrado
                </h3>
                <p className="text-sm text-stone-500 max-w-md mx-auto mb-4">
                  Não encontramos nenhum conteúdo correspondente aos termos digitados. Tente buscar por outros períodos ou palavras-chave.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedGrade('all');
                  }}
                  className="px-4 py-2 bg-amber-800 text-white rounded-lg text-xs font-semibold hover:bg-amber-900 transition-colors"
                >
                  Ver Todo o Currículo
                </button>
              </div>
            )}

            {/* Visual Heritage Highlight Cards */}
            <section className="mt-12 pt-8 border-t border-stone-200">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-wide mb-1">
                <span>Destaques Temáticos do Rioeduca</span>
                <span aria-hidden="true">·</span>
                <span>Memória & Identidade</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 font-serif mb-6">
                Patrimônio Histórico e Transformações da Cidade do Rio
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Rio Heritage Showcase Card */}
                <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src="/src/assets/images/historia_rio_patrimonio_1793895141243.jpg"
                      alt="Pintura histórica da Quinta da Boa Vista e do Paço Imperial no Rio de Janeiro"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="text-xs uppercase font-semibold text-amber-300">
                        Patrimônio Carioca
                      </span>
                      <h4 className="text-base font-bold font-serif leading-snug">
                        Do Paço Imperial à Quinta da Boa Vista
                      </h4>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                      Conheça os palácios, chafarizes coloniais e avenidas que foram cenários da Proclamação da Independência em 1822 e da República em 1889.
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                      <span className="text-xs text-stone-500 font-medium">História do Rio</span>
                      <button
                        onClick={() => setSelectedGrade('rio')}
                        className="text-xs font-semibold text-amber-800 hover:text-amber-900 flex items-center gap-1"
                      >
                        Explorar Módulos Cariocas →
                      </button>
                    </div>
                  </div>
                </div>

                {/* Brazilian Timeline Showcase Card */}
                <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src="/src/assets/images/historia_brasil_tempo_1793895141211.jpg"
                      alt="Composição artística com documentos históricos brasileiros e Constituição de 1988"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="text-xs uppercase font-semibold text-amber-300">
                        Cidadania & Leis
                      </span>
                      <h4 className="text-base font-bold font-serif leading-snug">
                        Constituição Cidadã e Direitos Sociais
                      </h4>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                      A evolução da cidadania brasileira: das lutas abolicionistas de André Rebouças à Consolidação das Leis do Trabalho e à Carta Magna de 1988.
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                      <span className="text-xs text-stone-500 font-medium">8º e 9º Anos</span>
                      <button
                        onClick={() => setActiveView('timeline')}
                        className="text-xs font-semibold text-amber-800 hover:text-amber-900 flex items-center gap-1"
                      >
                        Abrir Linha do Tempo Completa →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {activeView === 'simulado' && (
          <SimuladoView onOpenTopic={(topic) => handleOpenSummary(topic)} />
        )}

        {activeView === 'timeline' && <TimelineView />}

        {activeView === 'glossary' && <GlossaryView />}

        {activeView === 'tutor' && <TutorView />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200 mt-12 py-8 text-stone-600 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-stone-900 font-serif">História Rioeduca</span>
            <span aria-hidden="true">·</span>
            <span>Currículo da Secretaria Municipal de Educação do Rio de Janeiro (SME-Rio)</span>
          </div>

          <div className="text-stone-500">
            Resumos Didáticos · Quizzes com Tutoria Pedagógica Adaptativa · BNCC
          </div>
        </div>
      </footer>

      {/* Topic Detail Modal (Resumo & Quiz com Tutoria de Erro) */}
      {activeTopic && (
        <TopicModal
          topic={activeTopic}
          initialTab={modalTab}
          onClose={() => setActiveTopic(null)}
          onSaveProgress={handleSaveProgress}
          onRecordAnswer={handleRecordAnswer}
        />
      )}

      {/* Progress Dashboard Modal */}
      {showProgressModal && (
        <ProgressModal
          progressMap={progressMap}
          userAnswers={userAnswers}
          onClose={() => setShowProgressModal(false)}
          onOpenTopic={(topic) => {
            setActiveTopic(topic);
            setModalTab('summary');
          }}
          onResetProgress={handleResetProgress}
        />
      )}
    </div>
  );
}
