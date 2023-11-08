import LottoValidator from './service/LottoValidator.js';

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
};

export default Lotto;
