import Constants from "../Constants/ValidateConstants.js";

class ValidateInput {
  static validateNaturalNumber(number, subject) {
    if (
      isNaN(number) ||
      number < Constants.MIN_WINNING_NUMBER ||
      number % 1 !== 0
    ) {
      throw new Error(Constants.INPUT_ERROR_MESSAGES.NATURAL_NUMBER(subject));
    }
  }

  static validateAmount(amount) {
    ValidateInput.validateNaturalNumber(amount, "구입 금액은");

    if (amount < 1000) {
      throw new Error(Constants.INPUT_ERROR_MESSAGES.MIN_AMOUNT);
    }

    if (amount > 1000 && amount % 1000 !== 0) {
      throw new Error(Constants.INPUT_ERROR_MESSAGES.AMOUNT_UNIT);
    }
  }

  static validateWinningNumber(numbers) {
    const subject = "당첨 번호는";
    if (numbers.length !== 6) {
      throw new Error(Constants.INPUT_ERROR_MESSAGES.WINNING_NUMBER_COUNT);
    }

    const set = new Set(numbers);
    if (numbers.length !== set.size) {
      throw new Error(Constants.INPUT_ERROR_MESSAGES.DUPLICATE_NUMBER);
    }

    numbers.forEach((number) => {
      ValidateInput.validateNaturalNumber(number, subject);
    });

    if (
      numbers.some(
        (number) =>
          number < Constants.MIN_WINNING_NUMBER ||
          number > Constants.MAX_WINNING_NUMBER,
      )
    ) {
      throw new Error(Constants.INPUT_ERROR_MESSAGES.OUT_OF_RANGE(subject));
    }
  }

  static validateBonusNumber(number, winningNumber) {
    const subject = "보너스 번호는";
    ValidateInput.validateNaturalNumber(number, subject);

    if (
      number < Constants.MIN_WINNING_NUMBER ||
      number > Constants.MAX_WINNING_NUMBER
    ) {
      throw new Error(Constants.INPUT_ERROR_MESSAGES.OUT_OF_RANGE(subject));
    }

    if (winningNumber.some((item) => item === number)) {
      throw new Error(Constants.INPUT_ERROR_MESSAGES.BONUS_NUMBER_DUPLICATE);
    }
  }
}

export default ValidateInput;
