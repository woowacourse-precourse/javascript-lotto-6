class BonusNumber {
  #number;

  constructor(number) {
    this.#number = number;
  }

  getBonusNumber() {
    return this.#number;
  }
}

export default BonusNumber;
