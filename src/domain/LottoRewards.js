import Lotto from '../Lotto.js';
import WinningLotto from './WinningLotto.js';
import LottoReward from './LottoReward.js';

import { invalidInstanceElement } from '../utils/validator.js';

import ApplicationError from '../exceptions/ApplicationError.js';

class LottoRewards {
  /**
   * 로또 경품 목록의 에러메세지입니다.
   * @readonly
   */
  static ERROR_MESSAGES = Object.freeze({
    notLottoArray: 'lottos에 배열을 입력해주세요!',
    notLottoInstance: 'lottos에 Lotto가 아닌 인스턴스가 있습니다!',
  });

  /**
   * 등수별 로또 경품입니다.
   * @type {LottoReward[]}
   */
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
   * 경품을 결정할 우승 로또입니다.
   * @type {WinningLotto}
   */
  #winningLotto;

  /**
   * @param {WinningLotto} winningLotto 비교할 우승 로또입니다.
   */
  constructor(winningLotto) {
    this.#winningLotto = winningLotto;
  }

  /**
   * @param {WinningLotto} winningLotto 비교할 우승 로또입니다.
   * @returns {LottoRewards} 로또 경품 목록입니다.
   */
  static of(winningLotto) {
    return new LottoRewards(winningLotto);
  }

  /**
   * 입력한 로또들의 경품 결과를 반환합니다.
   * @param {Lotto[]} lottos 비교할 로또 목록입니다.
   * @returns {LottoReward[]} 로또 경품 목록입니다.
   */
  getLottosResult(lottos) {
    this.#validateLottos(lottos);

    lottos.forEach((lotto) => this.#compareLotto(lotto));

    return this.#prizeTable;
  }

  #validateLottos(lottos) {
    if (!Array.isArray(lottos)) {
      throw new ApplicationError(LottoRewards.ERROR_MESSAGES.notLottoArray);
    }
    if (invalidInstanceElement(lottos, Lotto)) {
      throw new ApplicationError(LottoRewards.ERROR_MESSAGES.notLottoInstance);
    }
  }

  /**
   * 로또에 대한 경품을 확인합니다.
   * @param {Lotto} lotto 비교할 로또입니다.
   */
  #compareLotto(lotto) {
    const rewardResult = this.#winningLotto.grade(lotto);
    this.#prizeTable.some((reward) => reward.checkRequirement(rewardResult));
  }
}

export default LottoRewards;
