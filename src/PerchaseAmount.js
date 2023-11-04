import printErrorMessage from './utils/printErrorMessage.js';
import MESSAGES from './constants/messages.js';

class PerchaseAmount {
  validate(perchaseAmount) {
    if (perchaseAmount % 1000) {
      printErrorMessage(
        `${MESSAGES.errorHeader}${MESSAGES.nonThousandUnitMessage}`,
      );
      return;
    }
    if (perchaseAmount > 100000) {
      printErrorMessage(`${MESSAGES.errorHeader}${MESSAGES.inputLimitMessage}`);
      return;
    }
    if (!perchaseAmount.length) {
      printErrorMessage(
        `${MESSAGES.errorHeader}${MESSAGES.emptyPurchaseAmountInput}`,
      );
    }
  }
}
export default PerchaseAmount;
