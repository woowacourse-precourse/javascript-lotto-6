import ERROR_MESSAGE from './constant/ErrorMessage';

const LOTTO_PRICE = 1000;

class Validate {
  static payment(input) {
    const payment = Number(input);

    if (Number.isNaN(payment)) {
      throw new Error(ERROR_MESSAGE.nonNumeric);
    }
    if (payment <= 0 || !Number.isInteger(payment / LOTTO_PRICE)) {
      throw new Error(ERROR_MESSAGE.invalidAmount);
    }
  }

  static bonusNumber(input, winning) {
    const bonus = Number(input);

    if (Number.isNaN(bonus)) {
      throw new Error(ERROR_MESSAGE.nonNumeric);
    }
    if (!Number.isInteger(bonus) || bonus < 1 || bonus > 45) {
      throw new Error(ERROR_MESSAGE.outOfRange);
    }
    if (winning.includes(bonus)) {
      throw new Error(ERROR_MESSAGE.duplicateWinningNumber);
    }
  }
}

export default Validate;
