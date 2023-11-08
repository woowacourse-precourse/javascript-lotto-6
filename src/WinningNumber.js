import Validator from "./Validator.js";
import LOTTO from "./constant/LOTTO.js";
import PRIZE from "./constant/PRIZE.js";

class WinningNumber {
  #winningNumberArray;

  constructor(winningNumberString) {
    this.#validateWinningNumber(winningNumberString);
    this.#winningNumberArray =
      this.#splitStringToNumberArrayByComma(winningNumberString);
  }

  #validateWinningNumberArray(array) {
    if (!Validator.isArrayLengthEqualTo(array, LOTTO.SIZE)) {
      throw new Error(PRIZE.ERROR.WINNING_NUMBER_SIZE);
    }

    if (!array.every((numStr) => Validator.isInLottoNumberRange(numStr))) {
      throw new Error(PRIZE.ERROR.WINING_NUMBER_RANGE_NUMBER);
    }

    if (Validator.hasDuplicate(array)) {
      throw new Error(PRIZE.ERROR.WINING_NUMBER_DUPLICATE);
    }
  }

  #validateWinningNumber(string) {
    if (!Validator.isStringOnlyDigitsAndComma(string)) {
      throw new Error(PRIZE.ERROR.WINNING_NUMBER_STRING_TYPE);
    }
    const array = string.split(",");

    this.#validateWinningNumberArray(array);
  }

  #splitStringToNumberArrayByComma(string) {
    return string.split(",").map(Number);
  }

  get numberArray() {
    return this.#winningNumberArray;
  }
}

export default WinningNumber;
