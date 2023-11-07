import Validation from "../validation/Validation";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validation.validateLottoNumbers(numbers);
  }
  getNumbers() {
    return this.#numbers;
  }

  getMatchingCount(winningNumbers) {
    const MATHING_NUMBERS = winningNumbers.filter((x) =>
      this.#numbers.includes(Number(x))
    );
    return MATHING_NUMBERS.length;
  }
}

export default Lotto;
