import { Console } from '@woowacourse/mission-utils';
import { CONSOLE_MESSAGE, CONSTANT_NUMBERS } from './constants.js';
import Validation from './Validation.js';

class UserInput {
  // 구입 금액 입력
  static async getPurchaseAmount() {
    const purchaseAmountInput = await Console.readLineAsync(
      CONSOLE_MESSAGE.TYPE_PURCHASE_AMOUNT
    );
    const purchaseAmount = parseInt(purchaseAmountInput);
    Validation.validatePurchaseAmount(purchaseAmount);
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

      Validation.checkIfNumber(integerNumber);
      Validation.checkIfNumberInRange(
        integerNumber,
        CONSTANT_NUMBERS.LOTTO_NUMBER_MIN,
        CONSTANT_NUMBERS.LOTTO_NUMBER_MAX
      );
      winningNumbersArray.push(integerNumber);
    }
    Validation.checkDuplicate(winningNumbersArray);
    Validation.checkWinningNumberCount(winningNumbersArray);

    return winningNumbersArray;
  }

  // 보너스 번호 입력
  static async getBonusNumber(winningNumbersArray) {
    const bonusNumberInput = await Console.readLineAsync(
      CONSOLE_MESSAGE.TYPE_BONUS_NUMBER
    );
    const bonusNumber = parseInt(bonusNumberInput);
    Validation.checkIfNumber(bonusNumber);
    Validation.checkIfArrayHasThisNumber(winningNumbersArray, bonusNumber);
    return bonusNumber;
  }
}

export default UserInput;
