import ERROR_MESSAGE from "./constant/errorData.js";
import LOTTO from "./constant/lottoData.js";
import {
  isBlank,
  isInvalidType,
  isNumber,
  isOutRange,
} from "./utils/validation.js";

export const Validator = {
  paymentInvalid(input) {
    if (input % LOTTO.COST !== 0) throw ERROR_MESSAGE.PAYMENT_INVALID;
  },
  invalidNumberType(input) {
    if (isInvalidType(input)) throw ERROR_MESSAGE.NUMBER_FORM;
    if (isNumber(input)) throw ERROR_MESSAGE.NUMBER_FORM;
  },
  invalidNumberCommaType(input) {
    if (input.some(isInvalidType)) throw ERROR_MESSAGE.NUMBER_COMMA_FORM;
    if (input.some(isNumber)) throw ERROR_MESSAGE.NUMBER_COMMA_FORM;
  },
  blank(input) {
    if (isBlank(input)) throw ERROR_MESSAGE.BLANK_FORM;
  },
  duplication(input) {
    if (new Set(input).size !== input.length) throw ERROR_MESSAGE.DUPLICATION;
  },
  invalidLottoSize(input) {
    if (LOTTO.SIZE !== input.length) throw ERROR_MESSAGE.SIZE_INVALID;
  },
  invalidLottoRange(input) {
    if (input.some(isOutRange)) throw ERROR_MESSAGE.RANGE_INVALID;
  },
};

export const validatePayment = (payment) => {
  Validator.paymentInvalid(payment);
  Validator.invalidNumberType(payment);
  Validator.blank(payment);
};

export const validateWinningNumber = (winningNumber) => {
  Validator.invalidLottoRange(winningNumber);
  Validator.invalidNumberCommaType(winningNumber);
  Validator.invalidLottoSize(winningNumber);
  Validator.duplication(winningNumber);
};
