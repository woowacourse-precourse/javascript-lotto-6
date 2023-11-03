import { Random } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';

class Lottos {
  #lottos;

  constructor(lottos) {
    this.#lottos = Array.from({ length: lottos }).map(() => {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b,
      );
      return numbers;
    });
    this.#lottos = this.#lottos.map(lotto => new Lotto(lotto));
  }

  getLottos() {
    return this.#lottos;
  }
}

export default Lottos;
