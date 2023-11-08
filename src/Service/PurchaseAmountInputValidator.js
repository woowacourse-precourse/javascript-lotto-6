import { PURCHASE_AMOUNT_ERROR_MESSAGES } from '../Constant/Constants.js';
import {
  isNumber,
  isStartWithZero,
  isSmallerThanLottoPrice,
  isDivisibleByThousand,
} from './Common.js';

class PurchaseAmountInputValidator {
  validatePurChaseAmountInput(purchaseAmountInput) {
    this.validateNumber(purchaseAmountInput);
    this.validateStartWithZero(purchaseAmountInput);
    this.validateSmallerThanLottoPrice(purchaseAmountInput);
    this.validateDivisibleByThousand(purchaseAmountInput);
    return true;
  }

  validateNumber(purchaseAmountInput) {
    if (!isNumber(purchaseAmountInput)) {
      throw new Error(PURCHASE_AMOUNT_ERROR_MESSAGES.NOT_NUMBER);
    }
  }

  validateStartWithZero(purchaseAmountInput) {
    if (isStartWithZero(purchaseAmountInput)) {
      throw new Error(PURCHASE_AMOUNT_ERROR_MESSAGES.START_WITH_ZERO);
    }
  }

  validateSmallerThanLottoPrice(purchaseAmountInput) {
    if (isSmallerThanLottoPrice(purchaseAmountInput)) {
      throw new Error(PURCHASE_AMOUNT_ERROR_MESSAGES.LESS_THAN_LOTTO_PRICE);
    }
  }

  validateDivisibleByThousand(purchaseAmountInput) {
    if (!isDivisibleByThousand(purchaseAmountInput)) {
      throw new Error(PURCHASE_AMOUNT_ERROR_MESSAGES.NOT_DIVISIBLE_BY_THOUSAND);
    }
  }
}

export default PurchaseAmountInputValidator;
