class LottoUtill {
  #calcNumber;

  constructor(calcNumber) {
    this.#calcNumber = calcNumber;
  }

  howManyToBuy() {
    return parseInt(this.#calcNumber / 1000, 10);
  }

  sortingNumber() {
    this.#calcNumber.sort((a, b) => a - b);
    return this.#calcNumber.join(', ');
  }
}

export default LottoUtill;
