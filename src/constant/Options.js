export const LOTTO_GAME_OPTIONS = Object.freeze({
  min_number: 1,
  max_number: 45,
  lotto_number_count: 6,
  bonus_number_count: 1,
  price: 1000,
  prize_conditions: [
    { rank: 1, match: 6 },
    { rank: 2, match: 5, bonusMatch: true },
    { rank: 3, match: 5 },
    { rank: 4, match: 4 },
    { rank: 5, match: 3 }
  ],
  prize_amount: {
    1: 2000000000,
    2: 30000000,
    3: 1500000,
    4: 50000,
    5: 5000,
    0: 0
  },
  rounding_precision: 1,
  number_input_seperator: ','
});
