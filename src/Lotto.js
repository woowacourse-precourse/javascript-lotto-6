import { Console } from '@woowacourse/mission-utils';
import ERROR_MESSAGE from './constant/ErrorMessage';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.invalidListSize);
    }
    if (numbers.some((n) => !Number.isInteger(n) || n < 1 || n > 45)) {
      throw new Error(ERROR_MESSAGE.outOfRange);
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR_MESSAGE.duplicateNumber);
    }
  }
  // TODO: 추가 기능 구현
  print() {
    Console.print(`[${this.#numbers.join(', ')}]`);
  }

  includes(input) {
    return this.#numbers.includes(input);
  }

  countMatched(winning) {
    const matched = this.#numbers.filter((n) => winning.includes(n));
    return matched.length;
  }
}

export default Lotto;
