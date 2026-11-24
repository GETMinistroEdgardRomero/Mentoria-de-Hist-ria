import React from 'react';
import { GradeId } from '../types/history';

interface GradeFilterProps {
  selectedGrade: GradeId;
  onSelectGrade: (grade: GradeId) => void;
  counts: Record<GradeId, number>;
}

export const GradeFilter: React.FC<GradeFilterProps> = ({
  selectedGrade,
  onSelectGrade,
  counts,
}) => {
  const options: { id: GradeId; label: string; description: string }[] = [
    { id: 'all', label: 'Todos os Conteúdos', description: 'Visão integral' },
    { id: '6', label: '6º Ano', description: 'Antiguidade & Origens' },
    { id: '7', label: '7º Ano', description: 'Idade Média & Fundação do Rio' },
    { id: '8', label: '8º Ano', description: 'Brasil Império & Abolição' },
    { id: '9', label: '9º Ano', description: 'República, Vargas & Ditadura' },
    { id: 'rio', label: 'História do Rio', description: 'Memória & Patrimônio Carioca' },
  ];

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-bold text-stone-900 tracking-tight">
          Navegar por Ano Escolar & Segmento
        </h2>
        <span className="text-xs text-stone-500">
          Base Curricular Rioeduca
        </span>
      </div>

      {/* Segmented button bar */}
      <div className="flex items-center gap-1.5 p-1.5 bg-stone-200/80 rounded-xl overflow-x-auto border border-stone-300/80">
        {options.map((opt) => {
          const isActive = selectedGrade === opt.id;
          const count = opt.id === 'all' 
            ? Object.values(counts).reduce((acc, c) => acc + c, 0) - (counts['all'] || 0)
            : counts[opt.id] || 0;

          return (
            <button
              key={opt.id}
              onClick={() => onSelectGrade(opt.id)}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                isActive
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-700 hover:text-stone-950 hover:bg-white/50'
              }`}
            >
              <span>{opt.label}</span>
              <span className={`text-[11px] px-1.5 py-0.2 rounded ${
                isActive ? 'bg-amber-100 text-amber-900 font-bold' : 'bg-stone-300/70 text-stone-600'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
