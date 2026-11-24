export type GradeId = '6' | '7' | '8' | '9' | 'rio' | 'all';

export type HistoricalPeriod = 
  | 'Pré-História & Antiguidade'
  | 'Idade Média'
  | 'Mundo Moderno & Expansão'
  | 'Brasil Colônia'
  | 'Brasil Império'
  | 'Brasil República'
  | 'História do Rio de Janeiro'
  | 'Século XX & Mundo Contemporâneo';

export interface QuestionRemediation {
  misconception: string;      // O que o estudante provavelmente confundiu
  guidanceTip: string;        // Pista reflexiva sem dar a resposta direta
  conceptReview: string;      // O conceito correto que precisa ser revisado
}

export interface Question {
  id: string;
  pergunta: string;
  opcoes: string[];
  respostaCorreta: number; // 0, 1, 2, 3
  explicacaoGeral: string;
  diagnosticoErros: {
    [opcaoIndex: number]: QuestionRemediation;
  };
  habilidadeBNCC?: string; // e.g., EF06HI01, EF08HI14, etc.
}

export interface Flashcard {
  id: string;
  termo: string;
  significado: string;
  curiosidade?: string;
}

export interface TopicSummary {
  introducao: string[];
  pontosChave: string[];
  conexaoRio: string;         // Conexão específica com a história, bairros ou patrimônio do Rio de Janeiro
  linhaTempo: { ano: string; evento: string }[];
  paraFicarLigado: string;    // Dica pedagógica / armadilha comum
}

export interface Topic {
  id: string;
  grade: GradeId;
  gradeLabel: string;
  period: HistoricalPeriod;
  title: string;
  subtitle: string;
  tempoLeituraMin: number;
  tags: string[];
  summary: TopicSummary;
  questions: Question[];
  flashcards: Flashcard[];
}

export interface UserAnswerRecord {
  questionId: string;
  topicId: string;
  selectedOption: number;
  isCorrect: boolean;
  attemptsCount: number;
  timestamp: number;
}

export interface TopicProgress {
  topicId: string;
  summaryRead: boolean;
  quizCompleted: boolean;
  score: number;             // e.g. 10 out of 10
  totalQuestions: number;
  lastStudied: number;
  bestStreak?: number;
  xpEarned?: number;
}

export interface AchievementBadge {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: number;
}

export interface PlayerStats {
  xp: number;
  level: number;
  rankTitle: string;
  totalQuizzesCompleted: number;
  perfectQuizzesCount: number;
  highestStreak: number;
  unlockedBadgeIds: string[];
}

export interface GlossaryItem {
  id: string;
  termo: string;
  definicao: string;
  categoria: string;
  exemploOuContexto: string;
}

export interface TimelineEvent {
  ano: string;
  titulo: string;
  periodo: HistoricalPeriod;
  grade: GradeId;
  descricao: string;
  localizacao: string;
  destaqueRio?: boolean;
}
