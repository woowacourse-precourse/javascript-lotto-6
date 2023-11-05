import Lotto from '../Lotto.js';
import { LOTTO_SETTING } from '../constant.js';
import Util from '../utils/Util.js';

class Lottos {
  #purchase;

  #lottos;

  constructor(purchase) {
    this.#lottos = [];
    this.#purchase = purchase;
  }

  setPurchase(purchase) {
    this.#purchase = purchase;
  }

  generateLotto() {
    const amount = this.#purchase / LOTTO_SETTING.unit;
    const newLottos = [];
    Array.from({ length: amount }).forEach(() => newLottos.push(Lottos.#makeLotto()));
    this.#lottos = newLottos;
  }

  static #makeLotto() {
    const randomNumber = Util.getLottoNumberList();
    return new Lotto(randomNumber);
  }
}

export default Lottos;
