const DEFAULT_NUM = 0;
const LOTTO_TICKET_PRICE = 1000;
const PERCENTAGE = 100;
const IS_BOUNS_INDEX = 1;

const LOTTO_NUM_RANGE = Object.freeze({
  min: 1,
  max: 45,
  length: 6,
});

const COUNT = Object.freeze({
  plus: 1,
  minus: 1,
});

const PRIZE_MONEY = Object.freeze({
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  fourth: 50000,
  fifth: 5000,
});

const MATCH_COUNTS = Object.freeze({
  three: 3,
  four: 4,
  five: 5,
  all: 6,
});

const RANKING = Object.freeze({
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
  fifth: 5,
});

export {
  LOTTO_NUM_RANGE,
  COUNT,
  DEFAULT_NUM,
  LOTTO_TICKET_PRICE,
  PRIZE_MONEY,
  MATCH_COUNTS,
  RANKING,
  PERCENTAGE,
  IS_BOUNS_INDEX,
};
