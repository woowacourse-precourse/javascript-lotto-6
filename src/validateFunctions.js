import InputError from './InputError.js';
import { CONSTANT_VALUE, ERROR_MESSAGE } from './constants.js';

export function vaildateNumberRange(number) {
  if (number < 1 || number > 45) {
    throw new InputError(ERROR_MESSAGE.invalidNumberRange);
  }
}

export function vaildateNumberCheck(number) {
  if (!CONSTANT_VALUE.numberCheck.test(number)) {
    throw new InputError(ERROR_MESSAGE.notNumber);
  }
}
