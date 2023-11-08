import LottoValidator from './utils/validators/LottoValidator';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    const formattedNumbers = this.#formatLottoNumbers(numbers);
    this.#numbers = formattedNumbers;
  }

  #validate(numbers) {
    LottoValidator.validateLottoNumbers(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  #formatLottoNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
