import { changeStringToMoney } from '../utils/index.js';

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

const DELIMITER = ',';

const CORRECT_NUMBER = Object.freeze({
  three: 'fifth',
  four: 'fourth',
  fiveNoBonus: 'third',
  fiveAndBonus: 'second',
  six: 'first',
});

const WINNINGS = Object.freeze({
  first: '2,000,000,000',
  second: '30,000,000',
  third: '1,500,000',
  fourth: '50,000',
  fifth: '5,000',
});

const WINNINGS_MONEY = Object.freeze({
  first: changeStringToMoney(WINNINGS.first),
  second: changeStringToMoney(WINNINGS.second),
  third: changeStringToMoney(WINNINGS.third),
  fourth: changeStringToMoney(WINNINGS.fourth),
  fifth: changeStringToMoney(WINNINGS.fifth),
});

const RANK = [
  CORRECT_NUMBER.three,
  CORRECT_NUMBER.four,
  CORRECT_NUMBER.fiveNoBonus,
  CORRECT_NUMBER.fiveAndBonus,
  CORRECT_NUMBER.six,
];

export {
  BONUS_BALL_FORM,
  CORRECT_NUMBER,
  DELIMITER,
  NUMBER_RANGE,
  LOTTO_FORM,
  RANK,
  WINNINGS,
  WINNINGS_MONEY,
};
