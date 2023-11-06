import LottoValidator from '../service/LottoValidator.js';

class Lotto {

  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    const lottoValidator = new LottoValidator(numbers);
    lottoValidator.validate();
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
