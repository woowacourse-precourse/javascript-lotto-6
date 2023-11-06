import { message } from './Constants.js';

import validateLottoNumbers from './Validation/validateLottoNumbers.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = this.sortNumbers(numbers);
  }

  get numbersArray() {
    return this.#numbers;
  }

  validate(numbers) {
    if (!validateLottoNumbers(numbers)) {
      throw new Error(message.ERROR);
    }
  }

  sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
