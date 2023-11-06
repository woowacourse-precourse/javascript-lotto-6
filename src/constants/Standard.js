const LOTTO = Object.freeze({
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  LENGTH: 6,
  BONUS_NUMBER_LENGTH: 1,
  PRICE: 1000,
  MAX_PRICE: 100000,
});

const PROFIT = Object.freeze({
  three: 5,
  four: 50,
  five: 15000,
  fiveWithBonus: 30000,
  six: 2000000,
});

export { LOTTO, PROFIT };
