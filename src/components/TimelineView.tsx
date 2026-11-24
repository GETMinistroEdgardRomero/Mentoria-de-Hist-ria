import React, { useState } from 'react';
import { TIMELINE_EVENTS } from '../data/timelineEvents';
import { HistoricalPeriod } from '../types/history';
import { MapPin } from 'lucide-react';

export const TimelineView: React.FC = () => {
  const [filterPeriod, setFilterPeriod] = useState<string>('all');
  const [onlyRio, setOnlyRio] = useState(false);

  const periods: HistoricalPeriod[] = [
    'Pré-História & Antiguidade',
    'Mundo Moderno & Expansão',
    'Brasil Colônia',
    'Brasil Império',
    'Brasil República',
    'História do Rio de Janeiro',
  ];

  const filteredEvents = TIMELINE_EVENTS.filter(evt => {
    if (filterPeriod !== 'all' && evt.periodo !== filterPeriod) return false;
    if (onlyRio && !evt.destaqueRio) return false;
    return true;
  });

  return (
    <div className="max-w-4xl mx-auto pb-12">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-wide mb-1">
          <span>Cronologia Histórica</span>
          <span aria-hidden="true">·</span>
          <span>Do Passado Remoto ao Rio Contemporâneo</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif">
          Linha do Tempo Rioeduca
        </h2>
        <p className="text-sm text-stone-600 mt-1">
          Explore os grandes acontecimentos históricos organizados cronologicamente, com ênfase especial nos marcos que transformaram a cidade do Rio de Janeiro.
        </p>
      </div>

      {/* Filters (Segmented interactive buttons) */}
      <div className="bg-white rounded-xl border border-stone-200 p-4 mb-8 space-y-3 shadow-2xs">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setFilterPeriod('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              filterPeriod === 'all'
                ? 'bg-amber-900 text-white font-semibold'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Todos os Períodos
          </button>
          {periods.map(p => (
            <button
              key={p}
              onClick={() => setFilterPeriod(p)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                filterPeriod === p
                  ? 'bg-amber-900 text-white font-semibold'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
          <label className="flex items-center gap-2 text-xs font-semibold text-stone-700 cursor-pointer">
            <input
              type="checkbox"
              checked={onlyRio}
              onChange={(e) => setOnlyRio(e.target.checked)}
              className="rounded text-amber-800 focus:ring-amber-800 w-4 h-4 cursor-pointer"
            />
            <span>Exibir apenas eventos com destaque no Rio de Janeiro</span>
          </label>

          <span className="text-xs text-stone-500">
            {filteredEvents.length} marcos listados
          </span>
        </div>
      </div>

      {/* Visual Timeline Tree */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-amber-800/40 space-y-8 ml-2 sm:ml-4">
        {filteredEvents.map((evt, idx) => (
          <div key={idx} className="relative group">
            {/* Dot marker */}
            <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-white shadow-xs transition-transform group-hover:scale-125 ${
              evt.destaqueRio ? 'bg-amber-800 ring-2 ring-amber-300' : 'bg-stone-600'
            }`} />

            <div className="bg-white rounded-xl border border-stone-200 hover:border-amber-300 p-5 transition-all shadow-2xs">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs mb-2">
                <span className="font-mono font-bold text-amber-900 text-sm">
                  {evt.ano}
                </span>

                <div className="flex items-center gap-2 text-stone-500">
                  <span>{evt.periodo}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1 font-medium text-stone-600">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    {evt.localizacao}
                  </span>
                </div>
              </div>

              <h4 className="text-base sm:text-lg font-bold text-stone-900 font-serif mb-1.5 group-hover:text-amber-900 transition-colors">
                {evt.titulo}
              </h4>

              <p className="text-sm text-stone-600 leading-relaxed">
                {evt.descricao}
              </p>

              {evt.destaqueRio && (
                <div className="mt-3 pt-2 border-t border-stone-100 text-xs font-semibold text-amber-800 flex items-center gap-1">
                  <span>★ Marco de História e Memória Carioca</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
