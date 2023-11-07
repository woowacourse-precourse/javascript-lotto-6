import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { RANK } from '../constants/options.js';

class Lottos {
  #lottos;

  constructor(amount) {
    this.#lottos = this.#createLottos(amount);
  }

  getLottos() {
    return this.#lottos;
  }

  #createLottos(amount) {
    const lottos = [];

    let currentAmount = 0;
    while (currentAmount < amount) {
      const lotto = this.#generateLotto();
      lottos.push(lotto);
      currentAmount += 1;
    }

    return lottos;
  }

  #generateLotto() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);

    return new Lotto(numbers);
  }

  compareLotto(winningLotto, winnigResult) {
    this.#lottos.forEach((lotto) => {
      const matchingResult = winningLotto.countMatchingNumbers(lotto);
      winnigResult.push(matchingResult);
    });
  }
}

export default Lottos;
