class WinnerSelector {
  #lottoNumbers;
  #bonusNumber;
  #issuedLottos;
  #winningCount;

  constructor({ lottoNumbers, bonusNumber, issuedLottos }) {
    this.#lottoNumbers = lottoNumbers.map(Number);
    this.#bonusNumber = bonusNumber;
    this.#issuedLottos = issuedLottos;
    this.#winningCount = [0, 0, 0, 0, 0];
  }

  #getLottoCount(issuedLotto) {
    return issuedLotto.filter(lottoNumber =>
      this.#lottoNumbers.includes(lottoNumber),
    ).length;
  }

  #isBonusMatched(issuedLotto) {
    return issuedLotto.includes(this.#bonusNumber);
  }

  getIssuedLottos() {
    return this.#issuedLottos;
  }

  #setWinningCount({ lottoCount, isBonus }) {
    switch (true) {
      // 1st
      case lottoCount === 6:
        this.#winningCount[this.#winningCount.length - 1] += 1;
        break;
      // 2nd
      case lottoCount === 5 && isBonus:
        this.#winningCount[this.#winningCount.length - 2] += 1;
        break;
      // 3rd, 4th, 5th
      case lottoCount >= 3 && lottoCount <= 5:
        this.#winningCount[lottoCount - 3] += 1;
        break;
      default:
        break;
    }
  }

  #matchResult() {
    this.#issuedLottos.forEach(issuedLotto => {
      const lottoCount = this.#getLottoCount(issuedLotto);
      const isBonus = this.#isBonusMatched(issuedLotto);

      this.#setWinningCount({ lottoCount, isBonus });
    });
  }

  getResult() {
    this.#matchResult();
    return this.#winningCount;
  }
}

export default WinnerSelector;
