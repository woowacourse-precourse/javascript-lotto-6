export const LOTTO = Object.freeze({
  minNumber: 1,
  maxNumber: 45,
  length: 6,
  percentage: 100,
  unitPrice: 1000,
});

export const LOTTO_RESULT = Object.freeze({
  first: {
    prize: 2000000000,
    includesCount: 6,
  },
  second: {
    prize: 30000000,
    includesCount: 5,
    hasBonusNumber: true,
  },
  third: {
    prize: 1500000,
    includesCount: 5,
  },
  fourth: {
    prize: 50000,
    includesCount: 4,
  },
  fifth: {
    prize: 5000,
    includesCount: 3,
  },
});
