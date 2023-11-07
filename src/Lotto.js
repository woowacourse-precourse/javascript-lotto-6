import { MESSAGE_PRINT } from './constants/Message';
import OutputView from './views/OutputView';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#sortNumbers();
  }

  #sortNumbers() {
    this.#numbers.sort((prev, next) => prev - next);
  }

  printLottoNumbers() {
    return OutputView.printLottoNumbers(this.#numbers.join(MESSAGE_PRINT.NUMBER_SEPARATOR));
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
