export const LOTTO = Object.freeze({
  price: 1000,
  minNumber: 1,
  maxNumber: 45,
  numberLength: 6,
  bonusNumberLength: 1,
});

export const DELIMITER = Object.freeze({
  splitDelimiter: ',',
  joinDelimiter: ', ',
});

export const LOTTO_RANK = Object.freeze({
  1: {
    matchCount: 6,
    isMatchBonus: false,
    prize: 2000000000,
  },
  2: {
    matchCount: 5,
    isMatchBonus: true,
    prize: 30000000,
  },
  3: {
    matchCount: 5,
    isMatchBonus: false,
    prize: 1500000,
  },
  4: {
    matchCount: 4,
    isMatchBonus: false,
    prize: 50000,
  },
  5: {
    matchCount: 3,
    isMatchBonus: false,
    prize: 5000,
  },
});
