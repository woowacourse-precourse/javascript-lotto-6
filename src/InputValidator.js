import { ERROR_MESSAGES } from "./constants/messages.js";

export class InputValidator {
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
