import { Random } from '@woowacourse/mission-utils';
import CONSTANTS from '../constants/constants.js';
import Lotto from './Lotto.js';

class Lottos {
  #lottos;

  constructor(count) {
    this.#lottos = [];
    this.#generateLottos(count);
  }

  getLottos() {
    return this.#lottos;
  }

  #generateLottos(count) {
    Array.from({ length: count }, () => this.#lottos.push(this.#generateLotto()));
  }

  #generateRandomNumber(min, max, count) {
    return Random.pickUniqueNumbersInRange(min, max, count).sort((a, b) => a - b);
  }

  #generateLotto() {
    const randomNumber = this.#generateRandomNumber(
      CONSTANTS.number.min,
      CONSTANTS.number.max,
      CONSTANTS.number.count,
    );
    return new Lotto(randomNumber);
  }
}

export default Lottos;
