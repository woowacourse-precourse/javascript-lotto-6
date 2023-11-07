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

  validateInputArray(input) {
    if (!input.includes(',')) throw new Error(ERROR.INVALID_ARRAY);
  },

  validateLottoLength(numbers) {
    if (numbers.length !== 6) throw new Error(ERROR.INVALID_LENGTH);
  },

  validateLottoNumbers(numbers) {
    numbers.forEach((number) => {
      if (isNaN(number)) throw new Error(ERROR.INVALID_LOTTO_NUMBER);
    });
  },

  validateLottoRange(numbers) {
    numbers.forEach((number) => {
      if (number < 1 || number > 45) throw new Error(ERROR.INVALID_LOTTO_RANGE);
    });
  },

  validateLottoDuplication(numbers) {
    const set = new Set(numbers);
    if (set.size !== numbers.length) throw new Error(ERROR.LOTTO_DUPLICATION);
  },
};

export default validation;
