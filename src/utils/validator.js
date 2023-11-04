import printErrorMessage from './printMessage.js';
import MESSAGES from '../constants/messages.js';

const isValidPerchaseAmount = perchaseAmount => {
  if (perchaseAmount % 1000) {
    printErrorMessage(
      `${MESSAGES.errorHeader}${MESSAGES.nonThousandUnitMessage}`,
    );
    return;
  }
  if (perchaseAmount > 20000) {
    printErrorMessage(`${MESSAGES.errorHeader}${MESSAGES.inputLimitMessage}`);
    return;
  }
  if (!perchaseAmount.length) {
    printErrorMessage(
      `${MESSAGES.errorHeader}${MESSAGES.emptyPurchaseAmountInput}`,
    );
  }
};

export default isValidPerchaseAmount;
