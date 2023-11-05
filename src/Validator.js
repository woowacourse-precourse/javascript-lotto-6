import { EMPTY_LENGTH, CURRENCY_NUMBER_TO_DIVIDE } from "./constants/constants.js";
import { PURCHASE_AMOUNT_ERROR_MESSAGE } from "./constants/messages.js";

const Validator = Object.freeze({
  validatePurchaseAmount: (purchaseAmount) => {
    if (isEmpty(purchaseAmount)) {
      throw PURCHASE_AMOUNT_ERROR_MESSAGE.empty_amount;
    }

    if (!isNumeric(purchaseAmount)) {
      throw PURCHASE_AMOUNT_ERROR_MESSAGE.contains_character;
    }

    if (!isInteger(purchaseAmount)) {
      throw PURCHASE_AMOUNT_ERROR_MESSAGE.not_integer;
    }

    if (!isDivisibleByCurrencyNumber(purchaseAmount)) {
      throw PURCHASE_AMOUNT_ERROR_MESSAGE.not_divisible_by_currency_number;
    }
  },
});

const isEmpty = (string) => {
  return string.trim().length === EMPTY_LENGTH;
};

const isNumeric = (string) => {
  return !isNaN(Number(string));
};

const isInteger = (string) => {
  return Number.isInteger(Number(string));
};

const isDivisibleByCurrencyNumber = (string) => {
  return Number(string) % CURRENCY_NUMBER_TO_DIVIDE === 0 ? true : false ;
};

export default Validator;