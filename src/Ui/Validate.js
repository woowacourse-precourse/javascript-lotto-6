import COMMON_VALUE from '../constants/\bcommonValue';
import { ERROR_MESSAGE } from '../constants/message';

const Validate = {
  PurchaseAmount(purchaseAmount) {
    if (purchaseAmount % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.PURCHASE_AMOUNT);
    } else if (Number.isNaN(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.INPUT_NON_NUMB);
    }
  },

  WinningNumbers(winningNumbers) {
    if (winningNumbers.includes(NaN)) {
      throw new Error(ERROR_MESSAGE.INPUT_NON_NUMB);
    } else if (this.checkSameNumber(winningNumbers)) {
      throw new Error(ERROR_MESSAGE.INPUT_SAME_NUMB);
    } else if (winningNumbers.length < 6 || winningNumbers.length > 6) {
      throw new Error(ERROR_MESSAGE.NOT_INPUT_6);
    } else if (this.checkBounds(winningNumbers)) {
      throw new Error(ERROR_MESSAGE.OUT_OF_BOUNDS);
    }
  },

  BonusNumber(bonusNumber) {
    if (Number.isNaN(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.INPUT_NON_NUMB);
    } else if (
      bonusNumber < COMMON_VALUE.MIN ||
      COMMON_VALUE.MAX < bonusNumber
    ) {
      throw new Error(ERROR_MESSAGE.OUT_OF_BOUNDS);
    }
  },

  checkSameNumber(winningNumbers) {
    return [...new Set(winningNumbers)].length < 6 ? true : false;
  },

  checkBounds(winningNumbers) {
    winningNumbers.forEach((number) => {
      if (number < COMMON_VALUE.MIN || number > COMMON_VALUE.MAX) {
        return true;
      }
    });

    return false;
  },
};

export default Object.freeze(Validate);
