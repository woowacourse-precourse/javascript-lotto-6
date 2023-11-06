class BonusNumber {
  #bonusNumber;

  constructor(numbers) {
    this.#bonusNumber = numbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default BonusNumber;