import Validation from '../validation/Validation';

export default class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  // 로또번호 유효성 검사
  #validate(numbers) {
    Validation.validateLottoNumbers(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  getMatchingCount(winningNumbers) {
    const MATHING_NUMBERS = winningNumbers.filter((winningNumber) =>
      this.#numbers.includes(Number(winningNumber)),
    );
    return MATHING_NUMBERS.length;
  }
}
