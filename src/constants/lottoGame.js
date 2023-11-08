export const LOTTO = Object.freeze({
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  LENGTH: 6,
  PRICE: 1000,
});

export const EVERYTHING_OK = '어떤 숫자여도 상관 없다.';

export const RANK_DATA = [
  { ranking: 5, standard: { numbers: 3, bonus: EVERYTHING_OK }, prize: 5000 },
  { ranking: 4, standard: { numbers: 4, bonus: EVERYTHING_OK }, prize: 50000 },
  { ranking: 3, standard: { numbers: 5, bonus: false }, prize: 1500000 },
  { ranking: 2, standard: { numbers: 5, bonus: true }, prize: 30000000 },
  {
    ranking: 1,
    standard: { numbers: 6, bonus: EVERYTHING_OK },
    prize: 2000000000,
  },
];
