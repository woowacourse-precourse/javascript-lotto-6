import {
  isDuplicated,
  isEmpty,
  isLengthInvalid,
  isLessThanLottoPrice,
  isNotMultipleOfLottoPrice,
  isPositiveInteger,
  isRangeInvalid,
} from '../util/index.js';
import CustomError from '../error.js';
import { ERROR, WINNING_NUMBER_DELIMITER } from '../constant/index.js';

const {
  IS_NOT_POSITIVE_INTEGER,
  IS_LESS_THAN_LOTTO_PRICE,
  IS_NOT_MULTIPLY_OF_LOTTO_PRICE,
  IS_NOT_LOTTO_LENGTH,
  IS_EMPTY,
  IS_NOT_IN_LOTTO_RANGE,
  IS_DUPLICATED,
} = ERROR;

export class LottoValidation {
  static amount(amount) {
    if (!isPositiveInteger(amount)) throw new CustomError(IS_NOT_POSITIVE_INTEGER);
    if (isLessThanLottoPrice(amount)) throw new CustomError(IS_LESS_THAN_LOTTO_PRICE);
    if (isNotMultipleOfLottoPrice(amount)) throw new CustomError(IS_NOT_MULTIPLY_OF_LOTTO_PRICE);
  }

  static lotto(numbers) {
    if (isLengthInvalid(numbers)) throw new CustomError(IS_NOT_LOTTO_LENGTH);
    numbers.forEach((number) => {
      if (isEmpty(number)) throw new CustomError(IS_EMPTY);
      if (!isPositiveInteger(number)) throw new CustomError(IS_NOT_POSITIVE_INTEGER);
      if (isRangeInvalid(number)) throw new CustomError(IS_NOT_IN_LOTTO_RANGE);
    });
    if (isDuplicated(numbers)) throw new CustomError(IS_DUPLICATED);
  }

  static winningNumbers(numbers) {
    const numbersArray = numbers.split(WINNING_NUMBER_DELIMITER).map((number) => number.trim());
    LottoValidation.lotto(numbersArray);
  }

  static bonus(winningNumbers, bonusNumbers) {
    if (isEmpty(bonusNumbers)) throw new CustomError(IS_EMPTY);
    if (!isPositiveInteger(bonusNumbers)) throw new CustomError(IS_NOT_POSITIVE_INTEGER);
    if (isRangeInvalid(bonusNumbers)) throw new CustomError(IS_NOT_IN_LOTTO_RANGE);
    if (isDuplicated([...winningNumbers, bonusNumbers])) throw new CustomError(IS_DUPLICATED);
  }
}

export default LottoValidation;
