import LOTTO from '../constants/lotto';
import { ERROR_MESSAGE } from '../constants/message';

export function validateNumber(number) {
  if (Number.isNaN(number)) {
    throw new Error(ERROR_MESSAGE.requireNumber);
  }
}

export function validateNumberRange(numbers) {
  const isOutOfRange = numbers.some(
    (number) => number < LOTTO.min || number > LOTTO.max,
  );
  if (isOutOfRange) {
    throw new Error(ERROR_MESSAGE.outOfRange);
  }
}

export function validateDuplication(numbers) {
  const numberSet = new Set(numbers);
  if (numberSet.size !== numbers.length) {
    throw new Error(ERROR_MESSAGE.duplication);
  }
}
export function validateBonus(numbers, bonusNumber) {
  if (numbers.includes(bonusNumber)) {
    throw new Error(ERROR_MESSAGE.duplication);
  }
}

export function validateLength(numbers) {
  if (numbers.length !== LOTTO.length) {
    throw new Error(ERROR_MESSAGE.tooManyNums);
  }
}
