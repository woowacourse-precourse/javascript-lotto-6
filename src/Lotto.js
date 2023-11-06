import { ERROR } from './Message.js';

class Lotto {
  #LENGTH = 6;
  #START = 1;
  #END = 45;

  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  getMatchingNumbersCountWith(winningNumbers) {
    const matchingNumbers = this.#numbers.filter((number) =>
      winningNumbers.includes(number),
    );
    return matchingNumbers.length;
  }

  getSortedLotto() {
    return this.#numbers.sort((a, b) => a - b);
  }

  includes(number) {
    return this.#numbers.includes(number);
  }

  #validate(numbers) {
    if (numbers.length !== this.#LENGTH) {
      throw new Error(ERROR.notSix);
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR.notUnique);
    }
    if (numbers.some((number) => number < this.#START || number > this.#END)) {
      throw new Error(ERROR.notOneToFortyFive);
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
