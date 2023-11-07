import { ERROR_MESSAGE } from '../constants/constants';
import { Console } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.lotto.length);
    }

    if (numbers.some((number) => Number.isNaN(Number(number)))) {
      throw new Error(ERROR_MESSAGE.lotto.notNumber);
    }

    if (!numbers.every((number) => Number.isInteger(number))) {
      throw new Error(ERROR_MESSAGE.lotto.notInt);
    }

    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error(ERROR_MESSAGE.lotto.notRange);
    }

    if (new Set(numbers).size !== 6) {
      throw new Error(ERROR_MESSAGE.lotto.notDifferent);
    }
  }

  getLottoNumbers() {
    return this.#numbers;
  }

  displayBoard() {
    Console.print(this.#numbers);
  }
}

export default Lotto;
