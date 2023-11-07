export const LOTTO_MAGICNUMBER = Object.freeze({
  minValue: 1,
  maxValue: 45,
  selectAmount: 6,
});

export const LOTTO_PRICE = 1000;

export const PROFIT_ROUND_UP_VALUE = 1;

export const LOTTO_RANK = Object.freeze({
  first: Object.freeze({
    mainNumber: 6,
    bonusNumber: false,
    prizeValue: 2_000_000_000,
  }),
  second: Object.freeze({
    mainNumber: 5,
    bonusNumber: true,
    prizeValue: 30_000_000,
  }),
  third: Object.freeze({
    mainNumber: 5,
    bonusNumber: false,
    prizeValue: 1_500_000,
  }),
  fourth: Object.freeze({
    mainNumber: 4,
    bonusNumber: false,
    prizeValue: 50_000,
  }),
  fifth: Object.freeze({
    mainNumber: 3,
    bonusNumber: false,
    prizeValue: 5_000,
  }),
});
