import { ERROR_MESSAGE, LOTTO_CONSTANTS } from '../constant/index.js';

const winningNumberInputValidator = {
  format(rawInput) {
    if (rawInput.length === 0) {
      throw new Error(ERROR_MESSAGE.FORMAT_INVALID_WINNING_VALUE);
    }

    if (!/^[0-9,]+$/.test(rawInput)) {
      throw new Error(ERROR_MESSAGE.FORMAT_INVALID_WINNING_REGEX);
    }
  },

  data(rawInput) {
    const input = rawInput.split(',').map(Number);

    if (new Set([...input]).size !== LOTTO_CONSTANTS.LENGTH) {
      throw new Error(ERROR_MESSAGE.DATA_NON_WINNING_NUMBER);
    }

    if (
      input.some(
        (number) =>
          number < LOTTO_CONSTANTS.MIN || number > LOTTO_CONSTANTS.MAX,
      )
    ) {
      throw new Error(ERROR_MESSAGE.DATA_NON_WINNING_NUMBER);
    }
  },
};

export default winningNumberInputValidator;
