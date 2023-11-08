import { Console } from '@woowacourse/mission-utils';
import {
  CONSOLE_MESSAGE,
  ERROR_MESSAGE,
  CONSTANT_NUMBERS,
} from './constants.js';

class UserInput {
  // 구입 금액 입력
  static async getPurchaseAmount() {
    const purchaseAmountInput = await Console.readLineAsync(
      CONSOLE_MESSAGE.TYPE_PURCHASE_AMOUNT
    );
    const purchaseAmount = parseInt(purchaseAmountInput);

    if (isNaN(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
    }

    if (purchaseAmount % CONSTANT_NUMBERS.THOUSAND != 0) {
      throw new Error(ERROR_MESSAGE.NOT_DIVISIBLE_BY_THOUSAND);
    }
    return purchaseAmount;
  }

  // 당첨 번호 6개 입력
  static async getSixWinningNumbers() {
    const winningNumbersInput = await Console.readLineAsync(
      CONSOLE_MESSAGE.TYPE_WINNING_NUMBERS
    );
    const winningNumbersStringArray = winningNumbersInput.split(',');
    const winningNumbersArray = [];

    for (const stringNumber of winningNumbersStringArray) {
      const integerNumber = parseInt(stringNumber);

      if (isNaN(integerNumber)) {
        throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
      }

      if (integerNumber < 1 || integerNumber > 45) {
        throw new Error(ERROR_MESSAGE.BETWEEN_MIN_AND_MAX);
      }
      winningNumbersArray.push(integerNumber);
    }

    if (new Set(winningNumbersArray).size !== winningNumbersArray.length) {
      throw new Error(ERROR_MESSAGE.DUPLICATED);
    }

    if (winningNumbersArray.length !== 6) {
      throw new Error(ERROR_MESSAGE.SHOULD_BE_SIX);
    }
    return winningNumbersArray;
  }

  // 보너스 번호 입력
  static async getBonusNumber(winningNumbersArray) {
    const bonusNumberInput = await Console.readLineAsync(
      CONSOLE_MESSAGE.TYPE_BONUS_NUMBER
    );

    const bonusNumber = parseInt(bonusNumberInput);
    if (isNaN(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
    }
    if (winningNumbersArray.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.DUPLICATED);
    }
    return bonusNumber;
  }
}

export default UserInput;
