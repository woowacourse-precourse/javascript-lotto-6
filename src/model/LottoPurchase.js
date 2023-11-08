import ERRORMESSAGES from '../constants/errorMessages';
import NUMBERS from '../constants/numbers';

class LottoPurchase {
  static validate(purchaseAmount) {
    if (purchaseAmount % NUMBERS.purchaseUnit !== 0) {
      throw new Error(
        `${ERRORMESSAGES.errorHeader}${ERRORMESSAGES.nonThousandUnitMessage}`,
      );
    }

    if (purchaseAmount > NUMBERS.maxPurchaseAmount) {
      throw new Error(
        `${ERRORMESSAGES.errorHeader}${ERRORMESSAGES.inputLimitMessage}`,
      );
    }

    if (!purchaseAmount.length) {
      throw new Error(
        `${ERRORMESSAGES.errorHeader}${ERRORMESSAGES.emptyPurchaseAmountInput}`,
      );
    }
  }
}

export default LottoPurchase;
