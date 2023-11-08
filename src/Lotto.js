import LottoValidator from './utils/LottoValidator.js';

class Lotto {
  #numbers; // 로또 당첨 번호

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const lottoValidator = new LottoValidator(numbers);
    lottoValidator.start(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
