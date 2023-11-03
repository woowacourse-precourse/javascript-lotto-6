import LottoValidator from './domain/LottoValidator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.map(Number);
  }

  #validate(numbers) {
    LottoValidator.validLottoNumber(numbers);
  }

  hasContainBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }

  countMatchWinningNumbers(winningNumbers) {
    return this.#numbers.filter((number) => winningNumbers.includes(number)).length;
  }

  getLottoComparisonResults(winningNumbers, bonusNumber) {
    const matchingCount = this.countMatchWinningNumbers(winningNumbers);
    const hasBonusNumber = this.hasContainBonusNumber(bonusNumber);

    return { matchingCount, hasBonusNumber };
  }

  getLotto() {
    return this.#numbers;
  }
}

export default Lotto;
