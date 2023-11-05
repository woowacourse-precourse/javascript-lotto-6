class WinningNumber {
  #winningNumber;

  #bonusNumber;

  setWinningNumber(winningNumber) {
    this.#winningNumber = winningNumber;
  }

  getWinningNumber() {
    return this.#winningNumber;
  }

  setBonusNumber(bonusNumber) {
    this.#bonusNumber = bonusNumber;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default WinningNumber;
