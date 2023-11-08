export const LOTTO_GAME_OPTIONS = Object.freeze({

  // 로또
  min_number: 1,
  max_number: 45,
  lotto_number_count: 6,
  price: 1000,

  // 당첨, 상금
  rank: [1, 2, 3, 4, 5],
  prize: {
    1: { match: 6, amount: 2000000000 },
    2: { match: 5, bonusMatch: true, amount: 30000000 },
    3: { match: 5, bonusMatch: false, amount: 1500000 },
    4: { match: 4, amount: 50000 },
    5: { match: 3, amount: 5000 }
  },

  // 입출력
  number_input_seperator: ',',
  prize_stats_sequence: [5, 4, 3, 2, 1],
  rounding_precision: 1,
});
