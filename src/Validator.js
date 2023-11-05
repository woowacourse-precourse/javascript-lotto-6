import ErrorMessages from "./ErrorMessages.js";

class LottoValidator {
  static validatePurchaseAmount(amount) {
    if (amount % 1000 !== 0) {
      throw new Error(ErrorMessages.NOT_DIVISIBLE_AMOUNT);
    }
  }

  validateNumbers(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ErrorMessages.DUPLICATE_NUMBER);
    }

    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error(ErrorMessages.NUMBER_OUT_OF_RANGE);
    }
  }

  validateWinningNumbers(winningNumbers) {
    if (winningNumbers.length > 6) {
      throw new Error(LErrorMessages.TOO_MANY_WINNING_NUMBERS);
    }
    this.validateNumbers(winningNumbers);
  }
}

export default LottoValidator;
