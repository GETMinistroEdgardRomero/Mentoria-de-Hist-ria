import React, { useState } from 'react';
import { RIOEDUCA_TOPICS } from '../data/rioeducaData';
import { Question, Topic, GradeId } from '../types/history';
import { 
  Sparkles, CheckCircle, AlertCircle, ArrowRight, RotateCcw, 
  Lightbulb, Award, Filter
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundManager } from '../utils/soundEffects';

interface SimuladoQuestionItem {
  topic: Topic;
  question: Question;
}

export const SimuladoView: React.FC<{ onOpenTopic: (topic: Topic) => void }> = ({ onOpenTopic }) => {
  const [selectedGrade, setSelectedGrade] = useState<GradeId>('all');
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [isSimuladoActive, setIsSimuladoActive] = useState(false);

  // Active quiz state
  const [quizPool, setQuizPool] = useState<SimuladoQuestionItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState<Record<number, number>>({});
  const [finished, setFinished] = useState(false);

  const startSimulado = () => {
    let poolTopics = RIOEDUCA_TOPICS;
    if (selectedGrade !== 'all') {
      poolTopics = RIOEDUCA_TOPICS.filter(t => t.grade === selectedGrade);
    }

    const items: SimuladoQuestionItem[] = [];
    poolTopics.forEach(t => {
      t.questions.forEach(q => {
        items.push({ topic: t, question: q });
      });
    });

    // Shuffle
    const shuffled = [...items].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(questionCount, shuffled.length));

    setQuizPool(selected);
    setCurrentIndex(0);
    setSelectedOption(null);
    setHasSubmitted(false);
    setScore(0);
    setAttempts({});
    setFinished(false);
    setIsSimuladoActive(true);
  };

  const currentItem = quizPool[currentIndex];

  const handleSelectOption = (idx: number) => {
    if (hasSubmitted && selectedOption === currentItem.question.respostaCorreta) return;
    setSelectedOption(idx);
    setHasSubmitted(true);

    const isCorrect = idx === currentItem.question.respostaCorreta;
    const currentAttempts = (attempts[currentIndex] || 0) + 1;
    setAttempts(prev => ({ ...prev, [currentIndex]: currentAttempts }));

    if (isCorrect) {
      soundManager.playCorrect();
      if (currentAttempts === 1) {
        setScore(prev => prev + 1);
      }
    } else {
      soundManager.playWrong();
    }
  };

  const handleRetryQuestion = () => {
    setSelectedOption(null);
    setHasSubmitted(false);
  };

  const handleNext = () => {
    if (currentIndex + 1 < quizPool.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setHasSubmitted(false);
    } else {
      setFinished(true);
      soundManager.playLevelUp();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto pb-12">
      {/* Intro Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-wide mb-1">
          <span>Avaliação Diagnóstica</span>
          <span aria-hidden="true">·</span>
          <span>Modelo Prova Rio / SME</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif">
          Simulado Integrado de História
        </h2>
        <p className="text-sm text-stone-600 mt-1 max-w-2xl">
          Teste seus conhecimentos combinando questões de diferentes anos escolares e receba
          um diagnóstico detalhado com tutoria pedagógica adaptativa para cada resposta incorreta.
        </p>
      </div>

      {!isSimuladoActive ? (
        /* Configuration Screen */
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
          <div>
            <label className="block text-sm font-bold text-stone-900 mb-2">
              Selecione o Segmento para o Simulado:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { id: 'all', label: 'Todos os Conteúdos (Geral)' },
                { id: '6', label: '6º Ano (Antiguidade)' },
                { id: '7', label: '7º Ano (Idade Média / Rio)' },
                { id: '8', label: '8º Ano (Brasil Império)' },
                { id: '9', label: '9º Ano (Brasil República)' },
                { id: 'rio', label: 'História do Rio & Patrimônio' },
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedGrade(opt.id as GradeId)}
                  className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                    selectedGrade === opt.id
                      ? 'bg-amber-900 text-amber-50 border-amber-950 shadow-xs'
                      : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-stone-900 mb-2">
              Quantidade de Questões:
            </label>
            <div className="flex items-center gap-3">
              {[10, 15, 20].map(cnt => (
                <button
                  key={cnt}
                  onClick={() => setQuestionCount(cnt)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all ${
                    questionCount === cnt
                      ? 'bg-amber-800 text-white border-amber-900 shadow-xs'
                      : 'bg-white hover:bg-stone-50 text-stone-700 border-stone-300'
                  }`}
                >
                  {cnt} Questões {cnt === 10 ? '(Padrão Rioeduca)' : ''}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
            <span className="text-xs text-stone-500">
              Questões com tutoria de erro ativa durante o teste
            </span>
            <button
              onClick={startSimulado}
              className="flex items-center gap-2 px-6 py-3 bg-amber-800 hover:bg-amber-900 active:scale-98 text-white text-sm font-bold rounded-xl transition-all shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>Começar Simulado Agora</span>
            </button>
          </div>
        </div>
      ) : !finished ? (
        /* Active Question in Simulado */
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
          {/* Header indicator */}
          <div className="flex items-center justify-between text-xs text-stone-500 pb-3 border-b border-stone-200">
            <div className="flex items-center gap-2">
              <span className="font-bold text-amber-900">{currentItem.topic.gradeLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="text-stone-700">{currentItem.topic.title}</span>
            </div>
            <div className="flex items-center gap-2 font-mono font-bold text-stone-700">
              Questão {currentIndex + 1} de {quizPool.length}
            </div>
          </div>

          {/* Stem */}
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 font-serif leading-snug">
            {currentItem.question.pergunta}
          </h3>

          {/* Options */}
          <div className="space-y-3">
            {currentItem.question.opcoes.map((opcao, idx) => {
              const isChosen = selectedOption === idx;
              const isCorrect = idx === currentItem.question.respostaCorreta;
              const showResult = hasSubmitted;

              let style = 'bg-white hover:bg-stone-50 border-stone-200 text-stone-800 hover:border-amber-300';
              if (showResult) {
                if (isChosen && isCorrect) {
                  style = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold ring-1 ring-emerald-500';
                } else if (isChosen && !isCorrect) {
                  style = 'bg-rose-50 border-rose-500 text-rose-950 font-semibold ring-1 ring-rose-500';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={hasSubmitted && selectedOption === currentItem.question.respostaCorreta}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3 ${style}`}
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
                  <span className="text-sm leading-relaxed flex-1">{opcao}</span>
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

          {/* Remediation if error */}
          {hasSubmitted && (
            <div className="pt-2">
              {selectedOption === currentItem.question.respostaCorreta ? (
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-950 space-y-3">
                  <div className="flex items-center gap-2 font-bold text-emerald-900 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Correto! Muito bem!</span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                    {currentItem.question.explicacaoGeral}
                  </p>
                  <div className="flex justify-end pt-1">
                    <button
                      onClick={handleNext}
                      className="flex items-center gap-2 px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold rounded-lg transition-colors"
                    >
                      <span>{currentIndex + 1 < quizPool.length ? 'Próxima Questão' : 'Finalizar Simulado'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-amber-50 rounded-xl border border-amber-300 text-stone-900 space-y-3">
                  <div className="flex items-center gap-2 font-bold text-amber-950 text-sm">
                    <Lightbulb className="w-4 h-4 text-amber-700" />
                    <span>Dica Pedagógica do Professor:</span>
                  </div>
                  {currentItem.question.diagnosticoErros[selectedOption!] && (
                    <div className="text-xs sm:text-sm space-y-2">
                      <p className="text-stone-700">
                        <strong className="text-amber-900">Atenção ao equívoco: </strong>
                        {currentItem.question.diagnosticoErros[selectedOption!].misconception}
                      </p>
                      <p className="p-2 bg-white rounded border border-amber-200 text-amber-950">
                        <strong>Dica: </strong>
                        {currentItem.question.diagnosticoErros[selectedOption!].guidanceTip}
                      </p>
                    </div>
                  )}
                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={handleRetryQuestion}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-800 hover:bg-amber-900 text-white text-xs font-semibold rounded-lg transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Tentar Novamente</span>
                    </button>
                    <button
                      onClick={handleNext}
                      className="text-xs text-stone-600 hover:text-stone-900 underline"
                    >
                      Pular Questão
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        /* Final Simulado Results */
        <div className="bg-white rounded-2xl border border-stone-200 p-8 text-center space-y-6 shadow-xs">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto text-amber-800">
            <Award className="w-8 h-8" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-stone-900 font-serif">
              Simulado Concluído com Sucesso!
            </h3>
            <p className="text-sm text-stone-600 mt-1">
              Confira seu desempenho e os temas que merecem revisão
            </p>
          </div>

          <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 max-w-sm mx-auto">
            <div className="text-xs uppercase font-semibold text-stone-500">
              Pontuação de Primeira Tentativa
            </div>
            <div className="text-4xl font-bold font-mono text-amber-900 my-2">
              {score} / {quizPool.length}
            </div>
            <div className="text-xs text-stone-600">
              Taxa de acerto: {Math.round((score / quizPool.length) * 100)}%
            </div>
          </div>

          {/* Topics covered in this simulado */}
          <div className="text-left max-w-xl mx-auto space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700">
              Tópicos Avaliados Neste Simulado:
            </h4>
            <div className="space-y-1.5">
              {quizPool.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2.5 bg-stone-50 hover:bg-stone-100 rounded-lg border border-stone-200 text-xs transition-colors cursor-pointer"
                  onClick={() => onOpenTopic(item.topic)}
                >
                  <span className="font-semibold text-stone-800 truncate mr-2">
                    {item.topic.gradeLabel}: {item.topic.title}
                  </span>
                  <span className="text-amber-800 font-medium hover:underline shrink-0">
                    Revisar Resumo →
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 pt-4">
            <button
              onClick={startSimulado}
              className="flex items-center gap-2 px-4 py-2.5 bg-amber-800 hover:bg-amber-900 text-white text-xs font-semibold rounded-lg transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Fazer Outro Simulado</span>
            </button>
            <button
              onClick={() => setIsSimuladoActive(false)}
              className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-medium rounded-lg transition-colors"
            >
              Voltar à Configuração
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
