import Aligner from '../Aligner/Aligner.js';
import Validator from '../Validator/Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    Validator.checkLottoNums(numbers);
    this.#numbers = numbers;
    this.#align(this.#numbers);
  }

  #align() {
    Aligner.alignAscendingArr(this.#numbers);
  }

  getLotto() {
    return this.#numbers;
  }
}

export default Lotto;
