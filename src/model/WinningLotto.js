class WinningLotto {
  #winningLottoNumbers;

  #bonusLottoNumber;

  constructor(winningLottoNumbers, bonusLottoNumber) {
    this.#winningLottoNumbers = winningLottoNumbers;
    this.#bonusLottoNumber = bonusLottoNumber;
  }

  getWinningLottoNumbers() {
    return this.#winningLottoNumbers;
  }

  getBonusLottoNumber() {
    return this.#bonusLottoNumber;
  }
}

export default WinningLotto;
