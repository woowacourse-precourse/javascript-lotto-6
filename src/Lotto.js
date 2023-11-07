import { Console } from '@woowacourse/mission-utils';
import { JOIN_SEPARATOR, JOIN_PREFIX, JOIN_SUFFIX } from './constant/Constant.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  printLotto() {
    Console.print(`${JOIN_PREFIX}${this.#numbers.join(JOIN_SEPARATOR)}${JOIN_SUFFIX}`);
  }
}

export default Lotto;
