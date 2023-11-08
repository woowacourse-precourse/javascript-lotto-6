/* eslint-disable class-methods-use-this */
class WinningNumbers {
  #winningNumbers = [];

  #bonusNumber;

  constructor(inputWinningNumbers, inputBonusNumber) {
    this.#bonusNumber = Number(inputBonusNumber);
    this.#winningNumbers = this.parseNumbers(inputWinningNumbers);
    this.validateNumbers(this.#winningNumbers, this.#bonusNumber);
  }

  getWinningNumbers() {
    return this.#winningNumbers;
  }

  getBonus() {
    return this.#bonusNumber;
  }

  validateNumbers(winningNumbers, bonusNumber) {
    this.checkInteger(winningNumbers);
    this.checkLength(winningNumbers);
    this.checkRange(winningNumbers);
    this.checkDuplication(winningNumbers, bonusNumber);
  }

  parseNumbers(inputWinningNumbers) {
    return inputWinningNumbers.split(",").map(Number);
  }

  checkInteger(winningNumbers) {
    if (!winningNumbers.every((number) => Number.isInteger(number))) {
      throw new Error("[ERROR] 당첨 번호는 정수여야 합니다.");
    }
  }

  checkLength(winningNumbers) {
    if (winningNumbers.length !== 6) {
      throw new Error("[ERROR] 당첨 번호 여섯자리를 모두 입력하세요.");
    }
  }

  checkRange(winningNumbers) {
    if (!winningNumbers.every((number) => number >= 1 && number <= 45)) {
      throw new Error("[ERROR] 유효한 숫자를 입력하세요.");
    }
  }

  checkDuplication(winningNumbers, bonusNumber) {
    if (new Set(winningNumbers).size !== 6) {
      throw new Error("[ERROR] 중복된 숫자가 있으면 안됩니다.");
    }

    if (winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 숫자가 당첨 숫자와 종복되면 안됩니다.");
    }
  }
}

export default WinningNumbers;
