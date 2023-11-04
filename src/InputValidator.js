import { ERROR_MESSAGES } from "./constants/messages.js";

export class InputValidator {
  moneyValidator(money) {
    if (!Number(money)) {
      throw new Error(ERROR_MESSAGES.NOT_A_NUMBER);
    } else if (Number(money) < 1000) {
      throw new Error(ERROR_MESSAGES.IT_IS_TO_SMALL);
    } else if (money.includes(".") || money.includes(" ")) {
      throw new Error(ERROR_MESSAGES.ONLY_NUMBER);
    } else if (!Number(money) % 1000 === 0) {
      throw new Error(ERROR_MESSAGES.ONLY_THOUSANDWON_UNIT);
    }
  }

  winningNumbersValidator(numbers) {
    const winningNumbers = numbers.split(",").map(Number);

    if (new Set(winningNumbers).size !== 6) {
      throw new Error(ERROR_MESSAGES.UNCORRECT_INPUT);
    }

    winningNumbers.forEach((num) => {
      if (num <= 0 || num > 45) {
        throw new Error(ERROR_MESSAGES.UNCORRECT_INPUT);
      } else if (Number.isNaN(num)) {
        throw new Error(ERROR_MESSAGES.UNCORRECT_INPUT);
      }
    });
  }

  bonusNumberValidator(number, winningNumbers) {
    const bonusNumber = Number(number);

    if (
      bonusNumber < 1 ||
      bonusNumber > 45 ||
      Number.isNaN(bonusNumber) ||
      winningNumbers.includes(bonusNumber)
    ) {
      throw new Error(ERROR_MESSAGES.UNCORRECT_INPUT);
    }
  }
}
