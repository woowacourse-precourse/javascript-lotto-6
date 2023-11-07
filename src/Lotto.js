import Validator from './Validator/index.js';
import { SYMBOLS } from './constants/message.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    Validator.validateLottoNumbers(numbers);
  }

  formatString() {
    return `${SYMBOLS.openSquareBracket}${this.#numbers.join(
      SYMBOLS.printDivider,
    )}${SYMBOLS.closeSquareBracket}`;
  }

  getLotto() {
    return this.#numbers;
  }
}

export default Lotto;
