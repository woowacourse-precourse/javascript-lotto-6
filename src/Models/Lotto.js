import LottoValidator from "../Validator/LottoValidator.js";
import { LOTTO_SETTINGS } from "../config/gameSetting.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    const convertedNumbers = numbers.map(Number);
    const lottoValidator = new LottoValidator(LOTTO_SETTINGS);
    lottoValidator.validateNumbers(convertedNumbers);
    this.#numbers = this.#sortNumbers(convertedNumbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  #sortNumbers(numbers) {
    return numbers.sort(
      (currentNumber, nextNumber) => currentNumber - nextNumber
    );
  }
}

export default Lotto;
