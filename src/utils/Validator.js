import ErrorMessage from '../constants/ErrorMessage.js';
import Exception from './Exception.js';

class Validator {
  static validatePrice(price) {
    Exception.isNumber(price);
    Exception.isValidUnit(price);
  }

  static validateWinNum(win) {
    Exception.isValidDigit(win);
    Exception.isDuplicate(win);
    win.forEach((num) => {
      Exception.isValidRange(num);
      Exception.isNumber(num);
    });
  }

  static validateBonusNum(bonus, win) {
    Exception.isNumber(bonus);
    Exception.isValidRange(bonus);
    if (win.includes(bonus)) {
      throw new Error(ErrorMessage.DUPLICATE_BONUS_WIN);
    }
  }
}

export default Validator;
