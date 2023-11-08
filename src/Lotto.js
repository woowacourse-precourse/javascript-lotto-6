import InputValidator from './utils/InputValidator';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = this.#validate(numbers);
  }

  #validate(numbers) {
    return InputValidator.validateWinningLotto(numbers);
  }

  // TODO: 추가 기능 구현
  getLotto() {
    return this.#numbers;
  }
}

export default Lotto;
