import OutputView from '../views/OutputView';

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
    return OutputView.printLottoNumbers(this.#numbers.join(', '));
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
