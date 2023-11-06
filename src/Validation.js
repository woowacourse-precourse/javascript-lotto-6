import { INPUT_ERROR } from './constants/Messages';

class Validation {
  static validateInputEmpty(input) {
    if (input === '') {
      throw new Error(INPUT_ERROR.null);
    }
  }

  static validateInputNumber(input) {
    if (Number.isNaN(input)) {
      throw new Error(INPUT_ERROR.type);
    }
  }

  static validateInputZeroOrLess(input) {
    if (input <= 0) {
      throw new Error(INPUT_ERROR.zero_or_less);
    }
  }

  static validateInputThousands(input) {
    if (input % 1000 !== 0) {
      throw new Error(INPUT_ERROR.thousands);
    }
  }

  static validateInputHasCommas(input) {
    if (!input.includes(',')) {
      throw new Error(INPUT_ERROR.commas);
    }
  }

  static validateInputLength(input, count) {
    if (input.length !== count) {
      throw new Error(INPUT_ERROR.length(count));
    }
  }

  static validateInputOutOfLottoRange(input) {
    if (input < 1 || input > 45) {
      throw new Error(INPUT_ERROR.range);
    }
  }

  static validateInputDuplicate(input) {
    if (new Set(input).size !== input.length) {
      throw new Error(INPUT_ERROR.duplicate);
    }
  }

  static validateInputDuplicateWinningNumbers(input, winningNumbers) {
    if (winningNumbers.includes(input)) {
      throw new Error(INPUT_ERROR.duplicate_winning);
    }
  }
}

export default Validation;
