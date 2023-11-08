import {
  MIN_NUMBER,
  MAX_NUMBER,
  PURCHASE_UNIT,
} from '../constants/Constants.js';

function isInRange(number) {
  return number >= MIN_NUMBER && number <= MAX_NUMBER;
}

function areNumbersInRange(numbers) {
  return numbers.every((number) => isInRange(number));
}

function isValidAmount(amount) {
  return amount % PURCHASE_UNIT === 0;
}

export { isInRange, areNumbersInRange, isValidAmount };
