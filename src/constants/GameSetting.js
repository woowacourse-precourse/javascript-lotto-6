export const LOTTO_PRICE = 1000;
export const LOTTO_NUMBER_RANGE = Object.freeze({ start: 1, end: 45 });
export const LOTTO_NUMBER_SIZE = 6;

export const LOTTO_RANK = Object.freeze({
  FIRST: Object.freeze({ winningNumber: 6, bounsNumber: false, winningMoney: 2000000000 }),
  SECOND: Object.freeze({ winningNumber: 5, bounsNumber: true, winningMoney: 30000000 }),
  THIRD: Object.freeze({ winningNumber: 5, bounsNumber: false, winningMoney: 1500000 }),
  FOURTH: Object.freeze({ winningNumber: 4, bounsNumber: false, winningMoney: 50000 }),
  FIFTH: Object.freeze({ winningNumber: 3, bounsNumber: false, winningMoney: 5000 }),
});
