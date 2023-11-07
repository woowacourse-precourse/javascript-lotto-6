import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/message.js';
import Validator from '../Validator.js';

class InputView {
  static async readPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(
      INPUT_MESSAGE.purchaseAmount,
    );
    Validator.checkPurchaseAmount(purchaseAmount);

    return Number(purchaseAmount);
  }

  static async readWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(
      INPUT_MESSAGE.winningNumbers,
    );
    Validator.checkWinningNumbers(winningNumbers);

    return winningNumbers.split(',').map(Number);
  }

  static async readBonusNumber() {
    const bonusNumbers = await Console.readLineAsync(
      INPUT_MESSAGE.bonusNumbers,
    );
    Validator.checkBonusNumbers(bonusNumbers);

    return Number(bonusNumbers);
  }
}

export default InputView;
