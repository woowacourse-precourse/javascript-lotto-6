class WinningNumbers {
  #winningLotto;

  #bonusNumber;

  constructor(winning, bonus) {
    this.#winningLotto = winning;
    this.#bonusNumber = bonus;
  }

  getWinningLotto() {
    return this.#winningLotto;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default WinningNumbers;
