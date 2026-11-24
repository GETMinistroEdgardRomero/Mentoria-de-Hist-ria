import React from 'react';
import { Search, Sparkles } from 'lucide-react';

interface HeroBannerProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onStartRandomQuiz: () => void;
  totalTopics: number;
  totalQuestions: number;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  searchQuery,
  onSearchChange,
  onStartRandomQuiz,
  totalTopics,
  totalQuestions,
}) => {
  return (
    <section className="relative overflow-hidden bg-stone-900 text-stone-100 rounded-2xl mb-8 border border-stone-800 shadow-sm">
      {/* Background Image with contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_historia_rioeduca_1793895140656.jpg"
          alt="Estudos históricos com livros, pergaminhos e paisagem do Rio de Janeiro"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-900/60" />
      </div>

      <div className="relative z-10 px-6 py-8 sm:px-10 sm:py-12 max-w-4xl">
        {/* Unboxed subtle metadata line */}
        <div className="flex items-center gap-2 text-xs font-medium text-amber-300 mb-3 tracking-wide uppercase">
          <span>Currículo SME-Rio / Rioeduca</span>
          <span aria-hidden="true">·</span>
          <span>História Geral & do Brasil</span>
          <span aria-hidden="true">·</span>
          <span>Memória & Patrimônio Carioca</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight font-serif">
          Aprenda História com Resumos Didáticos e Quizzes Interativos
        </h1>

        <p className="text-base sm:text-lg text-stone-300 mb-6 leading-relaxed max-w-2xl">
          Estude o conteúdo completo do 6º ao 9º ano e a história da Cidade Maravilhosa.
          Leia o resumo essencial antes de cada desafio e, se errar alguma questão, receba
          ajuda pedagógica imediata explicando exatamente onde você se confundiu.
        </p>

        {/* Search bar and quick action */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-xl">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Buscar tema, personagem, data ou palavra-chave..."
              className="w-full pl-11 pr-4 py-2.5 text-sm bg-white/10 hover:bg-white/15 focus:bg-white focus:text-stone-900 text-white placeholder-stone-400 rounded-lg border border-stone-700/80 focus:border-amber-500 focus:outline-none transition-all shadow-inner"
            />
          </div>

          <button
            onClick={onStartRandomQuiz}
            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-amber-600 hover:bg-amber-500 active:scale-98 text-white text-sm font-semibold rounded-lg transition-all shadow-sm whitespace-nowrap shrink-0"
          >
            <Sparkles className="w-4 h-4 text-amber-200" />
            <span>Quiz Rápido Aleatório</span>
          </button>
        </div>

        {/* Clean unboxed stats metadata */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-400 mt-6 pt-4 border-t border-stone-800">
          <span>{totalTopics} Módulos Curriculares</span>
          <span aria-hidden="true">·</span>
          <span>{totalQuestions} Questões com Tutoria de Erro</span>
          <span aria-hidden="true">·</span>
          <span>Alinhado às Matrizes da BNCC & SME-Rio</span>
          <span aria-hidden="true">·</span>
          <span>Resumos com Síntese & Áudio</span>
        </div>
      </div>
    </section>
  );
};
