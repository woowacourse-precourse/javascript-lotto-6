import { WINNING_NUMBERS_ERROR_MESSAGE } from "../constants/Message";

export default class WinningNumbersValidator {
  static validateWinningNumbers(numbers) {
    if (!numbers || numbers.length === 0) {
      throw new Error(WINNING_NUMBERS_ERROR_MESSAGE.emptyInput);
    }

    if (numbers.length !== 6) {
      throw new Error(WINNING_NUMBERS_ERROR_MESSAGE.wrongCount);
    }

    const numbersSet = new Set(numbers);
    if (numbers.length !== numbersSet.size) {
      throw new Error(WINNING_NUMBERS_ERROR_MESSAGE.wrongWinningNumber);
    }

    for (const number of numbers) {
      if (typeof number !== "number" || isNaN(number)) {
        throw new Error(WINNING_NUMBERS_ERROR_MESSAGE.notNaturalNumber);
      }

      if (number < 1 || number > 45) {
        throw new Error(WINNING_NUMBERS_ERROR_MESSAGE.wrongRange);
      }
    }
  }
}
