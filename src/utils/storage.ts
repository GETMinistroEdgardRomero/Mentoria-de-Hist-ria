import { TopicProgress, UserAnswerRecord, PlayerStats, AchievementBadge } from '../types/history';

const PROGRESS_KEY = 'rioeduca_history_progress';
const ANSWERS_KEY = 'rioeduca_history_answers';
const BOOKMARKS_KEY = 'rioeduca_history_bookmarks';
const STATS_KEY = 'rioeduca_player_stats';

export const ACHIEVEMENT_BADGES: AchievementBadge[] = [
  {
    id: 'badge-welcome',
    title: 'Pé no Tempo',
    description: 'Iniciou a jornada histórica na plataforma Rioeduca.',
    icon: '🧭'
  },
  {
    id: 'badge-first-quiz',
    title: 'Primeira Missão',
    description: 'Completou seu primeiro quiz interativo com 10 questões.',
    icon: '🎯'
  },
  {
    id: 'badge-streak-5',
    title: 'Em Chamas!',
    description: 'Acertou 5 questões consecutivas sem errar.',
    icon: '🔥'
  },
  {
    id: 'badge-perfect-10',
    title: 'Historiador Impecável',
    description: 'Gabaritou um quiz completo de 10/10 na primeira tentativa!',
    icon: '👑'
  },
  {
    id: 'badge-rio-master',
    title: 'Guardião da Guanabara',
    description: 'Dominou o módulo de História e Patrimônio do Rio de Janeiro.',
    icon: '🏛️'
  },
  {
    id: 'badge-learner',
    title: 'Persistência Pedagógica',
    description: 'Errou uma questão, aplicou a dica do professor e acertou em seguida.',
    icon: '💡'
  }
];

export function calculateRankTitle(xp: number): { level: number; rankTitle: string; nextLevelXp: number } {
  if (xp < 250) {
    return { level: 1, rankTitle: 'Aprendiz do Tempo', nextLevelXp: 250 };
  } else if (xp < 600) {
    return { level: 2, rankTitle: 'Explorador de Arquivos', nextLevelXp: 600 };
  } else if (xp < 1200) {
    return { level: 3, rankTitle: 'Pesquisador dos Sambaquis', nextLevelXp: 1200 };
  } else if (xp < 2000) {
    return { level: 4, rankTitle: 'Cronista da Guanabara', nextLevelXp: 2000 };
  } else if (xp < 3200) {
    return { level: 5, rankTitle: 'Guardião da Pequena África', nextLevelXp: 3200 };
  } else {
    return { level: 6, rankTitle: 'Mestre em História Carioca', nextLevelXp: 5000 };
  }
}

export function getPlayerStats(): PlayerStats {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch {
    // fallback
  }

  const initial: PlayerStats = {
    xp: 50,
    level: 1,
    rankTitle: 'Aprendiz do Tempo',
    totalQuizzesCompleted: 0,
    perfectQuizzesCount: 0,
    highestStreak: 0,
    unlockedBadgeIds: ['badge-welcome']
  };
  savePlayerStats(initial);
  return initial;
}

export function savePlayerStats(stats: PlayerStats): void {
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch (e) {
    console.error('Error saving player stats', e);
  }
}

export function addPlayerXP(xpToAdd: number, streakAchieved: number = 0, isPerfect: boolean = false, topicGrade?: string): { stats: PlayerStats; newBadges: AchievementBadge[] } {
  const current = getPlayerStats();
  const newXp = current.xp + xpToAdd;
  const { level, rankTitle } = calculateRankTitle(newXp);
  
  const unlocked = new Set(current.unlockedBadgeIds);
  const newlyUnlocked: AchievementBadge[] = [];

  const checkBadge = (id: string) => {
    if (!unlocked.has(id)) {
      unlocked.add(id);
      const b = ACHIEVEMENT_BADGES.find(x => x.id === id);
      if (b) newlyUnlocked.push(b);
    }
  };

  // Check conditions
  checkBadge('badge-first-quiz');
  if (streakAchieved >= 5 || current.highestStreak >= 5) {
    checkBadge('badge-streak-5');
  }
  if (isPerfect) {
    checkBadge('badge-perfect-10');
  }
  if (topicGrade === 'rio') {
    checkBadge('badge-rio-master');
  }

  const updated: PlayerStats = {
    xp: newXp,
    level,
    rankTitle,
    totalQuizzesCompleted: current.totalQuizzesCompleted + 1,
    perfectQuizzesCount: current.perfectQuizzesCount + (isPerfect ? 1 : 0),
    highestStreak: Math.max(current.highestStreak, streakAchieved),
    unlockedBadgeIds: Array.from(unlocked)
  };

  savePlayerStats(updated);
  return { stats: updated, newBadges: newlyUnlocked };
}

export function getStoredProgress(): Record<string, TopicProgress> {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveTopicProgress(progress: TopicProgress): void {
  try {
    const current = getStoredProgress();
    current[progress.topicId] = progress;
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(current));
  } catch (e) {
    console.error('Error saving progress', e);
  }
}

export function getStoredAnswers(): UserAnswerRecord[] {
  try {
    const raw = localStorage.getItem(ANSWERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function recordUserAnswer(record: UserAnswerRecord): void {
  try {
    const current = getStoredAnswers();
    current.push(record);
    localStorage.setItem(ANSWERS_KEY, JSON.stringify(current));
  } catch (e) {
    console.error('Error recording answer', e);
  }
}

export function getBookmarks(): string[] {
  try {
    const raw = localStorage.getItem(BOOKMARKS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleBookmark(topicId: string): string[] {
  try {
    const current = getBookmarks();
    const index = current.indexOf(topicId);
    let updated: string[];
    if (index >= 0) {
      updated = current.filter(id => id !== topicId);
    } else {
      updated = [...current, topicId];
    }
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

export function resetAllProgress(): void {
  localStorage.removeItem(PROGRESS_KEY);
  localStorage.removeItem(ANSWERS_KEY);
}
