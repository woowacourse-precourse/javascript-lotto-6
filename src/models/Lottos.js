import Lotto from '../Lotto.js';
import { LOTTO_SETTING } from '../constant.js';
import Util from '../utils/Util.js';

class Lottos {
  #lottos;

  constructor() {
    this.#lottos = [];
  }

  generateLotto(purchase) {
    const amount = purchase / LOTTO_SETTING.unit;
    const newLottos = [];
    Array.from({ length: amount }).forEach(() => newLottos.push(Lottos.#makeLotto()));
    this.#lottos = newLottos;
  }

  static #makeLotto() {
    const randomNumber = Util.getLottoNumberList();
    return new Lotto(randomNumber);
  }

  getLottos() {
    if (this.#lottos.length === 0) {
      return [];
    }

    return this.#lottos.map((lotto) => lotto.getLottoNumbers());
  }
}

export default Lottos;
