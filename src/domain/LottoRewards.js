import Lotto from '../Lotto.js';
import LottoReward from './LottoReward.js';
import WinningLotto from './WinningLotto.js';

class LottoRewards {
  #prizeTable = [
    // 1등
    LottoReward.of({ match: 6, hasBonus: false }, 2_000_000_000),

    // 2등
    LottoReward.of({ match: 5, hasBonus: true }, 30_000_000),

    // 3등
    LottoReward.of({ match: 5, hasBonus: false }, 1_500_000),

    // 4등
    LottoReward.of({ match: 4, hasBonus: false }, 50_000),

    // 5등
    LottoReward.of({ match: 3, hasBonus: false }, 5_000),
  ];

  /**
   * @type {WinningLotto}
   */
  #winningLotto;

  /**
   * @param {WinningLotto} winningLotto
   */
  constructor(winningLotto) {
    this.#winningLotto = winningLotto;
  }

  static of(winningLotto) {
    return new LottoRewards(winningLotto);
  }

  /**
   * @param {Lotto[]} lottos
   * @returns {LottoReward[]}
   */
  getLottosResult(lottos) {
    lottos.forEach((lotto) => this.#compareLotto(lotto));
    return this.#prizeTable;
  }

  /**
   * @param {Lotto} lotto
   */
  #compareLotto(lotto) {
    const match = this.#winningLotto.prepare(lotto);
    const hasBonus = this.#winningLotto.hasBonus(lotto);

    this.#prizeTable.some((reward) => reward.checkRequirement({ match, hasBonus }));
  }
}

export default LottoRewards;
