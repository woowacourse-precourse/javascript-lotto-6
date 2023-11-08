import { FIXED_POINT, LOTTO, RATE } from '../constant/index.js';

const { FIRST, SECOND, THIRD, FOURTH, FIFTH, NONE } = LOTTO.WINNING;

export class LottoCalculator {
  static calculateMatchCount(lotto, winningNumbers) {
    return winningNumbers.filter((number) => lotto.getNumbers().includes(number)).length;
  }
  static isMatchBonusNumber(lotto, bonusNumber) {
    return lotto.getNumbers().includes(bonusNumber);
  }
  static calculatePrizeAmount(lotto, winningNumbers, bonusNumber) {
    const matchCount = LottoCalculator.calculateMatchCount(lotto, winningNumbers);
    const isBonusNumberMatched = LottoCalculator.isMatchBonusNumber(lotto, bonusNumber);
    if (matchCount === FIRST.COUNT) return FIRST.PRIZE;
    if (matchCount === SECOND.COUNT && isBonusNumberMatched) return SECOND.PRIZE;
    if (matchCount === THIRD.COUNT) return THIRD.PRIZE;
    if (matchCount === FOURTH.COUNT) return FOURTH.PRIZE;
    if (matchCount === FIFTH.COUNT) return FIFTH.PRIZE;

    return NONE.PRIZE;
  }

  static calculateStatistics(lottos, winningNumbers, bonusNumber) {
    const statistics = {
      [FIRST.PRIZE]: NONE.COUNT,
      [SECOND.PRIZE]: NONE.COUNT,
      [THIRD.PRIZE]: NONE.COUNT,
      [FOURTH.PRIZE]: NONE.COUNT,
      [FIFTH.PRIZE]: NONE.COUNT,
    };
    lottos.forEach((lotto) => {
      const rank = this.calculatePrizeAmount(lotto, winningNumbers, bonusNumber);
      if (rank !== NONE.COUNT) statistics[rank] += 1;
    });

    return statistics;
  }
  static calculateProfitRate(statistics, amount) {
    const totalPrizeAmount = Object.keys(statistics).reduce((acc, key) => acc + Number(key) * statistics[key], 0);
    return ((totalPrizeAmount * RATE) / amount).toFixed(FIXED_POINT);
  }
}

export default LottoCalculator;
