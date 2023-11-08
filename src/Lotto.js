import LottoValidator from "./Validator/LottoValidator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    const convertedNumbers = numbers.map(Number);
    const lottoValidator = new LottoValidator();
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
