import { generateRandomLottoNumbers } from '../utils/index.js';
import Lotto from '../Lotto.js';
import { PRIZE_TABLE } from '../constants/lotto.js';

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
      this.#lottos.push(new Lotto(generateRandomLottoNumbers()));
      this.#budget -= 1000;
    }
  }

  checkLottos(winningNumbers, bonusNumber) {
    this.#lottos.forEach((lotto) => {
      const rank = lotto.checkLotto(winningNumbers, bonusNumber).getRank();
      if (rank) this.#scoreCard[rank] += 1;
    });
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

  static #validateBudget(budget) {
    if (budget % 1000 !== 0)
      throw new Error('[ERROR] 예산은 1000원 단위이어야 합니다.');
  }
}

export default Player;
