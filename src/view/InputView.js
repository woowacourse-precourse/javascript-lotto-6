import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/message.js';
import Validator from '../Validator.js';

class InputView {
  static async readPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(INPUT_MESSAGE.purchaseAmount);

    try {
      Validator.checkPurchaseAmount(purchaseAmount);
      return Number(purchaseAmount);
    } catch (e) {
      Console.print(e.message);
      const returnValue = await this.readPurchaseAmount();
      return returnValue;
    }
  }

  static async readWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(INPUT_MESSAGE.winningNumbers);

    try {
      Validator.checkWinningNumbers(winningNumbers);
      return winningNumbers.split(',').map(Number);
    } catch (e) {
      Console.print(e.message);
      const returnValue = await this.readWinningNumbers();
      return returnValue;
    }
  }

  static async readBonusNumber() {
    const bonusNumbers = await Console.readLineAsync(INPUT_MESSAGE.bonusNumbers);

    try {
      Validator.checkBonusNumbers(bonusNumbers);
      return Number(bonusNumbers);
    } catch (e) {
      Console.print(e.message);
      const returnValue = await this.readBonusNumber();
      return returnValue;
    }
  }
}

export default InputView;
