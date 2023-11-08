import { BONUS_NUMBER_ERROR_MESSAGE } from "../constants/Message.js";

export default class BonusNumberValidator {
  static validateBonusNumber(bonusNumber, winningNumbers) {
    const number = parseInt(bonusNumber, 10);

    if (isNaN(number)) {
      throw new Error(BONUS_NUMBER_ERROR_MESSAGE.wrongBonusNumber);
    }

    if (number <= 0) {
      throw new Error(BONUS_NUMBER_ERROR_MESSAGE.notNaturalNumber);
    }

    if (winningNumbers.includes(number)) {
      throw new Error(BONUS_NUMBER_ERROR_MESSAGE.duplicatedNumber);
    }
  }
}
