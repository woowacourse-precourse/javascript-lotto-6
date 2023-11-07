class WinningLotto {
  #numbers;
  #bonusNumber;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  setBonusNumber(bonusNumber) {
    this.#bonusNumber = bonusNumber;
  }

  getNumbers() {
    return this.#numbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default WinningLotto;
