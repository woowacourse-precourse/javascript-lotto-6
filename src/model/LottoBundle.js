import { Random } from '@woowacourse/mission-utils';
import validation from '../validation/validation.js';
import { ERROR_MSG } from '../constants/messages.js';
import Lotto from '../Lotto.js';

class LottoBundle {
  #lottos;

  #money;

  constructor(money) {
    LottoBundle.validate(money);
    this.#money = money;
    this.#lottos = [];
  }

  static validate(money) {
    if (!validation.isNumber(money)) throw new Error(ERROR_MSG.INVALID_MONEY);
    if (!validation.isValidMoney(money))
      throw new Error(ERROR_MSG.NOT_1000_UNITS);
  }

  buyLottos() {
    const count = this.#money / 1000;
    for (let i = 0; i < count; i += 1) {
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lottos.push(new Lotto(lotto));
    }
    return this.#lottos;
  }

  getLottos() {
    return this.#lottos;
  }

  getMoney() {
    return this.#money;
  }
}

export default LottoBundle;
