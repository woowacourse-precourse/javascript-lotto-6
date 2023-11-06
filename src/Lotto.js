import { ErrorMessage } from './ErrorMessage.js';
const LOTTO_PRICE = 1000;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  validateLottoAmount() {
    const isValidateLottoAmount = Number.isInteger(
      parseInt(this.#numbers.split(',').join(''), 10) / LOTTO_PRICE
    );
    if (!isValidateLottoAmount) {
      throw new Error(ErrorMessage.invalidLottoAmount());
    }
  }
}

export default Lotto;
