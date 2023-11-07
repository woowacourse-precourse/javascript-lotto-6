class LottoBalls {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#validate(winningNumbers, bonusNumber);
    this.#winningNumbers = winningNumbers.split(',').map(Number);
    this.#bonusNumber = Number(bonusNumber);
  }

  #validate() {}

  getLottoBalls() {
    return {
      winningNumbers: [...this.#winningNumbers],
      bonusNumber: this.#bonusNumber,
    };
  }
}

export default LottoBalls;
