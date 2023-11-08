import Validation from '../Validation/Validation.js';

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
    const matchedNumbers = winningNumbers.filter((winningNumber) =>
      this.#numbers.includes(Number(winningNumber)),
    );
    return matchedNumbers.length;
  }
}

export default Lotto;
