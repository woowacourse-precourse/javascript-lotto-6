import Utils from '../service/Utils.js';
import {
  NUMBER_OPTIONS,
  STATISTICS_STANDARD,
  PURCHASE_OPTIONS,
} from '../service/Constants.js';

class WinningCalculator {
  #totalWinningNumbers;

  #issuedLotto;

  profit;

  constructor(totalWinningNumbers, issuedLotto) {
    this.#totalWinningNumbers = totalWinningNumbers;
    this.#issuedLotto = issuedLotto;
    this.standard = STATISTICS_STANDARD;
    this.winnerList = new Map();
    this.profit = null;
    this.#analyzeWinner();
    this.#calculateProfit();
  }

  #analyzeWinner() {
    const winningNumbers = this.#totalWinningNumbers.get(
      NUMBER_OPTIONS.winningName,
    );
    const bonusNumber = this.#totalWinningNumbers.get(NUMBER_OPTIONS.bonusName);

    this.#issuedLotto.forEach((lotto) => {
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
    const rankList = this.standard.matchCountRank;
    const rank = rankList.get(matchCount);
    this.winnerList.set(rank, 1 + (this.winnerList.get(rank) ?? 0));
  }

  #compileBonusWinner(matchCount, isWinningBonus) {
    const { bonusMatchCount } = this.standard;
    const rankList = this.standard.matchCountRank;
    const rank = rankList.get(matchCount);
    const bonusRank = rankList.get(NUMBER_OPTIONS.bonusName);

    if (matchCount === bonusMatchCount && isWinningBonus) {
      this.winnerList.set(rank, this.winnerList.get(rank) - 1);
      this.winnerList.set(bonusRank, 1 + (this.winnerList.get(bonusRank) ?? 0));
    }
  }

  #calculateProfit() {
    const totalCost = this.#issuedLotto.length * PURCHASE_OPTIONS.unitPrice;

    const userPrize = [];
    this.winnerList.forEach((count, match) => {
      const winningPrize = this.standard.prizeAmount.get(match) * count;
      userPrize.push(winningPrize);
    });
    const totalPrize = userPrize.reduce(
      (accPrize, targetPrize) => accPrize + targetPrize,
    );

    const profit = Utils.convertPercentNumber(totalPrize, totalCost);
    this.profit = profit;
  }
}

export default WinningCalculator;
