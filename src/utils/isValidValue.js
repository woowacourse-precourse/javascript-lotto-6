import {
  START_NUMBER,
  END_NUMBER,
  SIZE,
  KRW_UNIT,
} from '../constants/constants.js';

export function isNatural(number) {
  return Number.isInteger(number) && number > 0;
}

export function isNotNaturalAll(numbers) {
  return numbers.some((num) => !isNatural(num));
}

export function isValidLottoRange(number) {
  return START_NUMBER <= number && number <= END_NUMBER;
}

export function isValidLottoRangeAll(numbers) {
  return numbers.some((num) => num < START_NUMBER || num > END_NUMBER);
}

export function isThousandsDigit(number) {
  return number % KRW_UNIT === 0;
}

export function isLengthSix(numbers) {
  return numbers.length === SIZE;
}

export function isDuplicated(numbers) {
  return new Set(numbers).size !== SIZE;
}

export function hasComma(numbers) {
  return numbers.includes(',');
}

export function hasBonus(bonus, numbers) {
  return numbers.includes(bonus);
}
