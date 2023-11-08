import { ERROR_MSG } from './constant.js';
import validation from './validation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    validation.checkLottoNum(numbers);
  }

  // TODO: 추가 기능 구현
}

export default Lotto;