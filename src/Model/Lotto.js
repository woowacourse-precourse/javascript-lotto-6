import validator from '../Validator/validator.js';

class Lotto {
  #numbers; // 당첨 번호?

  constructor(numbers) {
    try {
      this.#validateNumbers(numbers);
      this.#numbers = numbers;
    } catch (error) {
      console.log(error);
    }
  }

  #validateNumbers(numbers) {
    validator.validateLottoNumbers(numbers);
  }
}

export default Lotto;
