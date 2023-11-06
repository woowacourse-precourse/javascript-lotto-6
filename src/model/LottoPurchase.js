import { printErrorMessage, printMessage } from '../utils/printMessage.js';
import MESSAGES from '../constants/messages.js';
import NUMBERS from '../constants/numbers.js';
import InputView from '../view/InputView.js';

class LottoPurchase {
  static validate(purchaseAmount) {
    if (purchaseAmount % NUMBERS.purchaseUnit !== 0) {
      printErrorMessage(`${MESSAGES.nonThousandUnitMessage}`);
    }

    if (purchaseAmount > NUMBERS.maxPurchaseAmount) {
      printErrorMessage(`${MESSAGES.errorHeader}${MESSAGES.inputLimitMessage}`);
      return;
    }

    if (!purchaseAmount.length) {
      printErrorMessage(
        `${MESSAGES.errorHeader}${MESSAGES.emptyPurchaseAmountInput}`,
      );
    }
  }
}

export default LottoPurchase;
