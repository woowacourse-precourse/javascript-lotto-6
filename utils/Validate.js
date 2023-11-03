import LOTTO_NUMBER from '../constants/lottoNumber';
import { ERROR_MESSAGE } from '../constants/message';

export function validateNumberRange(numbers) {
  const isOutOfRange = numbers.some(
    (number) => number < LOTTO_NUMBER.min || number > LOTTO_NUMBER.max,
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
  if (numbers.length !== LOTTO_NUMBER.length) {
    throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
  }
}

export function validateBonusLength(numbers) {
  if (numbers.length === LOTTO_NUMBER.bonusLength) {
    throw new Error('[ERROR] 로또 번호(보너스 포함)는 7개여야 합니다.');
  }
}
