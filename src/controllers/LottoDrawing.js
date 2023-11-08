import { Random } from '@woowacourse/mission-utils';
import modifiers from '../utils/modifiers.js';

class LottoDrawing {
  #line;

  #getRandomNumbers;

  #lottos = [];

  constructor(line) {
    this.#line = line;
    this.#getRandomNumbers = () => Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  checkCount() {
    return Number(this.#line) / 1000;
  }

  makeLottos() {
    for (let i = 0; i < this.checkCount(); i += 1) {
      this.#lottos.push(modifiers.composeAscending(this.#getRandomNumbers()));
    }
    return this.#lottos;
  }
}

export default LottoDrawing;
