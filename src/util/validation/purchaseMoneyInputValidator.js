import { ERROR_MESSAGE } from '../constant/index.js';
const purchaseMoneyInputValidator = {
  format(rawInput) {
    if (rawInput.length === 0) {
      throw new Error(ERROR_MESSAGE.FORMAT_INVALID_PURCHASE_VALUE);
    }
    if (!/^[0-9]+$/.test(rawInput)) {
      throw new Error(ERROR_MESSAGE.FORMAT_INVALID_PURCHASE_REGEX);
    }
  },

  data(rawInput) {
    const input = Number(rawInput);

    if (input % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.DATA_NON_PURCHASE_THOUSAND);
    }
  },
};

export default purchaseMoneyInputValidator;
