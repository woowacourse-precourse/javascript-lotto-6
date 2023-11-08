import LottoValidator from './LottoValidator.js';
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    LottoValidator.validateNumbers(numbers);
  }

  checkWinning(winningNumbers, bonusNumber) {
    const count = winningNumbers.filter((num) =>
      this.#numbers.includes(num)
    ).length;

    return {
      count: count,
      bonus: count === 5 && this.#numbers.includes(bonusNumber),
    };
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
