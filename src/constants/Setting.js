const LOTTO_SETTING = Object.freeze({
  minNumber: 1,
  maxNumber: 45,
  numbersLength: 6,
  bonusNumberLength: 1,
  pricePerLotto: 1000,
  prizeNumber: 5,
});

const PRIZE_NAME = Object.freeze({
  first: 'firstPrize',
  second: 'secondPrize',
  third: 'thirdPrize',
  fourth: 'fourthPrize',
  fifth: 'fifthPrize',
});

const WINNING_CRETERIA = Object.freeze({
  [PRIZE_NAME.first]: 6,
  [PRIZE_NAME.second]: 5,
  [PRIZE_NAME.third]: 5,
  [PRIZE_NAME.fourth]: 4,
  [PRIZE_NAME.fifth]: 3,
});

const WINNING_PRIZE = Object.freeze({
  [PRIZE_NAME.first]: 2000000000,
  [PRIZE_NAME.second]: 30000000,
  [PRIZE_NAME.third]: 1500000,
  [PRIZE_NAME.fourth]: 50000,
  [PRIZE_NAME.fifth]: 5000,
});

export { LOTTO_SETTING, PRIZE_NAME, WINNING_CRETERIA, WINNING_PRIZE };
