import { ERROR_MESSAGE } from '../constant/index.js';
const winningNumberInputValidator = {
  format(rawInput) {
    if (rawInput.length === 0) {
      throw new Error(ERROR_MESSAGE.FORMAT_INVALID_WINNING_VALUE);
    }
    console.log(!/^[0-9,]+$/.test(rawInput));
    if (!/^[0-9,]+$/.test(rawInput)) {
      throw new Error(ERROR_MESSAGE.FORMAT_INVALID_WINNING_REGEX);
    }
  },

  data(rawInput) {
    const input = rawInput.split(',').map(Number);
    console.log(input);
    if (new Set([...input]).size !== 6) {
      throw new Error(ERROR_MESSAGE.DATA_NON_WINNING_NUMBER);
    }

    for (const winningNumber of input) {
      if (winningNumber < 1 || winningNumber > 45) {
        throw new Error(ERROR_MESSAGE.DATA_NON_WINNING_NUMBER);
      }
    }
  },
};

export default winningNumberInputValidator;
