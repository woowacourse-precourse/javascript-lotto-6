class WinningCalculator {
  #totalWinningNumbers;

  #issuedLottoNumbers;

  constructor(totalWinningNumbers, issuedLottoNumbers) {
    this.#totalWinningNumbers = totalWinningNumbers;
    this.#issuedLottoNumbers = issuedLottoNumbers;
    this.winnerList = new Map();
  }

  #analyzeWinner() {
    const winningNumbers = this.#totalWinningNumbers.get('당첨 번호');
    const bonusNumber = this.#totalWinningNumbers.get('보너스 번호');

    this.#issuedLottoNumbers.forEach((lotto) => {
      const matchCount = this.calculateMatchNumbers(winningNumbers, lotto);
      const isWinningBonus = this.isMatchBonusNumber(bonusNumber, lotto);

      this.#compileWinner(matchCount);
      this.#compileBonusWinner(matchCount, isWinningBonus);
    });
  }

  calculateMatchNumbers(numbers, targetNumbers) {
    const integratedNumbers = numbers.concat(targetNumbers);
    const nonDuplicated = new Set(integratedNumbers);
    const matchedCount = integratedNumbers.length - nonDuplicated.size();

    return matchedCount;
  }

  isMatchBonusNumber(bonusNumber, targetNumbers) {
    return targetNumbers.includes(bonusNumber);
  }

  #compileWinner(matchCount) {
    this.winnerList.set(matchCount, 1 + (this.winnerList.get(matchCount) ?? 0));
  }

  #compileBonusWinner(matchCount, isWinningBonus) {
    if (matchCount === 5 && isWinningBonus === true) {
      this.winnerList.set(matchCount, this.winnerList.get(matchCount) - 1);
      this.winnerList.set('보너스', 1 + (this.winnerList.get('보너스') ?? 0));
    }
  }
}

export default WinningCalculator;
