import { SETTING } from './constants/Constant.js';
import { ERROR_MESSAGE } from './constants/Message.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (new Set(numbers).size !== SETTING.pick) {
      throw new Error(ERROR_MESSAGE.length);
    }
    if (!numbers.every((number) => /^([1-9]|[1-3][0-9]|4[0-5])$/.test(number))) {
      throw new Error(ERROR_MESSAGE.range);
    }
  }

  setBonusNumber(bonus) {
    this.validateBonusNumber(bonus);
    this.bonusNumber = bonus;
  }

  validateBonusNumber(bonus) {
    if (this.#numbers.includes(bonus)) {
      throw new Error(ERROR_MESSAGE.duplication);
    }
    if (!/^([1-9]|[1-3][0-9]|4[0-5])$/.test(bonus)) {
      throw new Error(ERROR_MESSAGE.range);
    }
  }

  getWinningNumber() {
    return this.#numbers;
  }

  getBonusNumber() {
    return this.bonusNumber;
  }
}

export default Lotto;
