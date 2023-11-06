import { BRACKET, DIVIDER } from './constants/Symbol.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  getLottoNumbers() {
    return `${BRACKET.open}${this.#numbers.join(DIVIDER.spaceComma)}${
      BRACKET.close
    }`;
  }

  compare(winningNumbers, winningBonusNumber) {}
}

export default Lotto;
