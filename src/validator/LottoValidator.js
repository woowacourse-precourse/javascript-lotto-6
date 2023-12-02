import CustomError from '../utils/CustomError.js';
import { ERROR } from '../constants/messages.js';
import { NUMBERS } from '../constants/constants.js';

class LottoValidator {
  static validator(userLottoNumbers) {
    const validators = [
      this.#checkEmpty,
      this.#checkLength,
      this.#checkIsNumber,
      this.#checkDuplication,
      this.#checkRange,
    ];

    validators.forEach(validator => {
      validator(userLottoNumbers);
    });
  }

  static #checkEmpty(userLottoNumbers) {
    if (userLottoNumbers.length === 0) {
      throw new CustomError(ERROR.emptyAmountInput);
    }
  }

  static #checkLength(userLottoNumbers) {
    if (userLottoNumbers.length !== NUMBERS.lottoLength) {
      throw new CustomError(ERROR.invalidLength);
    }
  }

  static #checkIsNumber(userLottoNumbers) {
    userLottoNumbers.forEach(number => {
      if (Number.isNaN(number)) {
        throw new CustomError(ERROR.notNumber);
      }
    });
  }

  static #checkDuplication(userLottoNumbers) {
    const removedDuplication = new Set(userLottoNumbers);

    if (userLottoNumbers.length !== removedDuplication.size) {
      throw new CustomError(ERROR.duplicatedNumber);
    }
  }

  static #checkRange(userLottoNumbers) {
    userLottoNumbers.forEach(number => {
      if (number > NUMBERS.maxAmount || number < NUMBERS.minNumber) {
        throw new CustomError(ERROR.invalidRange);
      }
    });
  }
}

export default LottoValidator;
