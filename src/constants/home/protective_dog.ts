// src/constants/constants.ts
import { Adoption } from '../../interfaces/home/types'

export const adoptions: Adoption[] = [
  { id: 59815, name: '새벽', breed: '골든리트리버', status: '입양', date: '24.05.12' },
  // 추가 데이터...
];

export const adoptionSummaryData = {
  total: 10,
  today: 3,
  waiting: 1,
};
