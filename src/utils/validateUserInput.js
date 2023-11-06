import {
  LIMIT_PER_DAY_PURCHASABLE_TOTAL_PRICE,
  LOTTO,
} from '../constants/lotto.js';
import { ERROR_MESSAGE } from '../constants/message.js';
import paramType from '../lib/paramType/src/paramType.js';
import { PurchasePriceInputError } from '../errors/UserInputErrors.js';

export const validateUserInput = {
  purchasePrice(userInput, _ = paramType(userInput, 'string')) {
    this.checkNegativeSign(userInput);
    this.checkMinimumPurchasePrice(userInput);
    this.checkSpacing(userInput);
    this.checkNonNumberTypeInput(userInput);
    this.checkSellingPriceMultiple(userInput);
    this.checkOverBuying(userInput);
  },

  checkNegativeSign(userInput) {
    const minusSignRegExp = /^-.*/g;
    if (minusSignRegExp.test(userInput)) {
      throw new PurchasePriceInputError(
        ERROR_MESSAGE.USER_INPUT.HAVE_MINUS_SIGN,
      );
    }
  },

  checkMinimumPurchasePrice(userInput) {
    if (Number(userInput) < LOTTO.SELLING_PRICE) {
      throw new PurchasePriceInputError(
        ERROR_MESSAGE.USER_INPUT.LOWER_THAN_MINIMUM_PURCHASE_PRICE,
      );
    }
  },

  checkSpacing(userInput) {
    const spacingRegExp = /\s/g;
    if (spacingRegExp.test(userInput)) {
      throw new PurchasePriceInputError(ERROR_MESSAGE.USER_INPUT.HAVE_SPACING);
    }
  },

  checkNonNumberTypeInput(userInput) {
    const notNumberTypeRegExp = /[^0-9]/g;
    if (notNumberTypeRegExp.test(userInput)) {
      throw new PurchasePriceInputError(
        ERROR_MESSAGE.USER_INPUT.IS_NOT_ONLY_NUMBER_TYPE,
      );
    }
  },

  checkSellingPriceMultiple(userInput) {
    if (!Number.isInteger(Number(userInput) / LOTTO.SELLING_PRICE)) {
      throw new PurchasePriceInputError(
        ERROR_MESSAGE.USER_INPUT.IS_NOT_MULTIPLE_SELLING_PRICE,
      );
    }
  },

  checkOverBuying(userInput) {
    if (Number(userInput) > LIMIT_PER_DAY_PURCHASABLE_TOTAL_PRICE) {
      throw new PurchasePriceInputError(
        ERROR_MESSAGE.USER_INPUT.IS_OVER_PURCHASABLE_PRICE_OF_PER_DAY,
      );
    }
  },
};
