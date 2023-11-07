import { LOTTO_NUMBER, NUMBER_TYPE_REG } from '../constants/constant.js';
import { ERROR_MESSAGE } from '../constants/message.js';

const commonValidator = {
  checkNumberType(input) {
    if (!NUMBER_TYPE_REG.test(input)) {
      throw new Error(ERROR_MESSAGE.NUMBER_TYPE);
    }
  },

  checkDuplicate(input) {
    if (new Set(input).size !== input.length) {
      throw new Error(ERROR_MESSAGE.DUPLICATE);
    }
  },

  checkLottoNumberRange(input) {
    if (Number(input) < LOTTO_NUMBER.MIN || Number(input) > LOTTO_NUMBER.MAX) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_RANGE);
    }
  },
};

export default commonValidator;
