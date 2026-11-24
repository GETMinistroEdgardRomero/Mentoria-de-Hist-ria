import React from 'react';
import { Topic, TopicProgress } from '../types/history';
import { BookOpen, HelpCircle, CheckCircle2, Bookmark, Clock } from 'lucide-react';

interface TopicCardProps {
  topic: Topic;
  progress?: TopicProgress;
  isBookmarked: boolean;
  onToggleBookmark: (topicId: string) => void;
  onOpenSummary: (topic: Topic) => void;
  onOpenQuiz: (topic: Topic) => void;
}

export const TopicCard: React.FC<TopicCardProps> = ({
  topic,
  progress,
  isBookmarked,
  onToggleBookmark,
  onOpenSummary,
  onOpenQuiz,
}) => {
  const isCompleted = progress?.quizCompleted;
  const isScorePerfect = isCompleted && progress?.score === topic.questions.length;

  return (
    <article className="flex flex-col justify-between bg-white rounded-xl border border-stone-200 hover:border-amber-300 hover:shadow-md transition-all p-5 relative group">
      <div>
        {/* Top unboxed metadata line */}
        <div className="flex items-center justify-between gap-2 text-xs text-stone-500 mb-2.5">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-semibold text-amber-800">{topic.gradeLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{topic.period}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 text-stone-400">
              <Clock className="w-3.5 h-3.5" />
              {topic.tempoLeituraMin} min
            </span>
          </div>

          <button
            onClick={() => onToggleBookmark(topic.id)}
            title={isBookmarked ? 'Remover dos favoritos' : 'Salvar tópico'}
            className="text-stone-400 hover:text-amber-700 transition-colors p-1"
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-600 text-amber-600' : ''}`} />
          </button>
        </div>

        {/* Title and subtitle */}
        <h3 className="text-lg font-bold text-stone-900 group-hover:text-amber-900 transition-colors mb-1.5 font-serif leading-snug">
          {topic.title}
        </h3>

        <p className="text-sm text-stone-600 mb-3.5 line-clamp-2 leading-relaxed">
          {topic.subtitle}
        </p>

        {/* Local Rio Connection Highlight Banner */}
        <div className="mb-4 p-2.5 bg-amber-50/70 border border-amber-200/60 rounded-lg text-xs text-amber-950 leading-relaxed">
          <span className="font-bold text-amber-900">Conexão Rio: </span>
          <span className="line-clamp-2">{topic.summary.conexaoRio}</span>
        </div>
      </div>

      {/* Progress & Actions */}
      <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-3">
        {/* Progress status */}
        <div className="flex items-center gap-1.5 text-xs">
          {isCompleted ? (
            <span className="flex items-center gap-1 font-medium text-emerald-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>
                {isScorePerfect ? 'Gabaritado' : `${progress?.score}/${progress?.totalQuestions}`}
              </span>
            </span>
          ) : progress?.summaryRead ? (
            <span className="text-stone-500 font-medium">Resumo lido</span>
          ) : (
            <span className="text-stone-400">Ainda não estudado</span>
          )}
        </div>

        {/* Button Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpenSummary(topic)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5 text-stone-500" />
            <span>Resumo</span>
          </button>

          <button
            onClick={() => onOpenQuiz(topic)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-lg transition-colors shadow-xs"
          >
            <HelpCircle className="w-3.5 h-3.5 text-amber-200" />
            <span>Quiz ({topic.questions.length})</span>
          </button>
        </div>
      </div>
    </article>
  );
};
