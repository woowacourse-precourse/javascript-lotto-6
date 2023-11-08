import { Random } from '@woowacourse/mission-utils';

import { LottoRule } from './models/rule.js';

class Purchaser {
  #lottos;

  get lottos() {
    return this.#lottos;
  }

  constructor() {
    this.#lottos = [];
  }

  getLotto() {
    const lotto = Random.pickUniqueNumbersInRange(LottoRule.MinNumber, LottoRule.MaxNumber, LottoRule.Number);
    this.#lottos.push(lotto);

    return lotto;
  }
}

export default Purchaser;
