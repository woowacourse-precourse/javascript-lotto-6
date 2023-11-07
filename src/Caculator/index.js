import { RANK, RANK_MESSAGE, REWARD } from '../constants/index.js';

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
    if (matchCount === RANK.first) {
      return RANK_MESSAGE.first;
    }
    if (matchCount === RANK.second) {
      return hasBonusNumber ? RANK_MESSAGE.second : RANK_MESSAGE.third;
    }
    if (matchCount === RANK.fourth) {
      return RANK_MESSAGE.fourth;
    }
    return matchCount === RANK.fifth ? RANK_MESSAGE.fifth : RANK_MESSAGE.none;
  }

  calculateRanks() {
    const ranks = { fifth: 0, fourth: 0, third: 0, second: 0, first: 0 };

    this.#lottos.forEach((lotto) => {
      const rank = this.#getRank(lotto.getLotto());

      if (rank !== RANK_MESSAGE.none) {
        ranks[rank] += 1;
      }
    });
    return ranks;
  }

  calculateRevenu(purchaseAmount) {
    const ranks = this.calculateRanks();
    const revenue = Object.entries(ranks).reduce(
      (acc, [rank, count]) => acc + count * REWARD[rank],
      0,
    );
    return (revenue / purchaseAmount).toFixed(1);
  }
}

export default Calculator;
