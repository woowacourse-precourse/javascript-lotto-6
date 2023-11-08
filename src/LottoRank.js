class LottoRank {
  #matchCount;
  #isMatchBonusNumber;

  constructor(lottoNumbers, winningNumbers, bonusNumber) {
    this.calculateMatchCount(lottoNumbers, winningNumbers);
    this.compareBonusNumber(winningNumbers, bonusNumber);
  }

  getRank() {
    if (this.#matchCount === 6) return 1;
    if (this.#matchCount === 5) return this.#isMatchBonusNumber ? 2 : 3;
    if (this.#matchCount === 4) return 4;
    if (this.#matchCount === 3) return 5;
    return null;
  }

  calculateMatchCount(lottoNumbers, winningNumbers) {
    this.#matchCount = winningNumbers.reduce((acc, winningNumber) => {
      if (lottoNumbers.includes(winningNumber)) return acc + 1;
      return acc;
    }, 0);
  }

  compareBonusNumber(winningNumbers, bonusNumber) {
    this.#isMatchBonusNumber = winningNumbers.includes(bonusNumber);
  }
}

export default LottoRank;
