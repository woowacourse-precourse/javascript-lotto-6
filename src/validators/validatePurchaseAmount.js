// import ERROR_MESSAGES from '../constants/ErrorMessage';

import ERROR_MESSAGES from '../constants/ErrorMessages.js';

export default function validatePurchaseAmount(purchaseAmountInput) {
  if (Number.isNaN(purchaseAmountInput)) {
    throw new Error(ERROR_MESSAGES.invalidPurchaseAmount);
  }
  if (purchaseAmountInput < 1000) {
    throw new Error(ERROR_MESSAGES.invalidPurchaseAmount);
  }
  if (purchaseAmountInput % 1000 !== 0) {
    throw new Error(ERROR_MESSAGES.notMultipleOfThousand);
  }
}
