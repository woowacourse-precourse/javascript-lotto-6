import Util from './utils/util.js';
import { LottoRule } from './models/rule.js';

class Purchaser {
  #lottos;

  constructor() {
    this.#lottos = [];
  }

  generateLotto() {
    const numberSet = new Set();

    while (numberSet.size < 6) {
      numberSet.add(Util.randomNumber(LottoRule.MinNumber, LottoRule.MaxNumber));
    }

    const lotto = Util.toAscendingArray(Array.from(numberSet));
    this.#lottos.push(lotto);

    return lotto;
  }
}

export default Purchaser;
