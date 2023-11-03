import LOTTO from '../constants/lotto';
import { ERROR_MESSAGE } from '../constants/message';

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

export function validateLength(numbers) {
  if (numbers.length !== LOTTO.length) {
    throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
  }
}

export function validateBonusLength(numbers) {
  if (numbers.length === LOTTO.bonusLength) {
    throw new Error('[ERROR] 로또 번호(보너스 포함)는 7개여야 합니다.');
  }
}
