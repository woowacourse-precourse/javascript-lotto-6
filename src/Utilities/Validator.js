import { ERRORS } from "../Constants/Constant.js";

const Validator = {
  validateAmount(amount) {
    if (amount <= 0 || amount % 1000 !== 0) {
      throw new Error(ERRORS.INPUT_LOTTO_AMOUNT_INVALID);
    }
  },

  validateNumbers(numbers) {
    if (
      numbers.length !== 6 ||
      !numbers.every((number) => !isNaN(number) && number >= 1 && number <= 45)
    ) {
      throw new Error(ERRORS.INPUT_LOTTO_INVALID);
    }

    if (new Set(numbers).size !== 6) {
      throw new Error(ERRORS.INPUT_LOTTO_DUPLICATED);
    }
  },

  validateBonusNumber(bonusNumber, lottoNumbersArray) {
    if (
      isNaN(bonusNumber) ||
      bonusNumber < 1 ||
      bonusNumber > 45 ||
      lottoNumbersArray.includes(bonusNumber)
    ) {
      throw new Error(ERRORS.INPUT_LOTTO_BONUS_INVALID);
    }
  },
};

export default Validator;
