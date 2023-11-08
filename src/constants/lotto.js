export const LOTTO_WINNING_AMOUNT = Object.freeze({
  fifthPlace: 5000,
  fourthPlace: 50000,
  thirdPlace: 1500000,
  secondPlace: 30000000,
  firstPlace: 2000000000,
});

export const WINNING_CONDITIONS = Object.freeze({
  fifthPlace: {
    lottoWinningNumbersMatchCount: 3,
    bonusNumberMatchCount: [0, 1],
  },
  fourthPlace: {
    lottoWinningNumbersMatchCount: 4,
    bonusNumberMatchCount: [0, 1],
  },
  thirdPlace: {
    lottoWinningNumbersMatchCount: 5,
    bonusNumberMatchCount: [0],
  },
  secondPlace: {
    lottoWinningNumbersMatchCount: 5,
    bonusNumberMatchCount: [1],
  },
  firstPlace: {
    lottoWinningNumbersMatchCount: 6,
    bonusNumberMatchCount: [0, 1],
  },
});

export const LOTTO = Object.freeze({
  numberLength: 6,
  bonusNumberLength: 1,
  minValue: 1,
  maxValue: 45,
});

export const LOTTO_MATCH_RESULT = Object.freeze({
  initialResultValue: 0,
});

export const PURCHASE_AMOUNT = Object.freeze({
  noInput: "",
  minValue: 1000,
  unit: 1000,
  checkRemain: 0,
});

export const MATH_FACTORS = Object.freeze({
  percentage: 100,
  roundingDigit: 2,
  initialValue: 0,
});
