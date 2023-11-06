import CONSTANTS from './constants';

class WinningNumbers {
  #values;

  /**
   * @param {string} numbersInput
   */
  constructor(numbersInput) {
    const parsed = this.#parse(numbersInput);
    this.#validate(parsed);

    this.#values = parsed;
  }

  /**
   * @param {string} numbersInput
   */
  #parse(numbersInput) {
    if (numbersInput.includes(' ')) {
      throw new Error(CONSTANTS.ERRORS.WINNING_NUMBERS_INCLUDE_BLANK);
    }

    const parsed = numbersInput.split(',').map(x => Number.parseInt(x, 10));

    return parsed;
  }

  /**
   * @param {number[]} values
   */
  #validate(values) {
    this.#validateNaN(values);
    this.#validateBetweenRange(values);
    this.#validateDuplicated(values);
  }

  /**
   * @param {number[]} values
   */
  #validateNaN(values) {
    if (values.some(isNaN)) {
      throw new Error(CONSTANTS.ERRORS.WINNING_NUMBERS_NOT_NUMBER);
    }
  }

  /**
   * @param {number[]} values
   */
  #validateBetweenRange(values) {
    if (
      values.some(value =>
        this.#isNotBetweenRange(
          value,
          CONSTANTS.NUMBERS.LOTTO_LOW_END,
          CONSTANTS.NUMBERS.LOTTO_HIGH_END,
        ),
      )
    ) {
      throw new Error(CONSTANTS.ERRORS.WINNING_NUMBERS_NOT_BETWEEN_RANGE);
    }
  }

  /**
   * @param {number[]} values
   */
  #validateDuplicated(values) {
    const deduplicated = new Set(values);

    if (deduplicated.size !== values.length) {
      throw new Error(CONSTANTS.ERRORS.WINNING_NUMBERS_DUPLICATED);
    }
  }

  /**
   * @param {number} value
   * @param {number} low
   * @param {number} high
   */
  #isNotBetweenRange(value, low, high) {
    return value < low || high < value;
  }
}

export default WinningNumbers;
