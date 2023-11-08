import { error, condition } from '../consts';

const Validator = {
  validateInput(input) {
    if (input.trim().length === condition.inputEmptyLength) {
      throw error.inputEmptyError;
    }
  },

  validateNumbers(numbers) {
    numbers.forEach((number) => this.validateNumber(number));
  },

  validateNumber(number) {
    if (!Number.isInteger(number)) {
      throw error.numberTypeError;
    }
    if (
      number < condition.lottoMinNumber ||
      number > condition.lottoMaxNumber
    ) {
      throw error.numberRangeError;
    }
  },

  validatePurchaseAmount(purchaseAmount) {
    if (purchaseAmount % condition.oneLottoPrice !== condition.correctRemain) {
      throw error.purchaseAmountError;
    }
  },
};

export default Validator;
