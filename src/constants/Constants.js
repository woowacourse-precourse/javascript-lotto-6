// constants.js

const MIN_NUMBER = 1;
const MAX_NUMBER = 45;
const NUMBERS_COUNT = 6;
const TICKET_PRICE = 1000;
const PURCHASE_UNIT = 1000;

const PRIZE_INFO = {
  FIRST: { match: 6, prize: 2000000000 },
  SECOND: { match: 5, bonus: true, prize: 30000000 },
  THIRD: { match: 5, prize: 1500000 },
  FOURTH: { match: 4, prize: 50000 },
  FIFTH: { match: 3, prize: 5000 },
};

export {
  MIN_NUMBER,
  MAX_NUMBER,
  NUMBERS_COUNT,
  TICKET_PRICE,
  PURCHASE_UNIT,
  PRIZE_INFO,
};
