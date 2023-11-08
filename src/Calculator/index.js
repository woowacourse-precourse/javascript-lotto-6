import { NUMBER, MATCH, RANK, REWARD } from '../constants/index.js';

class Calculator {
  #lottos;

  #winningNumbers;

  #bonusNumber;

  constructor(lottos, winningNumbers, bonusNumber) {
    this.#lottos = lottos;
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  #countMatch(lotto) {
    return lotto.filter((number) => this.#winningNumbers.includes(number))
      .length;
  }

  #getRank(lotto) {
    const matchCount = this.#countMatch(lotto, this.#winningNumbers);
    const hasBonusNumber = lotto.includes(this.#bonusNumber);
    if (matchCount === MATCH.six) {
      return RANK.first;
    }
    if (matchCount === MATCH.five) {
      return hasBonusNumber ? RANK.second : RANK.third;
    }
    if (matchCount === MATCH.four) {
      return RANK.fourth;
    }
    return matchCount === MATCH.three ? RANK.fifth : RANK.none;
  }

  calculateRanks() {
    const ranks = { fifth: 0, fourth: 0, third: 0, second: 0, first: 0 };

    this.#lottos.forEach((lotto) => {
      const rank = this.#getRank(lotto.getLotto());

      if (rank !== RANK.none) {
        ranks[rank] += NUMBER.one;
      }
    });
    return ranks;
  }

  calculateRevenue(purchaseAmount) {
    const ranks = this.calculateRanks();
    const revenue = Object.entries(ranks).reduce(
      (acc, [rank, count]) => acc + count * REWARD[rank],
      0,
    );
    return ((revenue / purchaseAmount) * NUMBER.percentage).toFixed(
      NUMBER.decimalPoint,
    );
  }
}

export default Calculator;
