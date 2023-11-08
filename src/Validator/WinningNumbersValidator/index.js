import Formatter from '../../Formatter/index.js';
import ValidationError from '../ValidationError/index.js';
import { NUMBER, ERROR } from '../../constants/index.js';
import Validator from '../index.js';

class WinningNumbersValidator extends Validator {
  static #validateDuplication(numbers) {
    if (
      new Set(numbers).size !== NUMBER.lottoCount ||
      numbers.length !== NUMBER.lottoCount
    ) {
      throw new ValidationError(ERROR.invalidWinningNumbers);
    }
  }

  static validateWinningNumbers(numbers) {
    const formattedNumbers = Formatter.toNumbers(numbers);

    super.validateRangeOfNumbers(formattedNumbers);
    this.#validateDuplication(formattedNumbers);
  }
}

export default WinningNumbersValidator;
