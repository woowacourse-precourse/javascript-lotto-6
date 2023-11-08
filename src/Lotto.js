import { Validators } from './Service/Validators.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validators.lottoNumbersValidator.validateLottoNumbers(numbers);
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
