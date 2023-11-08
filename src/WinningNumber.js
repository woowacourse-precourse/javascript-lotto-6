import Validator from './utils/vaildators';

class WinningNumber {
  #winningNumbers;
  #bonusNumber;

  #validateWinningNumber(winningNumbers) {
    Validator.isSixNumbers(winningNumbers);
    Validator.hasDuplicateNumbers(winningNumbers);

    for (const number of winningNumbers) {
      Validator.isNaN(number);
      Validator.isDouble(number);
      Validator.isOutOfRange(number);
    }
  }

  #validateBonusNumber(bonusNumber) {}

  setWinningNumbers(winningNumbers) {
    this.#validateWinningNumber(winningNumbers);
    this.#winningNumbers = winningNumbers;
  }

  getWinningNumber() {
    return [...this.#winningNumbers];
  }

  setBonusNumber(bonusNumber) {
    this.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  getBonusNumber() {
    return [...this.#bonusNumber];
  }
}

export default WinningNumber;
