import { ERROR } from './Constant/Constants';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.INPUT_WINNING_NUM);
    }
    numbers.forEach((num) => {
      if (num < 1 || num > 45) {
        throw new Error(ERROR.INPUT_RANGE_NUM);
      }
    });
    if (new Set(numbers).size !== 6) {
      throw new Error(ERROR.INPUT_DUPLICATE_NUM);
    }
    if (numbers.includes('')) {
      throw new Error(ERROR.INPUT_EMPTY);
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
