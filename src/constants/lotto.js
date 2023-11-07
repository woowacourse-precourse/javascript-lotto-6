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
    includesCount: 6,
  },
  second: {
    prize: 30000000,
    includesCount: 5,
    isSecond: true,
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
};

export const LOTTO_RANK = {
  first: 'first',
  second: 'second',
  third: 'third',
  fourth: 'fourth',
  fifth: 'fifth',
  none: 'none',
};
