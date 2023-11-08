import { ERROR_MESSAGE, LOTTO } from "./Constant.js";

const Validation = {
  checkMoney(money) {
    if (isNaN(money)) throw new Error(ERROR_MESSAGE.NUMBER);

    if (money < 1000) throw new Error(ERROR_MESSAGE.MIN_MONEY);

    if (money % 1000 !== 0) throw new Error(ERROR_MESSAGE.DIVISION);
  },

  checkNumberList(numbers) {
    if (numbers.length !== LOTTO.NUMBERS_COUNT)
      throw new Error(ERROR_MESSAGE.NOT_SIX);

    if ([...new Set(numbers)].length !== LOTTO.NUMBERS_COUNT)
      throw new Error(ERROR_MESSAGE.DUPLICATE);

    if (!checkNumbersRange(numbers)) throw new Error(ERROR_MESSAGE.RANGE);

    if (!checkNumbersType(numbers)) throw new Error(ERROR_MESSAGE.NUMBER);
  },

  checkBonusNumber(num, winningNumbers) {
    if (winningNumbers.includes(num))
      throw new Error(ERROR_MESSAGE.ALREADY_INCLUDE);

    if (isNaN(num)) throw new Error(ERROR_MESSAGE.BONUS_NUMBER);

    if (num > LOTTO.MAX || num < LOTTO.MIN)
      throw new Error(ERROR_MESSAGE.BONUS_RANGE);
  },
};

const checkNumbersRange = (numbers) => {
  return numbers.every((num) => num <= 45 && num >= 1);
};

const checkNumbersType = (numbers) => {
  return numbers.every((num) => !isNaN(num));
};

module.exports = Validation;
