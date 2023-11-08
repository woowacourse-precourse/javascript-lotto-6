import {
  LOTTO_PRICE,
  LOTTO_RANGE_MIN,
  LOTTO_RANGE_MAX,
} from './constants/gameinfo.js';
import { ERROR_MESSAGE } from './constants/message.js';
class Validation {
  static hasDuplication([...numbers]) {
    const set = new Set(numbers);
    if (numbers.length !== set.size) {
      return true;
    }

    return false;
  }

  static hasProperRange([...numbers]) {
    return numbers
      .map(Number)
      .every(
        (number) => LOTTO_RANGE_MIN <= number && number <= LOTTO_RANGE_MAX
      );
  }

  static isProperPurchaseAmount(price) {
    const purchaseAmount = Number(price);

    if (purchaseAmount < LOTTO_PRICE) {
      throw new Error(ERROR_MESSAGE.min_purchase_amount);
    }

    if (purchaseAmount % LOTTO_PRICE !== 0) {
      throw new Error(ERROR_MESSAGE.cant_divide_purchase_amount);
    }

    return true;
  }

  static isDuplicateBonusNumber([...numbers], bonusNumber) {
    return numbers.includes(bonusNumber);
  }

  static isProperWinningNumbers(userInput) {
    const winningNumbers = userInput.split(',');
    if (winningNumbers.length === 0) {
      return false;
    }

    if (winningNumbers.length !== 6) {
      return false;
    }

    if (!Validation.hasProperRange(winningNumbers)) {
      return false;
    }

    if (Validation.hasDuplication(winningNumbers)) {
      return false;
    }

    return true;
  }
}
export default Validation;
