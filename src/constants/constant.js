import deepFreeze from '../util/deepFreeze.js';

export const LOTTO_PRICE_UNIT = 1000;
export const NUMBER_TYPE_REG = /^[0-9]+$/;

export const LOTTO_PRICE = deepFreeze({
  MAXIMUM: 2000000000,
  MINIMUM: 1000,
  CURRENCY_AMOUNT: 1000,
});

export const LOTTO_NUMBER = deepFreeze({
  LENGTH: 6,
  MIN: 1,
  MAX: 45,
});

export const LOTTO_PRIZE = deepFreeze({
  FIFTH: {
    MATCH_CRITERIA: 3,
    PRIZE: 5000,
    INDEX: 0,
  },
  FOURTH: {
    MATCH_CRITERIA: 4,
    PRIZE: 50000,
    INDEX: 1,
  },
  THIRD: {
    MATCH_CRITERIA: 5,
    PRIZE: 1500000,
    INDEX: 2,
  },
  SECOND: {
    MATCH_CRITERIA: 5,
    PRIZE: 30000000,
    INDEX: 3,
  },
  FIRST: {
    MATCH_CRITERIA: 6,
    PRIZE: 2000000000,
    INDEX: 4,
  },
});
