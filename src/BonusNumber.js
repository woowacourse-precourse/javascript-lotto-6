import CONSTANTS from './constants';

class BonusNumber {
  #value;

  /**
   * @param {string} numberInput
   * @param {number[]} winningValues
   */
  constructor(numberInput, winningValues) {
    const parsed = this.#parse(numberInput);
    this.#validate(parsed, winningValues);

    this.#value = parsed;
  }

  getValue() {
    return this.#value;
  }

  /**
   * @param {string} numberInput
   */
  #parse(numberInput) {
    if (numberInput.includes(' ')) {
      throw new Error(CONSTANTS.ERRORS.INCLUDE_BLANK);
    }

    const parsed = Number.parseInt(numberInput, 10);

    return parsed;
  }

  /**
   * @param {number} value
   * @param {number[]} winningValues
   */
  #validate(value, winningValues) {
    this.#validateNaN(value);
    this.#validateBetweenRange(value);
    this.#validateDuplicated(value, winningValues);
  }

  /**
   * @param {number} value
   */
  #validateNaN(value) {
    if (isNaN(value)) {
      throw new Error(CONSTANTS.ERRORS.BONUS_NUMBER_NOT_NUMBER);
    }
  }

  /**
   * @param {number} value
   */
  #validateBetweenRange(value) {
    if (
      value < CONSTANTS.NUMBERS.LOTTO_LOW_END ||
      value > CONSTANTS.NUMBERS.LOTTO_HIGH_END
    ) {
      throw new Error(CONSTANTS.ERRORS.BONUS_NUMBER_NOT_BETWEEN_RANGE);
    }
  }

  /**
   * @param {number} value
   * @param {number[]} winningValues
   */
  #validateDuplicated(value, winningValues) {
    if (winningValues.includes(value)) {
      throw new Error(CONSTANTS.ERRORS.BONUS_NUMBER_DUPLICATED);
    }
  }
}

export default BonusNumber;
