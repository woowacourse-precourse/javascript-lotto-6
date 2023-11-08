export const EMPTY = ' ';

export const MONEY_UNIT = 1000;

export const RANDOM_NUMBERS_RANGE = {
  min: 1,
  max: 45,
  size: 6,
};

export const BONUS_NUMBER_TYPE = {
  withFiveWinningNumbers: 2,
  withOutFiveWinningNumbers: 1,
  useless: 0,
};

export const WINNING_NUMBERS_COUNT_TYPE = {
  first: 6,
  second: 5,
  fourth: 4,
  fifth: 3,
};

export const PRIZE_TYPE = {
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  fourth: 50000,
  fifth: 5000,
};

export const WINNING_CONDITIONS_AND_PRIZES = [
  {
    condition: {
      winningNumbersCount: WINNING_NUMBERS_COUNT_TYPE.fifth,
      bonusNumberType: BONUS_NUMBER_TYPE.useless,
    },
    prize: PRIZE_TYPE.fifth,
  },
  {
    condition: {
      winningNumbersCount: WINNING_NUMBERS_COUNT_TYPE.fourth,
      bonusNumberType: BONUS_NUMBER_TYPE.useless,
    },
    prize: PRIZE_TYPE.fourth,
  },
  {
    condition: {
      winningNumbersCount: WINNING_NUMBERS_COUNT_TYPE.second,
      bonusNumberType: BONUS_NUMBER_TYPE.withOutFiveWinningNumbers,
    },
    prize: PRIZE_TYPE.third,
  },
  {
    condition: {
      winningNumbersCount: WINNING_NUMBERS_COUNT_TYPE.second,
      bonusNumberType: BONUS_NUMBER_TYPE.withFiveWinningNumbers,
    },
    prize: PRIZE_TYPE.second,
  },
  {
    condition: {
      winningNumbersCount: WINNING_NUMBERS_COUNT_TYPE.first,
      bonusNumberType: BONUS_NUMBER_TYPE.useless,
    },
    prize: PRIZE_TYPE.first,
  },
];
