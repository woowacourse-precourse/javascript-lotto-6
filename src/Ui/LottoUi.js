import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, ERROR_MESSAGE } from '../constants/message';
import COMMON_VALUE from '../constants/\bcommonValue';

const LottoUi = {
  async inputPurchaseAmount() {
    try {
      const purchaseAmount = await Console.readLineAsync(MESSAGE.INPUT_MONEY);
      this.validatePurchaseAmount(Number(purchaseAmount));

      return Number(purchaseAmount);
    } catch (err) {
      Console.print(err.message);
      this.inputPurchaseAmount();
    }
  },

  async inputWinningNumbers() {
    try {
      const winningNumbers = await Console.readLineAsync(
        MESSAGE.INPUT_WINNING_NUMBERS
      )
        .split(',')
        .map((number) => Number(number));

      this.validateWinningNumbers(winningNumbers);

      return winningNumbers;
    } catch (err) {
      Console.print(err.message);
      this.inputWinningNumbers();
    }
  },

  async inputBonusNumber() {
    try {
      const bonusNumber = Number(
        await Console.readLineAsync(MESSAGE.INPUT_BONUS_NUMBER)
      );
      this.validateBonusNumber(bonusNumber);

      return bonusNumber;
    } catch (err) {
      Console.print(err.message);
      this.inputBonusNumber();
    }
  },

  alertFinishdrawLottos(numberOfLottos) {
    Console.print(`${numberOfLottos}${MESSAGE.FINISH_DRAW_LOTTOS}`);
  },

  printPurchasedLottos(purchasedLottos) {
    purchasedLottos.forEach((lotto) => {
      Console.print(lotto);
    });
  },

  checkSameNumber(winningNumbers) {
    return [...new Set(winningNumbers)].length < 6 ? true : false;
  },

  checkBounds(winningNumbers) {
    winningNumbers.forEach((number) => {
      if (number < COMMON_VALUE.MIN || number > COMMON_VALUE.MAX) {
        return false;
      }
    });

    return true;
  },

  validatePurchaseAmount(purchaseAmount) {
    if (purchaseAmount % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.PURCHASE_AMOUNT);
    }
  },

  validateWinningNumbers(winningNumbers) {
    if (winningNumbers.includes(NaN)) {
      throw new Error(ERROR_MESSAGE.INPUT_NON_NUMB);
    } else if (this.checkSameNumber(winningNumbers)) {
      throw new Error(ERROR_MESSAGE.INPUT_SAME_NUMB);
    } else if (winningNumbers.length <= 6) {
      throw new Error(ERROR_MESSAGE.NOT_INPUT_6);
    } else if (!this.checkBounds(winningNumbers)) {
      throw new Error(ERROR_MESSAGE.OUT_OF_BOUNDS);
    }
  },

  validateBonusNumber(bonusNumber) {
    if (Number.isNaN(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.INPUT_NON_NUMB);
    } else if (COMMON_VALUE.MIN < 1 || COMMON_VALUE.MAX > 45) {
      throw new Error(ERROR_MESSAGE.OUT_OF_BOUNDS);
    }
  },
};

export default Object.freeze(LottoUi);
