import Validator from '../utils/Validator.js';
import CONSTANTS from '../utils/Constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validator.validateGeneratedLotto(numbers);
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }

  raffleMainNumber(mainNumbers) {
    return CONSTANTS.mainNumberCount * 2 - new Set([...this.#numbers, mainNumbers]).size;
  }
}

export default Lotto;
