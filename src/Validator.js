import CustomError from './CustomError.js';
import LOTTO_INFO from './constants/lottoInfo.js';
import { ERROR_MESSAGE } from './constants/message.js';
import {
  isEmptyString,
  isIntegarNumList,
  isIntegarString,
  isValidPurchaseUnit,
  hasInvalidNumberRange,
  hasDuplicateNumber,
} from './utils/validation.js';

class Validator {
  static async checkPurchaseAmount(input) {
    if (isEmptyString(input)) throw new CustomError(ERROR_MESSAGE.empty);
    if (!isIntegarString(input))
      throw new CustomError(ERROR_MESSAGE.notInteger);
    if (!isValidPurchaseUnit(Number(input)))
      throw new CustomError(ERROR_MESSAGE.purchaseUnit);
  }

  static async checkWinningNumbers(input) {
    if (isEmptyString(input)) throw new CustomError(ERROR_MESSAGE.empty);

    const inputList = input.split(',');
    if (inputList.length !== LOTTO_INFO.lottoNumber.count)
      throw new CustomError(ERROR_MESSAGE.invalidWinningNumberCount);
    if (!isIntegarNumList(inputList))
      throw new CustomError(ERROR_MESSAGE.notIntegerList);

    const numberList = inputList.map(Number);
    if (hasInvalidNumberRange(numberList))
      throw new CustomError(ERROR_MESSAGE.invalidWinningNumberRange);
    if (hasDuplicateNumber(numberList))
      throw new CustomError(ERROR_MESSAGE.duplicate);
  }
}

export default Validator;
