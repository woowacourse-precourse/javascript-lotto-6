export const LOTTO_PRICE = 1000;
export const LOTTO_NUMBER_RANGE = Object.freeze({ start: 1, end: 45 });
export const LOTTO_NUMBER_SIZE = 6;
export const DECIMAL_POINT = 1;
export const TO_LOCALE_STRING_OPTION = undefined;
export const COMMA = ',';
export const SPACE_COMMA = ', ';
export const BRACKET_OPEN = '[';
export const BRACKET_CLOSE = ']';

export const LOTTO_RANK = Object.freeze({
  FIFTH: Object.freeze({ winningNumber: 3, bounsNumber: false, winningMoney: 5000 }),
  FOURTH: Object.freeze({ winningNumber: 4, bounsNumber: false, winningMoney: 50000 }),
  THIRD: Object.freeze({ winningNumber: 5, bounsNumber: false, winningMoney: 1500000 }),
  SECOND: Object.freeze({ winningNumber: 5, bounsNumber: true, winningMoney: 30000000 }),
  FIRST: Object.freeze({ winningNumber: 6, bounsNumber: false, winningMoney: 2000000000 }),
});
