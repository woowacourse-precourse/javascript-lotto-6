import { GAME_NUMBER, ERROR } from '../constants/constants.js';

const validation = {
  validateInputNumber(input) {
    if (input.length === 0 || isNaN(Number(input)))
      throw new Error(ERROR.INVALID_NUMBER);
  },

  validatePurchaseAmount(amount) {
    if (amount % GAME_NUMBER.MONEY_UNIT !== 0)
      throw new Error(ERROR.INVALID_UNIT);
  },
};

export default validation;
