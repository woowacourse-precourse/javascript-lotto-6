import { ERROR } from './constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!numbers) {
      throw new Error(ERROR.TYPE_CHECK);
    }
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR.DUPLICATE);
    }
    if (!Array.isArray(numbers)) {
      throw new Error(ERROR.TYPE_CHECK);
    }

    const checkNumber = numbers.every((number) => typeof number === 'number');

    if (!checkNumber) {
      throw new Error(ERROR.TYPE_CHECK);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
