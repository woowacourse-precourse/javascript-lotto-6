import { ERROR_MESSAGE, RANDOM_NUMBER_RANGE } from '../modules/constant.js';
import ValidationUtils from '../utils/ValidationUtils.js';

const { checkIsInRange, checkIsNumber } = ValidationUtils;

class BonusNumber {
  #number;

  constructor(number) {
    this.#validateBonusNumber(number);
    this.#number = number;
  }

  #validateBonusNumber(number) {
    const bonusNumberIsNumber = checkIsNumber(number);
    if (!bonusNumberIsNumber) throw new Error(ERROR_MESSAGE.isNotNumber);

    const bonusNumberIsInRange = checkIsInRange(
      number,
      RANDOM_NUMBER_RANGE.max,
      RANDOM_NUMBER_RANGE.min
    );
    if (!bonusNumberIsInRange) throw new Error(ERROR_MESSAGE.isNotInRange);
  }

  getBonusNumber() {
    return Number(this.#number);
  }
}

export default BonusNumber;
