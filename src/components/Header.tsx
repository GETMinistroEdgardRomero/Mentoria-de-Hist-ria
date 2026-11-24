import React from 'react';
import { BookOpen, Award, Sparkles } from 'lucide-react';

interface HeaderProps {
  activeView: 'curriculum' | 'simulado' | 'timeline' | 'glossary' | 'tutor';
  onNavigate: (view: 'curriculum' | 'simulado' | 'timeline' | 'glossary' | 'tutor') => void;
  onOpenProgress: () => void;
  completedCount: number;
  totalTopics: number;
  playerRankTitle?: string;
  playerXp?: number;
  playerLevel?: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  onNavigate,
  onOpenProgress,
  completedCount,
  totalTopics,
  playerRankTitle = 'Aprendiz do Tempo',
  playerXp = 50,
  playerLevel = 1,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <div 
          onClick={() => onNavigate('curriculum')}
          className="flex items-center gap-2.5 cursor-pointer whitespace-nowrap shrink-0 group"
        >
          <div className="w-9 h-9 rounded-lg bg-amber-800 text-amber-100 flex items-center justify-center font-bold text-lg shadow-xs group-hover:bg-amber-900 transition-colors">
            <BookOpen className="w-5 h-5 text-amber-200" />
          </div>
          <span className="text-xl font-bold tracking-tight text-stone-900 group-hover:text-amber-900 transition-colors">
            História Rioeduca
          </span>
        </div>

        {/* Zone 2: Navigation Links (4-5 single line text links) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
          <button
            onClick={() => onNavigate('curriculum')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeView === 'curriculum'
                ? 'text-amber-900 font-semibold border-b-2 border-amber-800'
                : 'hover:text-stone-900'
            }`}
          >
            Currículo & Quizzes
          </button>
          <button
            onClick={() => onNavigate('simulado')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeView === 'simulado'
                ? 'text-amber-900 font-semibold border-b-2 border-amber-800'
                : 'hover:text-stone-900'
            }`}
          >
            Simulado Desafio
          </button>
          <button
            onClick={() => onNavigate('timeline')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeView === 'timeline'
                ? 'text-amber-900 font-semibold border-b-2 border-amber-800'
                : 'hover:text-stone-900'
            }`}
          >
            Linha do Tempo
          </button>
          <button
            onClick={() => onNavigate('glossary')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeView === 'glossary'
                ? 'text-amber-900 font-semibold border-b-2 border-amber-800'
                : 'hover:text-stone-900'
            }`}
          >
            Glossário
          </button>
          <button
            onClick={() => onNavigate('tutor')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeView === 'tutor'
                ? 'text-amber-900 font-semibold border-b-2 border-amber-800'
                : 'hover:text-stone-900'
            }`}
          >
            Tutor Virtual
          </button>
        </nav>

        {/* Zone 3: Primary Action Button with Gamification XP */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenProgress}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-white bg-amber-800 rounded-lg hover:bg-amber-900 active:scale-98 transition-all whitespace-nowrap shrink-0 shadow-xs"
          >
            <div className="w-5 h-5 rounded-full bg-amber-700 flex items-center justify-center text-[10px] font-bold text-amber-200">
              {playerLevel}
            </div>
            <span className="hidden sm:inline">{playerRankTitle}</span>
            <span className="font-mono text-amber-200 bg-amber-900/60 px-1.5 py-0.5 rounded text-[11px] flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-300" />
              {playerXp} XP
            </span>
          </button>
        </div>
      </div>

      {/* Mobile nav bar row for small screens */}
      <div className="md:hidden flex items-center justify-around border-t border-stone-200 bg-stone-50/90 px-2 py-2 text-xs font-medium text-stone-600 overflow-x-auto">
        <button
          onClick={() => onNavigate('curriculum')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap ${activeView === 'curriculum' ? 'bg-amber-100 text-amber-950 font-semibold' : ''}`}
        >
          Currículo
        </button>
        <button
          onClick={() => onNavigate('simulado')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap ${activeView === 'simulado' ? 'bg-amber-100 text-amber-950 font-semibold' : ''}`}
        >
          Simulado
        </button>
        <button
          onClick={() => onNavigate('timeline')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap ${activeView === 'timeline' ? 'bg-amber-100 text-amber-950 font-semibold' : ''}`}
        >
          Linha do Tempo
        </button>
        <button
          onClick={() => onNavigate('glossary')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap ${activeView === 'glossary' ? 'bg-amber-100 text-amber-950 font-semibold' : ''}`}
        >
          Glossário
        </button>
        <button
          onClick={() => onNavigate('tutor')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap ${activeView === 'tutor' ? 'bg-amber-100 text-amber-950 font-semibold' : ''}`}
        >
          Tutor
        </button>
      </div>
    </header>
  );
};
