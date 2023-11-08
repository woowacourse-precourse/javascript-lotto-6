import Validation from '../validation/Validation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  // 로또번호 검증
  #validate(numbers) {
    Validation.validateLottoNumbers(numbers);
  }

  // 로또 번호 반환
  getNumbers() {
    return this.#numbers;
  }

  //로또 번호와 당첨번호 대조하여 몇개가 일치하는지 반환
  getMatchingCount(winningNumbers) {
    const MATHING_NUMBERS = winningNumbers.filter((winningNumber) =>
      this.#numbers.includes(Number(winningNumber))
    );
    return MATHING_NUMBERS.length;
  }
}

export default Lotto;
