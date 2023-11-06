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
    const randomNumbers = Random.pickUniqueNumbersInRange(
      NUMBER.MIN_IN_RANGE,
      NUMBER.MAX_IN_RANGE,
      NUMBER.LOTTO_NUMBER_OF_NUMBERS,
    );

    return randomNumbers;
  }

  #sortNumbers() {
    this.#numbers.sort((prev, next) => prev - next);
  }

  printLottoNumbers() {
    return OutputView.printLottoNumbers(this.#numbers.join(', '));
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
