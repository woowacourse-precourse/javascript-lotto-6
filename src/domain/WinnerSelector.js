class WinnerSelector {
  #lottoNumbers;
  #bonusNumber;
  #issuedLottos;
  #winningCount;

  constructor({ lottoNumbers, bonusNumber, issedLottos }) {
    this.#lottoNumbers = lottoNumbers;
    this.#bonusNumber = bonuasNumber;
    this.#issuedLottos = issedLottos;
    this.#winningCount = [0, 0, 0, 0, 0];
  }

  #getLottoCount(issedLotto) {
    return issedLotto.filter(lottoNumber =>
      this.#lottoNumbers.includes(lottoNumber),
    ).length;
  }

  #isBonusMatched(issuedLotto) {
    return issuedLotto.includes(this.#bonusNumber);
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
    return this.#winningCount;
  }
}

export default WinnerSelector;
