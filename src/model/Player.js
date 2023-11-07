import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';
import { CONSTANTS, PRIZE_TABLE } from '../constants/lotto.js';

class Player {
  #budget = 0;

  #lottos = [];

  #scoreCard;

  constructor(budget) {
    Player.#validateBudget(budget);
    this.#budget = budget;
    this.#scoreCard = {
      '1등': 0,
      '2등': 0,
      '3등': 0,
      '4등': 0,
      '5등': 0,
    };
  }

  getNumOfLottos() {
    return this.#lottos.length;
  }

  buyLottos() {
    while (this.#budget > 0) {
      this.#lottos.push(new Lotto(Player.#generateRandomLottoNumbers()));
      this.#budget -= CONSTANTS.BASE_PRICING_UNIT;
    }
    return this;
  }

  checkLottos(winningNumbers, bonusNumber) {
    this.#validateHasLottos();
    this.#lottos.forEach((lotto) => {
      const rank = lotto.checkLotto(winningNumbers, bonusNumber).getRank();
      if (rank) this.#scoreCard[rank] += 1;
    });
    return this;
  }

  getScoreCard() {
    return this.#scoreCard;
  }

  getPrize() {
    let prize = 0;

    Object.entries(this.#scoreCard).forEach(([key, value]) => {
      prize += PRIZE_TABLE[key] * value;
    });

    return prize;
  }

  static #generateRandomLottoNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      CONSTANTS.MINIMUM_BOUNDARY,
      CONSTANTS.MAXIMUM_BOUNDARY,
      CONSTANTS.LENGTH_OF_LOTTO
    );
  }

  static #validateBudget(budget) {
    if (budget % CONSTANTS.BASE_PRICING_UNIT !== 0 || budget === 0)
      throw new Error(
        `[ERROR] 예산은 ${CONSTANTS.BASE_PRICING_UNIT}원 단위이어야 합니다.`
      );
  }

  #validateHasLottos() {
    if (this.#lottos.length === 0)
      throw new Error('[ERROR] 구매한 로또가 없습니다.');
  }
}

export default Player;
