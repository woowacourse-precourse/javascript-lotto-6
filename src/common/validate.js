import { NUMBER_COUNT } from '../constants.js';

export function isNumber(number) {
  return !Number.isNaN(Number(number));
}

export function isOneToFourtyfiveNumber(number) {
  return number >= 1 && number <= 45;
}

export function isDuplicatedNumber(numbers, number) {
  return numbers.includes(number);
}

export function isSixNumber(numbers) {
  return numbers.length === NUMBER_COUNT;
}

export function isDuplicatedList(numbers) {
  const CHECK_DUPLICATE_SET = new Set(numbers);
  return CHECK_DUPLICATE_SET.size !== NUMBER_COUNT;
}
