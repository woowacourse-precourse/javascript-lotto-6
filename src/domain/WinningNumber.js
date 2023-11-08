class WinningNumber {
  #winningNumber;

  constructor(input) {
    this.#winningNumber = input.split(",");
  }

  getWinningNumber() {
    return this.#winningNumber;
  }
}

export default WinningNumber;
