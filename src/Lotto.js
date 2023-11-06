import { validateBonusNumber, validateWinnigNumber } from './utils.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    validateWinnigNumber(numbers);
  }

  validateBonusNumber(bonusNumber) {
    validateBonusNumber(bonusNumber, this.#numbers);
  }
}

export default Lotto;
