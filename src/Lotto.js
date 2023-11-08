import { WinningNumberErrorMessage } from './models/message.js';
import { LottoRule } from './models/rule.js';

class Lotto {
  #numbers;

  get numbers() {
    return this.#numbers;
  }

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (LottoRule.Number !== numbers.length) {
      throw new Error(WinningNumberErrorMessage.WrongNumber);
    }

    if (this.#isDuplicate(numbers)) {
      throw new Error(WinningNumberErrorMessage.Duplicate);
    }

    if (this.#isNotInteger(numbers)) {
      throw new Error(WinningNumberErrorMessage.NotInteger);
    }

    if (this.#outOfRange(numbers)) {
      throw new Error(WinningNumberErrorMessage.OutOfRange);
    }
  }

  #isDuplicate(numbers) {
    const numberSet = new Set();

    numbers.forEach(number => {
      numberSet.add(number);
    });

    return numberSet.size !== numbers.length;
  }

  #isNotInteger(numbers) {
    return numbers.some(number => !Number.isInteger(number));
  }

  #outOfRange(numbers) {
    return numbers.some(number => LottoRule.MinNumber > number || LottoRule.MaxNumber < number);
  }
}

export default Lotto;
