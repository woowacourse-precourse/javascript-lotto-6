import { Random } from '@woowacourse/mission-utils';
import InputValidator from '../utils/InputValidator.js';
import Lotto from './Lotto.js';

class Lottos {
  #lottos;

  #rankCount;

  constructor(lottos) {
    this.#lottos = Array.from({ length: lottos }).map(() => {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b,
      );
      InputValidator.validateNumbers(numbers);
      return numbers;
    });
    this.#lottos = this.#lottos.map(lotto => new Lotto(lotto));

    this.#rankCount = {
      3: 0,
      4: 0,
      5: 0,
      '5+': 0,
      6: 0,
    };
  }

  getLottos() {
    return this.#lottos;
  }

  getRankCount() {
    return this.#rankCount;
  }

  calculateRanks(winningLottos, bonusLotto) {
    this.#lottos.forEach(lotto => {
      const rank = lotto.calculateRank(winningLottos, bonusLotto);

      this.setRankCount(rank);
    });
  }

  setRankCount(rank) {
    const rankMapping = { 1: 6, 2: '5+', 3: 5, 4: 4, 5: 3 };
    if (rankMapping.hasOwnProperty(rank)) {
      this.#rankCount[rankMapping[rank]] += 1;
    }
  }
}

export default Lottos;
