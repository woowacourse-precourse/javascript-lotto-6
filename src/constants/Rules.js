const LOTTO_RULES = {
  minNumber: 1,
  maxNumber: 45,
  pickCount: 6,
};

const MATCHES_TO_RANK = {
  5: 3,
  4: 4,
  3: 5,
  2: 5,
  1: 6,
};

const WINNING_RANK_TO_PRIZE = {
  1: 2_000_000_000,
  2: 30_000_000,
  3: 1_500_000,
  4: 50_000,
  5: 5_000,
};

export { LOTTO_RULES, MATCHES_TO_RANK, WINNING_RANK_TO_PRIZE };
