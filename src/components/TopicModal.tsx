import React, { useState, useEffect } from 'react';
import { Topic, Question, AchievementBadge } from '../types/history';
import { 
  X, BookOpen, Volume2, VolumeX, RotateCcw, 
  CheckCircle, AlertCircle, ArrowRight, Lightbulb, Compass, Award,
  Heart, Flame, Zap, VolumeOff, Sparkles, ShieldAlert
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundManager } from '../utils/soundEffects';
import { addPlayerXP, getPlayerStats } from '../utils/storage';

interface TopicModalProps {
  topic: Topic;
  initialTab?: 'summary' | 'quiz';
  onClose: () => void;
  onSaveProgress: (topicId: string, score: number, totalQuestions: number, summaryRead: boolean) => void;
  onRecordAnswer: (questionId: string, selectedOption: number, isCorrect: boolean) => void;
}

export const TopicModal: React.FC<TopicModalProps> = ({
  topic,
  initialTab = 'summary',
  onClose,
  onSaveProgress,
  onRecordAnswer,
}) => {
  const [activeTab, setActiveTab] = useState<'summary' | 'quiz'>(initialTab);
  
  // Audio Speech state
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSoundMuted, setIsSoundMuted] = useState(soundManager.getMuted());

  // Flashcards state
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  // Gamification & Quiz state
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showFullResolution, setShowFullResolution] = useState(false);
  const [attemptsCount, setAttemptsCount] = useState<Record<number, number>>({});
  const [userScore, setUserScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Game mechanics
  const [hearts, setHearts] = useState(3);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [xpEarnedInQuiz, setXpEarnedInQuiz] = useState(0);
  const [fiftyFiftyUsed, setFiftyFiftyUsed] = useState(false);
  const [hiddenOptions, setHiddenOptions] = useState<number[]>([]);
  const [showPreHint, setShowPreHint] = useState(false);
  const [unlockedBadges, setUnlockedBadges] = useState<AchievementBadge[]>([]);

  // Question statuses: 'pending' | 'correct-first' | 'correct-after-hint' | 'wrong'
  const [questionResults, setQuestionResults] = useState<Record<number, 'pending' | 'correct-first' | 'correct-after-hint' | 'wrong'>>({});

  const currentQuestion: Question | undefined = topic.questions[currentQuestionIdx];

  // Stop TTS on unmount or tab change
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleToggleSound = () => {
    const muted = soundManager.toggleMute();
    setIsSoundMuted(muted);
  };

  const handleToggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      alert('Seu navegador não suporta leitura em voz alta.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const fullText = `Resumo de História Rioeduca: ${topic.title}. ` +
        topic.summary.introducao.join(' ') + 
        ` Conexão com o Rio de Janeiro: ${topic.summary.conexaoRio}`;
      
      const utterance = new SpeechSynthesisUtterance(fullText);
      utterance.lang = 'pt-BR';
      utterance.rate = 1.0;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const toggleFlip = (id: string) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Powerup: 50/50 - eliminate 2 incorrect options
  const handleUseFiftyFifty = () => {
    if (fiftyFiftyUsed || hasSubmitted || !currentQuestion) return;
    soundManager.playPowerup();

    const correctIdx = currentQuestion.respostaCorreta;
    const wrongIndices = [0, 1, 2, 3].filter(idx => idx !== correctIdx);
    // pick 2 randomly
    const shuffledWrongs = wrongIndices.sort(() => 0.5 - Math.random());
    const toHide = shuffledWrongs.slice(0, 2);

    setHiddenOptions(toHide);
    setFiftyFiftyUsed(true);
  };

  // Powerup: Socratic Pre-Hint
  const handleUsePreHint = () => {
    if (showPreHint || hasSubmitted || !currentQuestion) return;
    soundManager.playPowerup();
    setShowPreHint(true);
  };

  const handleOptionSelect = (idx: number) => {
    if (hasSubmitted && selectedOption === currentQuestion.respostaCorreta) return;
    if (hiddenOptions.includes(idx)) return;

    setSelectedOption(idx);
    setHasSubmitted(true);

    const isCorrect = idx === currentQuestion.respostaCorreta;
    const currentAttempts = (attemptsCount[currentQuestionIdx] || 0) + 1;
    setAttemptsCount(prev => ({ ...prev, [currentQuestionIdx]: currentAttempts }));

    onRecordAnswer(currentQuestion.id, idx, isCorrect);

    if (isCorrect) {
      soundManager.playCorrect();
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);

      const streakBonus = Math.min(newStreak * 15, 60);
      const questionXp = currentAttempts === 1 ? 100 + streakBonus : 40;
      setXpEarnedInQuiz(prev => prev + questionXp);

      if (currentAttempts === 1) {
        setUserScore(prev => prev + 1);
        setQuestionResults(prev => ({ ...prev, [currentQuestionIdx]: 'correct-first' }));
      } else {
        setQuestionResults(prev => ({ ...prev, [currentQuestionIdx]: 'correct-after-hint' }));
      }
    } else {
      soundManager.playWrong();
      setStreak(0);
      setHearts(prev => Math.max(0, prev - 1));
      setQuestionResults(prev => ({ ...prev, [currentQuestionIdx]: 'wrong' }));
    }
  };

  const handleRetryCurrentQuestion = () => {
    setSelectedOption(null);
    setHasSubmitted(false);
    setShowFullResolution(false);
  };

  const handleShowResolution = () => {
    setShowFullResolution(true);
  };

  const handleRestoreHearts = () => {
    soundManager.playPowerup();
    setHearts(3);
    handleRetryCurrentQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestionIdx + 1 < topic.questions.length) {
      setCurrentQuestionIdx(prev => prev + 1);
      setSelectedOption(null);
      setHasSubmitted(false);
      setShowFullResolution(false);
      setHiddenOptions([]);
      setShowPreHint(false);
    } else {
      // Quiz finished! (10/10 questions done)
      setQuizFinished(true);
      const isPerfect = userScore === topic.questions.length;

      // Award XP to player profile & evaluate badges
      const { newBadges } = addPlayerXP(xpEarnedInQuiz, maxStreak, isPerfect, topic.grade);
      setUnlockedBadges(newBadges);

      onSaveProgress(topic.id, userScore, topic.questions.length, true);

      if (isPerfect) {
        soundManager.playLevelUp();
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.5 }
        });
      } else if (userScore >= 6) {
        soundManager.playCorrect();
        confetti({
          particleCount: 60,
          spread: 50,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setHasSubmitted(false);
    setShowFullResolution(false);
    setAttemptsCount({});
    setUserScore(0);
    setQuizFinished(false);
    setHearts(3);
    setStreak(0);
    setMaxStreak(0);
    setXpEarnedInQuiz(0);
    setFiftyFiftyUsed(false);
    setHiddenOptions([]);
    setShowPreHint(false);
    setQuestionResults({});
    setUnlockedBadges([]);
  };

  const handleMarkSummaryRead = () => {
    // Reward XP for reading the summary (+50 XP)
    addPlayerXP(50);
    onSaveProgress(topic.id, userScore, topic.questions.length, true);
    setActiveTab('quiz');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-xl border border-stone-200 overflow-hidden flex flex-col max-h-[94vh]">
        {/* Header Modal Bar */}
        <div className="px-6 py-3.5 border-b border-stone-200 flex items-center justify-between bg-stone-50/90">
          <div>
            <div className="flex items-center gap-2 text-xs text-stone-500 mb-0.5">
              <span className="font-semibold text-amber-800">{topic.gradeLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{topic.period}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 font-serif leading-tight">
              {topic.title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleToggleSound}
              title={isSoundMuted ? 'Ativar efeitos sonoros do jogo' : 'Silenciar sons'}
              className="p-2 text-stone-500 hover:text-stone-800 hover:bg-stone-200/60 rounded-lg transition-colors"
            >
              {isSoundMuted ? <VolumeOff className="w-4 h-4 text-stone-400" /> : <Volume2 className="w-4 h-4 text-amber-800" />}
            </button>

            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs (Functional segmented buttons) */}
        <div className="flex border-b border-stone-200 bg-stone-100/70 px-6 gap-2 pt-2">
          <button
            onClick={() => setActiveTab('summary')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold border-b-2 transition-all ${
              activeTab === 'summary'
                ? 'border-amber-800 text-amber-900 bg-white rounded-t-lg'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-700" />
            <span>1. Resumo Didático</span>
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold border-b-2 transition-all ${
              activeTab === 'quiz'
                ? 'border-amber-800 text-amber-900 bg-white rounded-t-lg'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-700" />
            <span>2. Jogo Quiz ({topic.questions.length} Questões)</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-5 sm:p-7 flex-1">
          {activeTab === 'summary' ? (
            /* =======================================
               TAB 1: RESUMO DIDÁTICO COMPLETO
               ======================================= */
            <div className="space-y-6">
              {/* TTS Read-Aloud Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-amber-50/80 rounded-xl border border-amber-200/70">
                <div className="flex items-center gap-2 text-xs text-amber-900">
                  <span className="font-semibold">Recurso de Acessibilidade:</span>
                  <span>Ouça o resumo narrado com pronúncia didática</span>
                </div>

                <button
                  onClick={handleToggleSpeech}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-800 hover:bg-amber-900 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  {isSpeaking ? (
                    <>
                      <VolumeX className="w-4 h-4 text-amber-200 animate-pulse" />
                      <span>Parar Leitura</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4 text-amber-200" />
                      <span>Ouvir Resumo em Voz Alta</span>
                    </>
                  )}
                </button>
              </div>

              {/* Contextual Introduction */}
              <div className="space-y-3.5 text-stone-700 leading-relaxed font-serif text-base sm:text-lg">
                {topic.summary.introducao.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Essential Keypoints */}
              <div className="bg-stone-50 rounded-xl p-5 border border-stone-200">
                <h4 className="text-sm font-bold uppercase tracking-wider text-stone-800 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-700" />
                  <span>Pontos Essenciais para Guardar</span>
                </h4>
                <ul className="space-y-2 text-sm text-stone-700">
                  {topic.summary.pontosChave.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-amber-800 font-bold shrink-0 mt-0.5">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Conexão Rioeduca / História Carioca */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-200 text-stone-800">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-2">
                  <Compass className="w-5 h-5 text-amber-800" />
                  <span>Olhar Carioca / Conexão com o Rio de Janeiro</span>
                </div>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {topic.summary.conexaoRio}
                </p>
              </div>

              {/* Timeline Anchors */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-stone-800 mb-3">
                  Marcos Cronológicos do Período
                </h4>
                <div className="relative pl-6 border-l-2 border-stone-300 space-y-4">
                  {topic.summary.linhaTempo.map((item, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-amber-800 border-2 border-white" />
                      <div className="text-xs font-bold text-amber-900 font-mono">
                        {item.ano}
                      </div>
                      <div className="text-sm text-stone-700">
                        {item.evento}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Warning Tip: Para Ficar Ligado! */}
              <div className="p-4 bg-stone-100 rounded-xl border border-stone-300 text-sm text-stone-800 flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-900">Dica Pedagógica / Não Caia na Pegadinha: </span>
                  <span>{topic.summary.paraFicarLigado}</span>
                </div>
              </div>

              {/* Interactive Flashcards */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-stone-800">
                    Flashcards de Fixação Rápida
                  </h4>
                  <span className="text-xs text-stone-500">
                    Clique no cartão para virar e ver a resposta
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {topic.flashcards.map((fc) => {
                    const isFlipped = !!flippedCards[fc.id];
                    return (
                      <div
                        key={fc.id}
                        onClick={() => toggleFlip(fc.id)}
                        className={`cursor-pointer rounded-xl p-4 border transition-all min-h-[110px] flex flex-col justify-between select-none ${
                          isFlipped
                            ? 'bg-amber-900 text-amber-50 border-amber-950 shadow-inner'
                            : 'bg-white hover:bg-stone-50 border-stone-200 text-stone-800 hover:border-amber-300 shadow-2xs'
                        }`}
                      >
                        <div className="text-xs font-semibold opacity-70 mb-1">
                          {isFlipped ? 'Significado' : 'Conceito'}
                        </div>
                        <div className={`text-sm ${isFlipped ? 'text-amber-100' : 'font-bold text-stone-900 font-serif'}`}>
                          {isFlipped ? fc.significado : fc.termo}
                        </div>
                        <div className="text-[10px] text-right opacity-60 mt-2">
                          Clique para {isFlipped ? 'ver termo' : 'ver significado'}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom CTA to start Quiz Game */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                <span className="text-xs text-stone-500">
                  Ao estudar o resumo você ganha +50 XP no seu perfil!
                </span>
                <button
                  onClick={handleMarkSummaryRead}
                  className="flex items-center gap-2 px-6 py-3 bg-amber-800 hover:bg-amber-900 active:scale-98 text-white font-semibold text-sm rounded-xl transition-all shadow-sm"
                >
                  <span>Iniciar o Quiz de 10 Questões</span>
                  <ArrowRight className="w-4 h-4 text-amber-200" />
                </button>
              </div>
            </div>
          ) : (
            /* =========================================================
               TAB 2: JOGO QUIZ DIDÁTICO INTERATIVO (10 QUESTÕES)
               ========================================================= */
            <div>
              {!quizFinished ? (
                <div className="space-y-5">
                  {/* GAME HUD BAR (Hearts, Streak, XP, Lifelines) */}
                  <div className="bg-stone-100/90 rounded-xl p-3 border border-stone-200/90 flex flex-wrap items-center justify-between gap-3 text-xs">
                    {/* Hearts (Vidas) */}
                    <div className="flex items-center gap-1.5 font-bold">
                      <span className="text-stone-500 text-[11px] uppercase tracking-wide mr-1">Vidas:</span>
                      {[1, 2, 3].map(h => (
                        <Heart
                          key={h}
                          className={`w-4 h-4 transition-all ${
                            h <= hearts
                              ? 'text-rose-500 fill-rose-500 scale-105'
                              : 'text-stone-300 fill-stone-200'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Streak (Combo) */}
                    <div className="flex items-center gap-1.5 font-bold">
                      <Flame className={`w-4 h-4 ${streak > 1 ? 'text-amber-500 fill-amber-500 animate-pulse' : 'text-stone-400'}`} />
                      <span className={streak > 1 ? 'text-amber-800 font-extrabold' : 'text-stone-600'}>
                        {streak > 1 ? `Combo x${streak}!` : 'Sequência: 0'}
                      </span>
                    </div>

                    {/* XP Indicator */}
                    <div className="flex items-center gap-1.5 font-mono font-bold text-amber-900 bg-amber-100/70 px-2.5 py-1 rounded-md border border-amber-200">
                      <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                      <span>+{xpEarnedInQuiz} XP</span>
                    </div>

                    {/* Lifelines: 50/50 & Dica */}
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={handleUseFiftyFifty}
                        disabled={fiftyFiftyUsed || hasSubmitted}
                        title="Eliminar 2 alternativas incorretas"
                        className={`flex items-center gap-1 px-2.5 py-1 rounded-md font-semibold text-[11px] border transition-all ${
                          fiftyFiftyUsed || hasSubmitted
                            ? 'bg-stone-200 text-stone-400 border-stone-300 cursor-not-allowed'
                            : 'bg-white hover:bg-amber-50 text-amber-900 border-amber-300 shadow-2xs hover:scale-102'
                        }`}
                      >
                        <Zap className="w-3.5 h-3.5 text-amber-600" />
                        <span>50:50 {fiftyFiftyUsed ? '(Usado)' : ''}</span>
                      </button>

                      <button
                        onClick={handleUsePreHint}
                        disabled={showPreHint || hasSubmitted}
                        title="Receber uma pista pedagógica antes de responder"
                        className={`flex items-center gap-1 px-2.5 py-1 rounded-md font-semibold text-[11px] border transition-all ${
                          showPreHint || hasSubmitted
                            ? 'bg-stone-200 text-stone-400 border-stone-300 cursor-not-allowed'
                            : 'bg-white hover:bg-amber-50 text-amber-900 border-amber-300 shadow-2xs hover:scale-102'
                        }`}
                      >
                        <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                        <span>Pista {showPreHint ? '(Ativa)' : ''}</span>
                      </button>
                    </div>
                  </div>

                  {/* 10-Question Progress Visual Trail */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
                      <span>Missão Histórica: Questão {currentQuestionIdx + 1} de {topic.questions.length}</span>
                      <span>Acertos de Primeira: {userScore}/10</span>
                    </div>

                    <div className="grid grid-cols-10 gap-1.5">
                      {topic.questions.map((_, i) => {
                        const status = questionResults[i];
                        const isCurrent = i === currentQuestionIdx;

                        let bgClass = 'bg-stone-200 text-stone-500';
                        if (status === 'correct-first') {
                          bgClass = 'bg-emerald-600 text-white font-bold';
                        } else if (status === 'correct-after-hint') {
                          bgClass = 'bg-amber-500 text-white font-bold';
                        } else if (status === 'wrong') {
                          bgClass = 'bg-rose-500 text-white font-bold';
                        } else if (isCurrent) {
                          bgClass = 'bg-stone-900 text-white ring-2 ring-amber-500 font-bold';
                        }

                        return (
                          <div
                            key={i}
                            className={`h-7 rounded-lg flex items-center justify-center text-xs font-mono transition-all ${bgClass}`}
                          >
                            {i + 1}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Out of Hearts Warning Modal overlay if hearts == 0 */}
                  {hearts === 0 && !hasSubmitted ? (
                    <div className="p-6 bg-rose-50 rounded-2xl border-2 border-rose-300 text-center space-y-4 shadow-sm">
                      <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mx-auto text-rose-600">
                        <ShieldAlert className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-rose-950 font-serif">
                          Vidas Esgotadas nesta Fase!
                        </h4>
                        <p className="text-xs sm:text-sm text-rose-800 max-w-md mx-auto mt-1">
                          Não desanime! Na História, os grandes pesquisadores erram hipóteses até encontrar as fontes certas.
                          Você pode recuperar suas vidas agora e continuar a missão, ou revisar o resumo.
                        </p>
                      </div>

                      <div className="flex items-center justify-center gap-3 pt-2">
                        <button
                          onClick={handleRestoreHearts}
                          className="flex items-center gap-2 px-5 py-2.5 bg-rose-700 hover:bg-rose-800 text-white text-xs font-bold rounded-xl transition-all shadow-xs"
                        >
                          <RotateCcw className="w-4 h-4" />
                          <span>Restaurar 3 Vidas & Continuar</span>
                        </button>
                        <button
                          onClick={() => setActiveTab('summary')}
                          className="px-4 py-2.5 bg-white text-stone-700 border border-stone-300 hover:bg-stone-100 text-xs font-medium rounded-xl transition-colors"
                        >
                          Revisar o Resumo
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      {/* Pre-hint banner if student clicked the lifeline */}
                      {showPreHint && !hasSubmitted && (
                        <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-300 flex items-start gap-2.5 text-xs text-amber-950">
                          <Lightbulb className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold">Pista do Professor: </span>
                            <span>{topic.summary.paraFicarLigado}</span>
                          </div>
                        </div>
                      )}

                      {/* Question Stem */}
                      <div className="space-y-1">
                        {currentQuestion.habilidadeBNCC && (
                          <div className="text-[11px] text-stone-500 font-mono">
                            Habilidade BNCC: {currentQuestion.habilidadeBNCC}
                          </div>
                        )}
                        <h3 className="text-base sm:text-lg font-bold text-stone-900 font-serif leading-snug">
                          {currentQuestion.pergunta}
                        </h3>
                      </div>

                      {/* Options List */}
                      <div className="space-y-2.5">
                        {currentQuestion.opcoes.map((opcao, idx) => {
                          const isChosen = selectedOption === idx;
                          const isCorrect = idx === currentQuestion.respostaCorreta;
                          const isHidden = hiddenOptions.includes(idx);
                          const showResult = hasSubmitted;

                          if (isHidden) {
                            return (
                              <div
                                key={idx}
                                className="p-3 rounded-xl border border-dashed border-stone-200 bg-stone-50 text-stone-300 text-xs flex items-center justify-between select-none"
                              >
                                <span>Opção {String.fromCharCode(65 + idx)} eliminada pela ajuda 50:50</span>
                                <Zap className="w-3.5 h-3.5 opacity-40" />
                              </div>
                            );
                          }

                          let buttonStyle = 'bg-white hover:bg-stone-50 border-stone-200 text-stone-800 hover:border-amber-300 shadow-2xs';
                          
                          if (showResult) {
                            if (isChosen && isCorrect) {
                              buttonStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold ring-2 ring-emerald-500';
                            } else if (isChosen && !isCorrect) {
                              buttonStyle = 'bg-rose-50 border-rose-500 text-rose-950 font-semibold ring-2 ring-rose-500';
                            } else if (showFullResolution && isCorrect) {
                              buttonStyle = 'bg-emerald-50/70 border-emerald-400 text-emerald-900';
                            }
                          }

                          return (
                            <button
                              key={idx}
                              onClick={() => handleOptionSelect(idx)}
                              disabled={hasSubmitted && selectedOption === currentQuestion.respostaCorreta}
                              className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all flex items-start gap-3 ${buttonStyle}`}
                            >
                              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                                isChosen && isCorrect
                                  ? 'bg-emerald-600 text-white'
                                  : isChosen && !isCorrect
                                  ? 'bg-rose-600 text-white'
                                  : 'bg-stone-100 text-stone-700'
                              }`}>
                                {String.fromCharCode(65 + idx)}
                              </span>

                              <span className="text-xs sm:text-sm leading-relaxed flex-1">
                                {opcao}
                              </span>

                              {showResult && isChosen && isCorrect && (
                                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                              )}
                              {showResult && isChosen && !isCorrect && (
                                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* FEEDBACK & PEDAGOGICAL REMEDIATION SECTION */}
                      {hasSubmitted && (
                        <div className="pt-2">
                          {selectedOption === currentQuestion.respostaCorreta ? (
                            /* RESPOSTA CORRETA: REFORÇO POSITIVO DO JOGO */
                            <div className="p-4 sm:p-5 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-950 space-y-3">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 font-bold text-emerald-900 text-sm sm:text-base">
                                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                                  <span>Excelente! Resposta correta!</span>
                                </div>
                                <span className="text-xs font-bold font-mono text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                                  +100 XP
                                </span>
                              </div>

                              <p className="text-xs sm:text-sm leading-relaxed text-emerald-900">
                                {currentQuestion.explicacaoGeral}
                              </p>

                              <div className="flex justify-end pt-1">
                                <button
                                  onClick={handleNextQuestion}
                                  className="flex items-center gap-2 px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 active:scale-98 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors shadow-xs"
                                >
                                  <span>
                                    {currentQuestionIdx + 1 < topic.questions.length ? 'Próxima Questão' : 'Ver Resultado Final do Jogo'}
                                  </span>
                                  <ArrowRight className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          ) : (
                            /* RESPOSTA INCORRETA: TUTORIA PEDAGÓGICA ADAPTATIVA */
                            <div className="p-4 sm:p-5 bg-amber-50/95 rounded-xl border-2 border-amber-300 text-stone-900 space-y-3 shadow-sm">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 font-bold text-amber-950 text-sm sm:text-base">
                                  <Lightbulb className="w-5 h-5 text-amber-700" />
                                  <span>Ajuda do Professor: Entenda o que aconteceu!</span>
                                </div>
                                <span className="text-xs text-rose-700 font-semibold flex items-center gap-1">
                                  <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" /> -1 vida
                                </span>
                              </div>

                              {/* Error diagnostics */}
                              {currentQuestion.diagnosticoErros[selectedOption!] && (
                                <div className="space-y-2 text-xs sm:text-sm">
                                  <div className="p-2.5 bg-white rounded-lg border border-amber-200">
                                    <span className="font-bold text-amber-900 block mb-0.5">
                                      Onde você se confundiu:
                                    </span>
                                    <span className="text-stone-700">
                                      {currentQuestion.diagnosticoErros[selectedOption!].misconception}
                                    </span>
                                  </div>

                                  <div className="p-2.5 bg-amber-100/70 rounded-lg border border-amber-200">
                                    <span className="font-bold text-amber-900 block mb-0.5">
                                      Pista Reflexiva do Professor:
                                    </span>
                                    <span className="text-stone-800">
                                      {currentQuestion.diagnosticoErros[selectedOption!].guidanceTip}
                                    </span>
                                  </div>

                                  <div className="p-2.5 bg-white rounded-lg border border-amber-200">
                                    <span className="font-bold text-amber-900 block mb-0.5">
                                      Conceito Histórico Correto:
                                    </span>
                                    <span className="text-stone-700">
                                      {currentQuestion.diagnosticoErros[selectedOption!].conceptReview}
                                    </span>
                                  </div>
                                </div>
                              )}

                              {/* Buttons */}
                              <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1 border-t border-amber-200">
                                <button
                                  onClick={handleRetryCurrentQuestion}
                                  className="flex items-center gap-1.5 px-3.5 py-2 bg-amber-800 hover:bg-amber-900 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
                                >
                                  <RotateCcw className="w-3.5 h-3.5" />
                                  <span>Aplicar a Dica & Tentar Novamente</span>
                                </button>

                                <div className="flex items-center gap-2">
                                  {!showFullResolution && (
                                    <button
                                      onClick={handleShowResolution}
                                      className="text-xs text-stone-600 hover:text-stone-900 underline"
                                    >
                                      Ver Resposta Correta
                                    </button>
                                  )}

                                  <button
                                    onClick={handleNextQuestion}
                                    className="flex items-center gap-1 px-3 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-medium rounded-lg transition-colors"
                                  >
                                    <span>Pular</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </div>

                              {showFullResolution && (
                                <div className="p-3 bg-white rounded-lg border border-stone-200 text-xs text-stone-700 mt-2">
                                  <span className="font-bold text-stone-900 block mb-0.5">
                                    Explicação Histórica Completa:
                                  </span>
                                  {currentQuestion.explicacaoGeral}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ) : (
                /* =========================================================
                   TELA FINAL: VITÓRIA DO JOGO & RELATÓRIO DO HISTORIADOR
                   ========================================================= */
                <div className="text-center py-6 sm:py-8 space-y-5 max-w-lg mx-auto">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto text-amber-800 shadow-xs">
                    <Award className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif">
                      Missão de 10 Questões Concluída!
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Módulo Curricular: {topic.title}
                    </p>
                  </div>

                  {/* Summary Game Stats */}
                  <div className="grid grid-cols-3 gap-2.5 p-4 bg-stone-50 rounded-xl border border-stone-200">
                    <div>
                      <div className="text-[11px] text-stone-500 uppercase font-semibold">Acertos 1ª Tentativa</div>
                      <div className="text-2xl font-bold font-mono text-amber-900 my-0.5">
                        {userScore} / 10
                      </div>
                      <div className="text-[10px] text-stone-500">
                        {Math.round((userScore / 10) * 100)}% de precisão
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] text-stone-500 uppercase font-semibold">Maior Combo</div>
                      <div className="text-2xl font-bold font-mono text-amber-700 my-0.5 flex items-center justify-center gap-1">
                        <Flame className="w-5 h-5 fill-amber-500 text-amber-500" />
                        <span>{maxStreak}</span>
                      </div>
                      <div className="text-[10px] text-stone-500">Acertos seguidos</div>
                    </div>

                    <div>
                      <div className="text-[11px] text-stone-500 uppercase font-semibold">XP Ganho</div>
                      <div className="text-2xl font-bold font-mono text-emerald-700 my-0.5">
                        +{xpEarnedInQuiz}
                      </div>
                      <div className="text-[10px] text-stone-500">Pontos para subir de rank</div>
                    </div>
                  </div>

                  {/* Unlocked Badges celebration */}
                  {unlockedBadges.length > 0 && (
                    <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-300 text-left space-y-2">
                      <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-amber-700" />
                        <span>Nova(s) Conquista(s) Desbloqueada(s)!</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {unlockedBadges.map(b => (
                          <div key={b.id} className="flex items-center gap-1.5 px-2.5 py-1 bg-white rounded-lg border border-amber-200 text-xs text-stone-800">
                            <span>{b.icon}</span>
                            <span className="font-semibold">{b.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
                    <button
                      onClick={handleRestartQuiz}
                      className="flex items-center gap-1.5 px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-lg transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Jogar Novamente</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('summary')}
                      className="flex items-center gap-1.5 px-4 py-2.5 bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-semibold rounded-lg transition-colors"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Reler Resumo</span>
                    </button>

                    <button
                      onClick={onClose}
                      className="px-5 py-2.5 bg-amber-800 hover:bg-amber-900 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
                    >
                      Próxima Missão
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
