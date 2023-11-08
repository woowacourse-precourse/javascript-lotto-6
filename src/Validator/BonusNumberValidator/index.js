import Formatter from '../../Formatter/index.js';
import ValidationError from '../ValidationError/index.js';
import { ERROR } from '../../constants/index.js';
import Validator from '../index.js';

class BonusNumberValidator extends Validator {
  static #validateDuplication(winningNumbers, bonusNumbers) {
    const isDuplicate = bonusNumbers.some((bonusNumber) =>
      winningNumbers.includes(Number(bonusNumber)),
    );
    if (!bonusNumbers.length || isDuplicate || bonusNumbers.length > 1) {
      throw new ValidationError(ERROR.invalidBonusNumber);
    }
  }

  static validateBonusNumber(winningNumbers, number) {
    const formattedNumbers = Formatter.toNumbers(number);

    super.validateRangeOfNumbers(formattedNumbers);
    this.#validateDuplication(winningNumbers, formattedNumbers);
  }
}

export default BonusNumberValidator;
