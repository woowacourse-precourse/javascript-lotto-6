import { print } from '../utility/console.js';
import {
  LOTTO_CONSTANT,
  ERROR_MESSAGE,
  FORMATTER,
} from '../constant/constant.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validateNumbers(numbers);
    this.#numbers = numbers;
  }

  #validateNumbers(numbers) {
    if (numbers.length !== LOTTO_CONSTANT.numberCount) {
      throw new Error(ERROR_MESSAGE.wrongLottoNumberCount);
    }

    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.wrongLottoNumberInput);
    }
  }

  printNumbers() {
    print(FORMATTER.lottoPrintFormatter(this.#numbers));
  }
}

export default Lotto;
