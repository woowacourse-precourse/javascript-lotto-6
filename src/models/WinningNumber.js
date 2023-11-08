import LottoValidator from '../validators/LottoValidator.js';

class WinningNumber {
  #numbers;
  #bonusNumber;

  constructor(numbers) {
    this.#validateNumbers(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
    this.#bonusNumber = 0;
  }

  #validateNumbers(numbers) {
    LottoValidator.validateLottoNumbers(numbers);
  }

  setBonusNumber(bonusNumber) {
    this.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validateBonusNumber(bonusNumber) {
    const numbers = this.getWinningNumber();
    LottoValidator.validateBonusNumber(bonusNumber, numbers);
  }

  getWinningNumber() {
    return this.#numbers;
  }
  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default WinningNumber;
