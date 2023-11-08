import Lotto from './Lotto';
import Money from './Money';

class LottoMachine {
  #lottos;
  #money;

  constructor(lottos = [], money = null) {
    this.#lottos = lottos;
    this.#money = money;
  }

  insertMoney(money) {
    this.#money = new Money(money);
  }
}

export default LottoMachine;
