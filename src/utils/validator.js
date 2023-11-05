import { printErrorMessage } from './printMessage.js';
import MESSAGES from '../constants/messages.js';
import NUMBERS from '../constants/numbers.js';

const isValidPerchaseAmount = perchaseAmount => {
  if (perchaseAmount % NUMBERS.perchaseUnit) {
    printErrorMessage(
      `${MESSAGES.errorHeader}${MESSAGES.nonThousandUnitMessage}`,
    );
    return;
  }
  if (perchaseAmount > NUMBERS.maxPerchaseAmount) {
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
