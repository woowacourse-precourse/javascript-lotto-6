import { GAME_NUMBER, ERROR, LOTTO_NUMBER } from '../Constant/Constants.js';

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
    if (numbers.length !== LOTTO_NUMBER.LENGTH)
      throw new Error(ERROR.INVALID_LENGTH);
  },

  validateLottoNumbers(numbers) {
    numbers.forEach((number) => {
      if (isNaN(number)) throw new Error(ERROR.INVALID_LOTTO_NUMBER);
    });
  },

  validateLottoRange(numbers) {
    numbers.forEach((number) => {
      if (number < LOTTO_NUMBER.MIN || number > LOTTO_NUMBER.MAX)
        throw new Error(ERROR.INVALID_LOTTO_RANGE);
    });
  },

  validateLottoDuplication(numbers) {
    const set = new Set(numbers);
    if (set.size !== numbers.length) throw new Error(ERROR.LOTTO_DUPLICATION);
  },

  validateBonusNumber(bonusNumber, winningNumber) {
    if (winningNumber.includes(bonusNumber))
      throw new Error(ERROR.LOTTO_DUPLICATION);
    if (bonusNumber < LOTTO_NUMBER.MIN || bonusNumber > LOTTO_NUMBER.MAX)
      throw new Error(ERROR.INVALID_LOTTO_RANGE);
  },
};

export default validation;