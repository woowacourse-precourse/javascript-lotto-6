import { Console } from '@woowacourse/mission-utils';
import { JOIN_SEPARATOR, JOIN_PREFIX, JOIN_SUFFIX } from './constant/Constant.js';
import Validation from './validation/Validation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validation.isLottoBadFormat(numbers);
    Validation.isLottoBadRange(numbers);
  }

  printLotto() {
    Console.print(`${JOIN_PREFIX}${this.#numbers.join(JOIN_SEPARATOR)}${JOIN_SUFFIX}`);
  }
}

export default Lotto;
