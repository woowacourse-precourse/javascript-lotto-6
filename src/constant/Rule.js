const NUMBER_RANGE = Object.freeze({
  min: 1,
  max: 45,
});
const LOTTO_FORM = Object.freeze({
  range: NUMBER_RANGE,
  length: 6,
  price: 1000,
});

const BONUS_BALL_FORM = Object.freeze({
  range: NUMBER_RANGE,
  length: 1,
});

const WINNINGS = Object.freeze({
  three: '5,000',
  four: '50,000',
  fiveNoBonus: '1,500,000',
  fiveAndBonus: '30,000,000',
  six: '2,000,000,000',
});
export { NUMBER_RANGE, LOTTO_FORM, BONUS_BALL_FORM, WINNING_AMOUNT };
