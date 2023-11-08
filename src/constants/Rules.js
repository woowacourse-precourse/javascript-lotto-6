const NUMERIC_PATTERN = /^\d+$/;

const LOTTO_RULES = Object.freeze({
  minNumber: 1,
  maxNumber: 45,
  pickCount: 6,
});

const LOTTO_MACHINE_RULES = Object.freeze({
  minimumWiningCount: 3,
  inputUnit: 1000,
});

const RANK_RULES = Object.freeze({
  1: {
    matches: 6,
    prize: 2_000_000_000,
  },
  2: {
    matches: 5,
    prize: 30_000_000,
  },
  3: {
    matches: 5,
    prize: 1_500_000,
  },
  4: {
    matches: 4,
    prize: 50_000,
  },
  5: {
    matches: 3,
    prize: 5_000,
  },
});

export { LOTTO_RULES, LOTTO_MACHINE_RULES, RANK_RULES, NUMERIC_PATTERN };
