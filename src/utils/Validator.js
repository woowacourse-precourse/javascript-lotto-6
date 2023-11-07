import { ERROR_MESSAGE, LOTTO } from '../constants/constants.js';

const Validator = {
  validateMoney(purchaseMoney) {
    if (!this.isNumber(purchaseMoney)) {
      throw new Error(ERROR_MESSAGE.number);
    }
    if (Number(purchaseMoney) % LOTTO.price !== 0) {
      throw new Error(ERROR_MESSAGE.unit);
    }
  },

  validateNumberForm(numbers) {
    if (!/^[0-9]+(,[0-9]+)+$/.test(numbers.replace(/\s/g, ''))) {
      throw new Error(ERROR_MESSAGE.form);
    }
  },

  validateLotto(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.duplicates);
    }
    numbers.forEach(num => {
      if (this.isNumberInRange(num)) {
        throw new Error(ERROR_MESSAGE.range);
      }
    });
  },

  validateBouns(winningNumbers, bonusNumber) {
    if (!this.isNumber(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.number);
    }
    if (this.isNumberInRange(Number(bonusNumber))) {
      throw new Error(ERROR_MESSAGE.range);
    }
    if (winningNumbers.includes(Number(bonusNumber))) {
      throw new Error(ERROR_MESSAGE.bonus);
    }
  },

  isNumber(input) {
    return /^\d+$/.test(input);
  },

  isNumberInRange(num) {
    return num < LOTTO.min || num > LOTTO.max;
  },
};

export default Validator;
