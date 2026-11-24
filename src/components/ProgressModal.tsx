import React from 'react';
import { RIOEDUCA_TOPICS } from '../data/rioeducaData';
import { TopicProgress, UserAnswerRecord, Topic } from '../types/history';
import { X, Award, CheckCircle2, RotateCcw, AlertCircle, Sparkles, Flame, Shield } from 'lucide-react';
import { getPlayerStats, calculateRankTitle, ACHIEVEMENT_BADGES } from '../utils/storage';

interface ProgressModalProps {
  progressMap: Record<string, TopicProgress>;
  userAnswers: UserAnswerRecord[];
  onClose: () => void;
  onOpenTopic: (topic: Topic) => void;
  onResetProgress: () => void;
}

export const ProgressModal: React.FC<ProgressModalProps> = ({
  progressMap,
  userAnswers,
  onClose,
  onOpenTopic,
  onResetProgress,
}) => {
  const playerStats = getPlayerStats();
  const { rankTitle, nextLevelXp, level } = calculateRankTitle(playerStats.xp);

  const totalTopics = RIOEDUCA_TOPICS.length;
  const completedTopics = Object.values(progressMap).filter(p => p.quizCompleted).length;
  const readSummaries = Object.values(progressMap).filter(p => p.summaryRead).length;

  const totalAnswered = userAnswers.length;
  const totalCorrect = userAnswers.filter(a => a.isCorrect).length;
  const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  // Topics that need review (quiz completed with score < total questions or answered wrong)
  const wrongQuestionIds = new Set(userAnswers.filter(a => !a.isCorrect).map(a => a.questionId));
  const topicsNeedingReview = RIOEDUCA_TOPICS.filter(t => 
    t.questions.some(q => wrongQuestionIds.has(q.id))
  );

  const xpPercent = Math.min(100, Math.round((playerStats.xp / nextLevelXp) * 100));

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-800" />
            <h3 className="text-xl font-bold text-stone-900 font-serif">
              Meu Painel do Historiador & Aprendizagem
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Gamified Level & Rank Banner */}
          <div className="p-5 bg-gradient-to-r from-amber-900 to-stone-900 text-white rounded-2xl shadow-xs space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-xs text-amber-300 font-semibold uppercase tracking-wider">
                  Nível {level} do Historiador Rioeduca
                </span>
                <h4 className="text-xl sm:text-2xl font-bold font-serif">
                  {rankTitle}
                </h4>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-xl text-xs font-mono font-bold text-amber-200 border border-white/15">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>{playerStats.xp} XP Acumulados</span>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-xl text-xs font-mono font-bold text-amber-200 border border-white/15">
                  <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>Recorde: {playerStats.highestStreak} seguidas</span>
                </div>
              </div>
            </div>

            {/* XP Progression Bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-stone-300">
                <span>Progresso para o próximo nível</span>
                <span>{playerStats.xp} / {nextLevelXp} XP</span>
              </div>
              <div className="w-full h-2.5 bg-black/40 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 to-amber-200 rounded-full transition-all duration-500" 
                  style={{ width: `${xpPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Badges / Conquistas Grid */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-amber-800" />
                <span>Medalhas & Conquistas Desbloqueáveis</span>
              </h4>
              <span className="text-xs text-stone-500">
                {playerStats.unlockedBadgeIds.length}/{ACHIEVEMENT_BADGES.length} Desbloqueadas
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {ACHIEVEMENT_BADGES.map(badge => {
                const isUnlocked = playerStats.unlockedBadgeIds.includes(badge.id);
                return (
                  <div
                    key={badge.id}
                    className={`p-3 rounded-xl border text-xs transition-all ${
                      isUnlocked
                        ? 'bg-amber-50/70 border-amber-300 text-stone-800'
                        : 'bg-stone-50 border-stone-200 text-stone-400 opacity-60'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{badge.icon}</span>
                      <span className="font-bold text-stone-900 leading-tight">
                        {badge.title}
                      </span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-stone-600">
                      {badge.description}
                    </p>
                    <div className="mt-1.5 text-[10px] font-semibold text-right">
                      {isUnlocked ? '✓ Conquistado' : 'Bloqueado'}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Key KPI Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-center">
              <div className="text-2xl font-bold font-mono text-stone-900">
                {completedTopics}/{totalTopics}
              </div>
              <div className="text-xs text-stone-500 mt-1 font-medium">
                Quizzes (10q) Feitos
              </div>
            </div>

            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-center">
              <div className="text-2xl font-bold font-mono text-stone-900">
                {readSummaries}/{totalTopics}
              </div>
              <div className="text-xs text-stone-500 mt-1 font-medium">
                Resumos Estudados
              </div>
            </div>

            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-center">
              <div className="text-2xl font-bold font-mono text-amber-900">
                {totalAnswered}
              </div>
              <div className="text-xs text-stone-500 mt-1 font-medium">
                Respostas Dadas
              </div>
            </div>

            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-center">
              <div className="text-2xl font-bold font-mono text-emerald-800">
                {accuracy}%
              </div>
              <div className="text-xs text-stone-500 mt-1 font-medium">
                Taxa de Precisão
              </div>
            </div>
          </div>

          {/* Topics needing review */}
          {topicsNeedingReview.length > 0 && (
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-2">
                <AlertCircle className="w-4 h-4 text-amber-700" />
                <span>Recomendação de Revisão (Onde Você Já Cometeu Erros):</span>
              </div>
              <p className="text-xs text-amber-800 mb-3 leading-relaxed">
                Revisite os resumos destes temas para reforçar os pontos onde você teve dúvidas nas questões:
              </p>
              <div className="space-y-2">
                {topicsNeedingReview.map(topic => (
                  <div
                    key={topic.id}
                    className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-amber-200 text-xs"
                  >
                    <span className="font-semibold text-stone-800">
                      {topic.gradeLabel}: {topic.title}
                    </span>
                    <button
                      onClick={() => {
                        onClose();
                        onOpenTopic(topic);
                      }}
                      className="px-2.5 py-1 bg-amber-800 text-white rounded font-medium hover:bg-amber-900 transition-colors"
                    >
                      Revisar Resumo
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mastered topics list */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-stone-800 mb-3">
              Módulos Curriculares Rioeduca
            </h4>
            <div className="space-y-2">
              {RIOEDUCA_TOPICS.map(topic => {
                const prog = progressMap[topic.id];
                const isCompleted = prog?.quizCompleted;
                const isRead = prog?.summaryRead;

                return (
                  <div
                    key={topic.id}
                    className="flex items-center justify-between p-3 bg-stone-50 rounded-xl border border-stone-200 hover:border-stone-300 text-xs"
                  >
                    <div>
                      <span className="font-bold text-amber-800 mr-2">{topic.gradeLabel}</span>
                      <span className="font-semibold text-stone-800">{topic.title}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {isCompleted ? (
                        <span className="flex items-center gap-1 font-semibold text-emerald-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>{prog.score}/10</span>
                        </span>
                      ) : isRead ? (
                        <span className="text-stone-500 font-medium">Lido</span>
                      ) : (
                        <span className="text-stone-400">Pendente</span>
                      )}

                      <button
                        onClick={() => {
                          onClose();
                          onOpenTopic(topic);
                        }}
                        className="px-2.5 py-1 text-stone-700 bg-white border border-stone-200 hover:bg-stone-100 rounded font-medium transition-colors"
                      >
                        Abrir
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Reset progress */}
          <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs">
            <span className="text-stone-500">
              Seu progresso é gravado localmente no navegador.
            </span>
            <button
              onClick={() => {
                if (confirm('Deseja realmente zerar seu progresso e XP de estudos?')) {
                  onResetProgress();
                }
              }}
              className="text-rose-700 hover:text-rose-900 underline flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Zerar Progresso</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
