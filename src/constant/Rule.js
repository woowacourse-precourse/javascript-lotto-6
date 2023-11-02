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

export { NUMBER_RANGE, LOTTO_FORM, BONUS_BALL_FORM };
