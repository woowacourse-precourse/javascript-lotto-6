import Lotto from './Lotto.js';
import NumberGenerator from './util/NumberGenerator.js';

class LottoSimulator {
  #lottos

  constructor() {
    this.#lottos = [];
  }

  issueLotto(quantity) {
    Array(quantity).fill().map(() => {
      const lotto = new Lotto(NumberGenerator.generator(6));
      this.#lottos.push(lotto.getNumbers());
    })
  }

  getLottos() {
    return this.#lottos;
  }
}

export default LottoSimulator;
