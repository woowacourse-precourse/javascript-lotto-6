import ERROR_MESSAGE from "../constant/ErrorMessage.js";

const Validator = {
  purchaseAmount(money) {
    if (money === 0 || isNaN(money)) {
      throw new Error(ERROR_MESSAGE.NOT_VALID_PURCHASE_AMOUNT);
    }
    if (money % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.NOT_VALID_PURCHASE_AMOUNT_UNIT);
    }
  },

  winningNumbers(numbers) {
    const uniqueNumbers = new Set(numbers);

    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.NOT_VALID_LOTTO_NUMBER_COUNT);
    }
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.NOT_VALID_DUPLICATE_NUMBERS);
    }
    if (numbers.some((number) => isNaN(number) || number < 1 || number > 45)) {
      throw new Error(ERROR_MESSAGE.NOT_VALID_LOTTO_NUMBER_RANGE);
    }
  },

  bonusNumber(winningNumbers, bonusNumber) {
    const numbers = [...winningNumbers, bonusNumber];
    const uniqueNumbers = new Set(numbers);

    if (isNaN(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(ERROR_MESSAGE.NOT_VALID_LOTTO_NUMBER_RANGE);
    }
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.NOT_VALID_DUPLICATE_WINNING_NUMBERS);
    }
  },
};

export default Validator;
