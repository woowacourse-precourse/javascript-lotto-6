import { MESSAGE } from './Constants/constant';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6 || numbers.includes('')) {
      throw new Error(MESSAGE.ERROR.LENGTH);
    }

    for (const NUMBER of numbers) {
      if (Number(NUMBER) < 1 || Number(NUMBER) > 45 || isNaN(Number(NUMBER))) {
        throw new Error(MESSAGE.ERROR.RANGE);
      }
    }
    const NUMBERS_SET = new Set(numbers);
    if (NUMBERS_SET.size !== 6) {
      throw new Error(MESSAGE.ERROR.DUPLICATE);
    }
  }
}

export default Lotto;
