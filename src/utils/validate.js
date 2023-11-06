import { ERROR_MESSAGE, LOTTO } from './constants.js';

const validate = {
  isInteger(scope, value) {
    if (!Number.isInteger(Number(value))) {
      throw new Error(
        `${ERROR_MESSAGE.LOGO} ${scope} ${ERROR_MESSAGE.IS_INTEGER}`
      );
    }
  },

  startZero(scope, value) {
    if (value.length !== Number(value).toString().length) {
      throw new Error(
        `${ERROR_MESSAGE.LOGO} ${scope} ${ERROR_MESSAGE.NO_START_ZERO}`
      );
    }
  },

  isCount(scope, value) {
    if (value.length !== LOTTO.COUNT) {
      throw new Error(
        `${ERROR_MESSAGE.LOGO} ${scope} ${ERROR_MESSAGE.IS_COUNT}`
      );
    }
  },

  isDuplication(scope, value) {
    if ([...new Set(value)].length !== LOTTO.COUNT) {
      throw new Error(
        `${ERROR_MESSAGE.LOGO} ${scope} ${ERROR_MESSAGE.NO_DUPLICATION}`
      );
    }
  },

  isNumberRange(scope, number) {
    if (
      Number(number) > LOTTO.MAX_NUMBER ||
      Number(number) < LOTTO.MIN_NUMBER
    ) {
      throw new Error(
        `${ERROR_MESSAGE.LOGO} ${scope} ${ERROR_MESSAGE.IS_NUMBER_RANGE}`
      );
    }
  },
};

export { validate };
