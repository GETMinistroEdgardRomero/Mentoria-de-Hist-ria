import { Topic } from '../types/history';
import { GRADE_6_TOPICS } from './grade6Data';
import { GRADE_7_TOPICS } from './grade7Data';
import { GRADE_8_TOPICS } from './grade8Data';
import { GRADE_9_TOPICS } from './grade9Data';
import { RIO_SPECIAL_TOPICS } from './rioSpecialData';

export const RIOEDUCA_TOPICS: Topic[] = [
  ...GRADE_6_TOPICS,
  ...GRADE_7_TOPICS,
  ...GRADE_8_TOPICS,
  ...GRADE_9_TOPICS,
  ...RIO_SPECIAL_TOPICS
];
