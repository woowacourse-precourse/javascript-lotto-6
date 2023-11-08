import Lotto from './Lotto.js';
import { ERROR, LOTTO } from './config.js';
import { isPositiveInteger } from './utils.js';

const { WIN } = LOTTO;
const { FIRST, SECOND, THIRD, FOURTH, FIFTH, NONE } = WIN;
export default class WinningLotto extends Lotto {
  #bonusNumber;

  #validateBonusNumber(bonusNumber) {
    const { START, END } = LOTTO.RANGE;

    if (!isPositiveInteger(bonusNumber)) throw new Error(ERROR.IS_NOT_POSITIVE_INTEGER);
    if (bonusNumber < START || bonusNumber > END) throw new Error(ERROR.IS_NOT_IN_LOTTO_RANGE);
    if (this.getNumbers().includes(bonusNumber)) throw new Error(ERROR.IS_DUPLICATED);
  }

  #getMatchCountWithoutBonusNumber(lotto) {
    return this.getNumbers().filter((number) => lotto.getNumbers().includes(number)).length;
  }
  #isMatchBonusNumber(lotto) {
    return lotto.getNumbers().includes(this.#bonusNumber);
  }
  setBonusNumber(bonusNumber) {
    this.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = Number(bonusNumber);
  }

  getStatistics(lottos) {
    const statistics = {
      [FIRST]: 0,
      [SECOND]: 0,
      [THIRD]: 0,
      [FOURTH]: 0,
      [FIFTH]: 0,
    };
    lottos.forEach((lotto) => {
      const rank = this.calculatePrizeAmount(lotto);
      if (rank !== NONE) statistics[rank] += 1;
    });

    return statistics;
  }
  calculatePrizeAmount(lotto) {
    const matchCount = this.#getMatchCountWithoutBonusNumber(lotto);
    const isBonusNumberMatched = this.#isMatchBonusNumber(lotto);
    if (matchCount === 6) return FIRST;
    if (matchCount === 5 && isBonusNumberMatched) return SECOND;
    if (matchCount === 5) return THIRD;
    if (matchCount === 4) return FOURTH;
    if (matchCount === 3) return FIFTH;

    return NONE;
  }

  getProfitRate(statistics, amount) {
    const totalPrizeAmount = Object.keys(statistics).reduce((acc, key) => acc + Number(key) * statistics[key], 0);
    return ((totalPrizeAmount * 100) / amount).toFixed(1);
  }
}
