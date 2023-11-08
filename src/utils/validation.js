import { ERROR, OPTIONS } from '../constants/Constants.js';

class Validator {
  static purchasePrice(input) {
    Validator.checkValidNumber(input);
    Validator.checkMinimumPrice(input);
    Validator.checkPriceUnit(input);
  }

  static checkValidNumber(input) {
    if (Number.isNaN(input)) {
      throw new Error(ERROR.invalidPriceNumber);
    }
  }

  static checkMinimumPrice(input) {
    if (input < OPTIONS.priceUnit) {
      throw new Error(ERROR.invalidPriceLeast);
    }
  }

  static checkPriceUnit(input) {
    if (input % OPTIONS.priceUnit !== 0) {
      throw new Error(ERROR.invalidPriceUnit);
    }
  }

  static winningNumbers(input) {
    Validator.checkNumberCount(input);
    Validator.checkDuplicateNumbers(input);
    Validator.checkNumberRange(input);
  }

  static checkNumberCount(input) {
    if (input.length !== 6) {
      throw new Error(ERROR.invalidNumberCount);
    }
  }

  static checkDuplicateNumbers(input) {
    const inputSet = new Set(input);
    if (inputSet.size !== 6) {
      throw new Error(ERROR.duplicateNumbers);
    }
  }

  static checkNumberRange(input) {
    input.forEach((element) => {
      if (element < OPTIONS.lottoNumberMin) {
        throw new Error(ERROR.invalidNumberRange);
      }
      if (element > OPTIONS.lottoNumberMax) {
        throw new Error(ERROR.invalidNumberRange);
      }
    });
  }
}

export default Validator;
