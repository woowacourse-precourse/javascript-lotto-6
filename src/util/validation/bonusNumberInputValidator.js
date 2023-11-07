import { ERROR_MESSAGE } from '../constant/index.js';
const bonusNumberInputValidator = {
  format(rawInput) {
    if (rawInput.length === 0) {
      throw new Error(ERROR_MESSAGE.FORMAT_INVALID_BONUS_VALUE);
    }
    if (!/^[0-9]+$/.test(rawInput)) {
      throw new Error(ERROR_MESSAGE.FORMAT_INVALID_BONUS_REGEX);
    }
  },

  data(bonusNumberRawInput, winningNumberRawInput) {
    const bonusNumberInput = Number(bonusNumberRawInput);

    if (Number.isNaN(bonusNumberInput)) {
      throw new Error(ERROR_MESSAGE.DATA_NON_BONUS_NUMBER);
    }
    if (bonusNumberInput < 1 || bonusNumberInput > 45) {
      throw new Error(ERROR_MESSAGE.DATA_NON_BONUS_NUMBER);
    }
    const winningNumberInput = winningNumberRawInput.split(',').map(Number);

    if (winningNumberInput.includes(bonusNumberInput)) {
      throw new Error(
        ERROR_MESSAGE.DATA_NON_BONUS_REPEAT + `"${winningNumberRawInput}")\n`
      );
    }
  },
};

export default bonusNumberInputValidator;
