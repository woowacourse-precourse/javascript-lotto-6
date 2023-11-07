import { Console } from '@woowacourse/mission-utils';
import Validator from "./Validator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.validator = new Validator();
    this.validator.checkLottoNum(numbers);
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }

  print() {
    Console.print('[' + this.#numbers.join(', ') + ']');
  }

}

export default Lotto;
