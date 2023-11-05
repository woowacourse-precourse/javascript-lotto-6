import { ERROR_MESSAGES } from "./constants/messages.js";

export class InputValidator {
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
