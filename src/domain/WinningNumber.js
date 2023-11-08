class WinningNumber {
  #winningNumber;

  constructor(winningNumber) {
    this.#winningNumber = winningNumber.split(",");
  }

  getWinningNumber() {
    return this.#winningNumber;
  }
}

export default WinningNumber;
