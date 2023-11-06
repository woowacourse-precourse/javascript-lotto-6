import { Random } from '@woowacourse/mission-utils';
import NUMBER from '../constants/Number';
import OutputView from '../views/OutputView';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#checkNumbersEmpty();
    this.#sortNumbers();
  }

  #checkNumbersEmpty() {
    if (!this.#numbers) {
      this.#numbers = this.#pickRandomNumbers();
    }
  }

  #pickRandomNumbers() {
    const randomNumbers = [];
    while (randomNumbers.length < NUMBER.LOTTO_NUMBER_OF_NUMBERS) {
      const number = Random.pickNumberInRange(
        NUMBER.MIN_IN_RANGE,
        NUMBER.MAX_IN_RANGE,
      );
      if (!randomNumbers.includes(number)) {
        randomNumbers.push(number);
      }
    }

    return randomNumbers;
  }

  #sortNumbers() {
    this.#numbers.sort((prev, next) => prev - next);
  }

  printLottoNumbers() {
    return OutputView.printLottoNumbers(this.#numbers.join(', '));
  }
}

export default Lotto;
