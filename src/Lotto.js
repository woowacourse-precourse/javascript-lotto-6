import InputValidate from './utils/InputValidate.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  static async createLottoInstance(numbers) {
    const inputValidate = new InputValidate();
    await inputValidate.lengthSix(numbers);
    return new Lotto(numbers);
  }

  // TODO: 추가 기능 구현
  sortingNumber() {
    this.#numbers.sort((a, b) => a - b);
    return this.#numbers.join(', ');
  }

  getWinNumber() {
    this.#numbers.sort((a, b) => a - b);
    return this.#numbers;
  }
}

export default Lotto;
