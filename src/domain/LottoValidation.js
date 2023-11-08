import { ERROR, LOTTO, WINNING_NUMBER_DELIMITER } from '../config.js';
import {
  isDuplicated,
  isEmpty,
  isLengthInvalid,
  isLessThanLottoPrice,
  isNotMultipleOfLottoPrice,
  isPositiveInteger,
  isRangeInvalid,
} from './index.js';

export default class LottoValidation {
  static amount(amount) {
    if (!isPositiveInteger(amount)) throw new Error(ERROR.IS_NOT_POSITIVE_INTEGER);
    if (isLessThanLottoPrice(amount)) throw new Error(ERROR.IS_LESS_THAN_LOTTO_PRICE);
    if (isNotMultipleOfLottoPrice(amount)) throw new Error(ERROR.IS_NOT_MULTIPLY_OF_LOTTO_PRICE);
  }

  static lotto(numbers) {
    const numbersArray = numbers.split(WINNING_NUMBER_DELIMITER).map((number) => number.trim());

    if (isLengthInvalid(numbersArray)) throw new Error(ERROR.IS_NOT_LOTTO_LENGTH);
    numbersArray.forEach((number) => {
      if (isEmpty(number)) throw new Error(ERROR.IS_EMPTY);
      if (!isPositiveInteger(number)) throw new Error(ERROR.IS_NOT_POSITIVE_INTEGER);
      if (isRangeInvalid(number)) throw new Error(ERROR.IS_NOT_IN_LOTTO_RANGE);
    });
    if (isDuplicated(numbersArray)) throw new Error(ERROR.IS_DUPLICATED);
  }

  static bonus(winningNumbers, bonusNumbers) {
    if (isEmpty(bonusNumbers)) throw new Error(ERROR.IS_EMPTY);
    if (!isPositiveInteger(bonusNumbers)) throw new Error(ERROR.IS_NOT_POSITIVE_INTEGER);
    if (isRangeInvalid(bonusNumbers)) throw new Error(ERROR.IS_NOT_IN_LOTTO_RANGE);
    if (isDuplicated([...winningNumbers, bonusNumbers])) throw new Error(ERROR.IS_DUPLICATED);
  }
}
