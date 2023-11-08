import { Random, Console } from '@woowacourse/mission-utils';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import { ERROR_MESSEGE } from '../constant/messages.js';
import Lottos from '../model/Lottos.js';

class WinningController {
  async inputWinning() {
    let winningNumber;
    while (true) {
      try {
        winningNumber = await InputView.inputWinningNumber();
        // this.validatePurchaseAmount(winningNumber);
        Console.print(winningNumber);
        break;
      } catch (error) {
        OutputView.printError(error.message);
      }
    }
  }

  validatePurchaseAmount(purchaseAmount) {
    if (!purchaseAmount) {
      throw new Error(ERROR_MESSEGE.notInput);
    }

    if (isNaN(purchaseAmount)) {
      throw new Error(ERROR_MESSEGE.notNumber);
    }

    if (purchaseAmount <= 0) {
      throw new Error(ERROR_MESSEGE.notPositive);
    }

    if (purchaseAmount % 1000 !== 0) {
      throw new Error(ERROR_MESSEGE.not1000Multiple);
    }
  }
}

export default WinningController;
