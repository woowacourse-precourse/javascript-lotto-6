class Bonus {
  #number;

  constructor(number, numbers) {
    this.#number = number;
  }

  winningNumber() {
    return this.#number;
  }
}

export default Bonus;
