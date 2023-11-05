import { MESSAGE } from "./Constant.js";

class Validation {
  static validateLottoPrice(price) {
    if (isNaN(price)) {
      throw new Error(MESSAGE.ERROR_NOT_NUMBER);
    }

    if (price <= 0) {
      throw new Error(MESSAGE.ERROR_ZERO_PRICE);
    }

    if (price % 1000 !== 0) {
      throw new Error(MESSAGE.ERROR_INVALID_PRICE);
    }
    return true;
  }

  static validateLottoNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error(MESSAGE.ERROR_LOTTO_NUMBER);
    }

    if (new Set(numbers).size !== 6) {
      throw new Error(MESSAGE.ERROR_NUMBER_DUPLICATED);
    }
    return true;
  }

  static validateWinningNumbers(numbers) {
    const winningNumbers = numbers.split(",").map(Number);
    if (winningNumbers.length !== 6) {
      throw new Error(MESSAGE.ERROR_WINNING_NUMBER);
    }

    if (new Set(winningNumbers).size !== 6) {
      throw new Error(MESSAGE.ERROR_WINNING_DUPLICATED);
    }

    for (const number of winningNumbers) {
      if (number < 1 || number > 45) {
        throw new Error(MESSAGE.ERROR_LOTTO_BOUND);
      }
    }
    return true;
  }

  static validateBonusNumber(bonusNumber, winningNumbers) {
    if (winningNumbers.includes(Number(bonusNumber))) {
      throw new Error(MESSAGE.ERROR_BONUS_DUPLICATED);
    }

    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(MESSAGE.ERROR_LOTTO_BOUND);
    }
    return true;
  }
}

export default Validation;
