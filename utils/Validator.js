import ErrorMessage from '../constants/ErrorMessage.js';

class Validator {
  static validatePrice(price) {
    if (isNaN(price)) {
      throw new Error(ErrorMessage.INVALID_INPUT);
    }
    if (price % 1000 !== 0) {
      throw new Error(ErrorMessage.INVALID_PRICE);
    }
  }

  static validateWinNum(win) {
    if (win.length !== 6) {
      throw new Error(ErrorMessage.INVALID_NUM_COUNT);
    }

    const set = new Set(win);
    if (win.length !== set.size) {
      throw new Error(ErrorMessage.DUPLICATE_NUMBER);
    }

    win.map((num) => {
      if (isNaN(num)) {
        throw new Error(ErrorMessage.INVALID_INPUT);
      }
      if (num < 1 || num > 45) {
        throw new Error(ErrorMessage.INVALID_RANGE);
      }
    });
  }

  static validateBonusNum(bonus, win) {
    if (isNaN(bonus)) {
      throw new Error(ErrorMessage.INVALID_INPUT);
    }
    if (bonus < 1 || bonus > 45) {
      throw new Error(ErrorMessage.INVALID_RANGE);
    }
    if (win.includes(bonus)) {
      throw new Error(ErrorMessage.DUPLICATE_BONUS_WIN);
    }
  }
}
export default Validator;
