const LOTTO_SETTING = Object.freeze({
  minNumber: 1,
  maxNumber: 45,
  numbersLength: 6,
  bonusNumberLength: 1,
  pricePerLotto: 1000,
});

const WINNING_CRETERIA = Object.freeze({
  firstPrize: 6,
  secondPrize: 6,
  thirdPrize: 5,
  fourthPrize: 4,
  fifthPrize: 3,
});

const WINNING_PRIZE = Object.freeze({
  firstPrize: 2000000000,
  secondPrize: 30000000,
  thirdPrize: 1500000,
  fourthPrize: 50000,
  fifthPrize: 5000,
});

export { LOTTO_SETTING, WINNING_CRETERIA, WINNING_PRIZE };
