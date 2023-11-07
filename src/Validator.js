import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from './Constants.js';

class Validator {
  static purchaseAmount(amount) {
    if (isNaN(amount)) {
      throw new Error(`${ERROR_MESSAGE.typeError}\n`);
    }
    if (amount.trim() === '') {
      throw new Error(`${ERROR_MESSAGE.spaceError}\n`);
    }
    if (amount < 1000) {
      throw new Error(ERROR_MESSAGE.minCostError);
    }
    if (amount % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.divisionError);
    }
  }

  static bonusNumber(bonus, winning) {
    if (winning.includes(Number(bonus))) {
      throw new Error(ERROR_MESSAGE.uniqueError);
    }
    if (bonus.trim() === '') {
      throw new Error(`${ERROR_MESSAGE.spaceError}\n`);
    }
    if (bonus < 1 || bonus > 45) {
      throw new Error(ERROR_MESSAGE.rangeError);
    }
    if (isNaN(bonus)) {
      throw new Error(`${ERROR_MESSAGE.typeError}\n`);
    }
  }
}

export default Validator;
