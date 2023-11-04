class BonusNumber {
  #bonusNumber;

  constructor(input) {
    this.#bonusNumber = input;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default BonusNumber;
