import {
  ERROR_MESSAGE,
  BONUS_NUMBER,
  PURCHASE_MONEY,
  LOTTO,
} from "./constants.js";

const validation = {
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

    if (!this.checkNumbersRange(numbers)) throw new Error(ERROR_MESSAGE.RANGE);

    if (!this.checkNumbersType(numbers)) throw new Error(ERROR_MESSAGE.NUMBER);
  },

  checkNumbersRange(numbers) {
    return numbers.every((num) => num > LOTTO.MAX && num < LOTTO.MIN);
  },

  checkNumbersRange(numbers) {
    return numbers.every((num) => !isNaN(num));
  },

  checkBonusNumber(num, winningNumbers) {
    if (winningNumbers.includes(num))
      throw new Error(ERROR_MESSAGE.ALREADY_INCLUDE);

    if (isNaN(num)) throw new Error(ERROR_MESSAGE.BONUS_NUMBER);

    if (num > LOTTO.MAX || num < LOTTO.MIN)
      throw new Error(ERROR_MESSAGE.BONUS_RANGE);
  },
};

module.exports = validation;
