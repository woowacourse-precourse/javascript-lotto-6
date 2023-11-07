import ERROR_MESSAGE from "./constant/errorData.js";
import LOTTO from "./constant/lottoData.js";
import { isBlank, isInvalidType } from "./utils/validation.js";

const Validator = {
  paymentInvalid(input) {
    if (input % LOTTO.COST !== 0) throw ERROR_MESSAGE.PAYMENT_INVALID;
  },
  invalidNumberType(input) {
    if (isInvalidType(input)) throw ERROR_MESSAGE.NUMBER_FORM;
    if (Number.isNaN(Number(input))) throw ERROR_MESSAGE.NUMBER_FORM;
  },
  blank(input) {
    if (isBlank(input)) throw ERROR_MESSAGE.blank;
  },
};

export const validatePayment = (payment) => {
  Validator.paymentInvalid(payment);
  Validator.invalidNumberType(payment);
  Validator.blank(payment);
};
