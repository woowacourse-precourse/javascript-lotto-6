export const LOTTO = {
  minNumber: 1,
  maxNumber: 45,
  length: 6,
  percentage: 100,
  unitPrice: 1000,
  minMatchCount: 3,
  thirdMathCount: 5,
};

export const LOTTO_RESULT = {
  first: {
    prize: 2000000000,
    matchCount: 6,
  },
  second: {
    prize: 30000000,
    matchCount: 5,
    matchBonus: true,
  },
  third: {
    prize: 1500000,
    matchCount: 5,
  },
  fourth: {
    prize: 50000,
    matchCount: 4,
  },
  fifth: {
    prize: 5000,
    matchCount: 3,
  },
};

export const LOTTO_RANK = {
  first: 'first',
  second: 'second',
  third: 'third',
  fourth: 'fourth',
  fifth: 'fifth',
  none: 'none',
};
