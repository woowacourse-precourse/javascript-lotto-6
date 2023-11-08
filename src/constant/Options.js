export const LOTTO_GAME_OPTIONS = Object.freeze({
  min_number: 1,
  max_number: 45,
  lotto_number_count: 6,
  bonus_number_count: 1,
  price: 1000,
  lotto_prize: [
    { match: 6, bonusMatch: 0, PRIZE: 2000000000 },
    { match: 5, bonusMatch: 1, PRIZE: 30000000 },
    { match: 5, bonusMatch: 0, PRIZE: 1500000 },
    { match: 4, bonusMatch: 0, PRIZE: 50000 },
    { match: 3, bonusMatch: 0, PRIZE: 5000 },
  ],
  rounding_precision: 1
});
