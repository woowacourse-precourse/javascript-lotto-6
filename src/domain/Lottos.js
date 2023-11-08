import Lotto from './Lotto.js';
import LottoMaker from '../utils/LottoMaker.js';

class Lottos {
  #lottos = [];

  constructor(count) {
    for (let i = 0; i < count; i += 1) {
      this.#lottos.push(new Lotto(LottoMaker.generate()).getLotto());
    }
  }

  getLottos() {
    return this.#lottos;
  }
}

export default Lottos;
