import MESSAGES from '../constants/messages.js';
import NUMBERS from '../constants/numbers.js';

class LottoPurchase {
  static validate(purchaseAmount) {
    if (purchaseAmount % NUMBERS.purchaseUnit !== 0) {
      throw new Error(
        `${MESSAGES.errorHeader}${MESSAGES.nonThousandUnitMessage}`,
      );
    }

    if (purchaseAmount > NUMBERS.maxPurchaseAmount) {
      throw new Error(`${MESSAGES.errorHeader}${MESSAGES.inputLimitMessage}`);
    }

    if (!purchaseAmount.length) {
      throw new Error(
        `${MESSAGES.errorHeader}${MESSAGES.emptyPurchaseAmountInput}`,
      );
    }
  }
}

export default LottoPurchase;
