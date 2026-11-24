import React, { useState } from 'react';
import { GLOSSARY_ITEMS } from '../data/glossary';
import { Search, BookMarked } from 'lucide-react';

export const GlossaryView: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('all');

  const categories = Array.from(new Set(GLOSSARY_ITEMS.map(item => item.categoria)));

  const filtered = GLOSSARY_ITEMS.filter(item => {
    if (selectedCat !== 'all' && item.categoria !== selectedCat) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return (
        item.termo.toLowerCase().includes(q) ||
        item.definicao.toLowerCase().includes(q) ||
        item.exemploOuContexto.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="max-w-4xl mx-auto pb-12">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-wide mb-1">
          <span>Vocabulário & Conceitos Históricos</span>
          <span aria-hidden="true">·</span>
          <span>Base Rioeduca</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif">
          Glossário Histórico Carioca & Brasileiro
        </h2>
        <p className="text-sm text-stone-600 mt-1">
          Dicionário de termos essenciais, expressões populares da época e conceitos historiográficos frequentemente cobrados nas provas e avaliações.
        </p>
      </div>

      {/* Search and Category Filter */}
      <div className="bg-white rounded-xl border border-stone-200 p-4 mb-6 space-y-3 shadow-2xs">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar termo no glossário (ex: Alforria, Bota-Abaixo, Valongo, Tamoios)..."
            className="w-full pl-10 pr-4 py-2 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-800 focus:bg-white text-stone-900 transition-all"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <button
            onClick={() => setSelectedCat('all')}
            className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
              selectedCat === 'all'
                ? 'bg-amber-900 text-white font-semibold'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Todas as Categorias
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                selectedCat === cat
                  ? 'bg-amber-900 text-white font-semibold'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of glossary terms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-xl border border-stone-200 hover:border-amber-300 p-5 space-y-2.5 transition-all shadow-2xs"
          >
            <div className="flex items-center justify-between text-xs text-stone-500">
              <span className="font-semibold text-amber-800">{item.categoria}</span>
              <BookMarked className="w-4 h-4 text-stone-400" />
            </div>

            <h3 className="text-lg font-bold text-stone-900 font-serif">
              {item.termo}
            </h3>

            <p className="text-sm text-stone-700 leading-relaxed">
              {item.definicao}
            </p>

            <div className="p-2.5 bg-stone-50 rounded-lg border border-stone-100 text-xs text-stone-600">
              <strong className="text-stone-800">No contexto do Rio/Brasil: </strong>
              <span>{item.exemploOuContexto}</span>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-stone-200 text-stone-500 text-sm">
          Nenhum termo encontrado com a busca "{search}". Tente buscar por palavras como "Valongo", "Coronelismo" ou "Sambaqui".
        </div>
      )}
    </div>
  );
};
