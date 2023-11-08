class WinningNumbers {
  #winningNumbers = [];

  #bonusNumber;

  constructor(inputWinningNumbers, inputBonusNumber) {
    this.#bonusNumber = Number(inputBonusNumber);
    this.#winningNumbers = this.parseNumbers(inputWinningNumbers);
    this.validateNumbers();
  }

  getWinningNumbers() {
    return this.#winningNumbers;
  }

  getBonus() {
    return this.#bonusNumber;
  }

  validateNumbers() {
    this.checkInteger();
    this.checkLength();
    this.checkRange();
    this.checkDuplication();
  }

  parseNumbers(inputWinningNumbers) {
    return inputWinningNumbers.split(",").map(Number);
  }

  checkInteger() {
    if (!this.#winningNumbers.every((number) => Number.isInteger(number))) {
      throw new Error("[ERROR] 당첨 번호는 정수여야 합니다.");
    }
    if (!Number.isInteger(this.#bonusNumber))
      throw new Error("[ERROR] 보너스 번호는 정수여야 합니다.");
  }

  checkLength() {
    if (this.#winningNumbers.length !== 6) {
      throw new Error("[ERROR] 당첨 번호 여섯자리를 모두 입력하세요.");
    }
  }

  checkRange() {
    if (!this.#winningNumbers.every((number) => number >= 1 && number <= 45)) {
      throw new Error("[ERROR] 유효한 당첨번호를 입력하세요.");
    }
    if (!(this.#bonusNumber >= 1 && this.#bonusNumber <= 45))
      throw new Error("[ERROR] 유효한 보너스번호를 입력하세요.");
  }

  checkDuplication() {
    if (new Set(this.#winningNumbers).size !== 6) {
      throw new Error("[ERROR] 중복된 숫자가 있으면 안됩니다.");
    }

    if (this.#winningNumbers.includes(this.#bonusNumber)) {
      throw new Error("[ERROR] 보너스 숫자가 당첨 숫자와 중복되면 안됩니다.");
    }
  }
}

export default WinningNumbers;
