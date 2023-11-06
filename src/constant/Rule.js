import { changeStringToMoney } from '../utils/Money';

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

const WINNINGS_MONEY = Object.freeze({
  three: changeStringToMoney(WINNINGS.three),
  four: changeStringToMoney(WINNINGS.four),
  fiveNoBonus: changeStringToMoney(WINNINGS.fiveNoBonus),
  fiveAndBonus: changeStringToMoney(WINNINGS.fiveAndBonus),
  six: changeStringToMoney(WINNINGS.six),
});

const FIVE_AND_BONUS = 'fiveAndBonus';
const FIVE_NO_BONUS = 'fiveNoBonus';
const RANK = ['three', 'four', FIVE_NO_BONUS, FIVE_AND_BONUS, 'six'];

export {
  NUMBER_RANGE,
  LOTTO_FORM,
  BONUS_BALL_FORM,
  WINNINGS,
  WINNINGS_MONEY,
  FIVE_AND_BONUS,
  FIVE_NO_BONUS,
  RANK,
};
