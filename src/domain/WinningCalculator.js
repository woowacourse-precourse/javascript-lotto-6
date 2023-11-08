const NUMBER_NAME = {
  winning: '당첨',
  bonus: '보너스',
};

const LOTTO = {
  price: 1000,
};

const BONUS_OPTIONS = {
  matchCount: 5,
};

const MATCH_RANKING = new Map([
  [3, '5등'],
  [4, '4등'],
  [5, '3등'],
  [NUMBER_NAME.bonus, '2등'],
  [6, '1등'],
]);

const WINNING_PRIZE = new Map([
  ['5등', 5000],
  ['4등', 50000],
  ['3등', 1500000],
  ['2등', 30000000],
  ['1등', 2000000000],
]);

class WinningCalculator {
  #totalWinningNumbers;

  #issuedLottoNumbers;

  profit;

  constructor(totalWinningNumbers, issuedLottoNumbers) {
    this.#totalWinningNumbers = totalWinningNumbers;
    this.#issuedLottoNumbers = issuedLottoNumbers;
    this.winnerList = new Map();
    this.#analyzeWinner();
    this.#calculateProfit();
  }

  #analyzeWinner() {
    const winningNumbers = this.#totalWinningNumbers.get(NUMBER_NAME.winning);
    const bonusNumber = this.#totalWinningNumbers.get(NUMBER_NAME.bonus);

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
    const matchedCount = integratedNumbers.length - nonDuplicated.size;

    return matchedCount;
  }

  isMatchBonusNumber(bonusNumber, targetNumbers) {
    return targetNumbers.includes(bonusNumber);
  }

  // 끝
  #compileWinner(matchCount) {
    const rank = MATCH_RANKING.get(matchCount);
    this.winnerList.set(rank, 1 + (this.winnerList.get(rank) ?? 0));
  }

  #compileBonusWinner(matchCount, isWinningBonus) {
    const rank = MATCH_RANKING.get(matchCount);
    const bonusRank = MATCH_RANKING.get(NUMBER_NAME.bonus);

    if (matchCount === BONUS_OPTIONS.matchCount && isWinningBonus) {
      this.winnerList.set(rank, this.winnerList.get(rank) - 1);
      this.winnerList.set(bonusRank, 1 + (this.winnerList.get(bonusRank) ?? 0));
    }
  }

  #calculateProfit() {
    const totalCost = this.#issuedLottoNumbers.length * LOTTO.price;
    const winnerListArray = Array.from(this.winnerList);
    const totalPrize = winnerListArray.reduce((accPrize, rankAndCount) => {
      const prize =
        accPrize + WINNING_PRIZE.get(rankAndCount[0]) * rankAndCount[1];
      return prize;
    });
    return totalPrize / totalCost;
  }
}

export default WinningCalculator;
