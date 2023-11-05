import Util from './utils/util.js';
import { LottoRule } from './models/const.js';

class Manager {
  #soldLottos;

  constructor() {
    this.#soldLottos = [];
  }

  generateLotto() {
    const numberSet = new Set();

    while (numberSet.size < 6) {
      numberSet.add(Util.randomNumber(LottoRule.MinNumber, LottoRule.MaxNumber));
    }

    const lotto = Util.toAscendingArray(Array.from(numberSet));
    this.#soldLottos.push(lotto);

    return lotto;
  }
}

export default Manager;
