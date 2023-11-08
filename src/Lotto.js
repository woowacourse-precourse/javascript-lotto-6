import { CONSTANTS } from './constants/lotto.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.#validateNumbers(numbers);
    this.#numbers = numbers;
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }

  static #validateNumbers(numbers) {
    if (numbers.length !== CONSTANTS.LENGTH_OF_LOTTO) {
      throw new Error(
        `[ERROR] 로또 번호는 ${CONSTANTS.LENGTH_OF_LOTTO}개여야 합니다.`
      );
    }

    if (new Set(numbers).size !== CONSTANTS.LENGTH_OF_LOTTO) {
      throw new Error('[ERROR] 로또 번호는 중복된 숫자가 있으면 안됩니다.');
    }
  }
}

export default Lotto;
