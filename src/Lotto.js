import { ERROR } from './constant/constant.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.invalidNumberFormat(numbers);
    this.outOfRange(numbers);
    this.duplicate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw ERROR.INVALID_LENGTH;
    }
  }

  invalidNumberFormat(numbers) {
    const regex = /^[0-9]+$/;
    if (numbers.some((num) => !regex.test(num))) throw ERROR.INVALID_NUMBER_FORMAT;
  }

  outOfRange(numbers) {
    if (numbers.some((num) => !(num >= 1 && num <= 45))) throw ERROR.OUT_OF_RANGE;
  }
  duplicate(numbers) {
    const set = new Set(numbers);
    if (set.size !== numbers.length) throw ERROR.DUPLICATE_NUMBER;
  }

  checkBonusNumber(bonus) {
    if (!(bonus >= 1 && bonus <= 45)) throw ERROR.BONUS_NUMBER_IS_OUT_OF_RANGE;
    if (this.#numbers.includes(bonus)) throw ERROR.DUPLICATE_WINNING_NUMBER;
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
