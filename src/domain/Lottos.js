import Lotto from "./Lotto.js";
import LottoNumberGenerator from "../utils/LottoNumberGenerator.js";

class Lottos {
  #lottos = [];

  constructor(count) {
    for (let i = 0; i < count; i += 1) {
      this.#lottos.push(new Lotto(LottoNumberGenerator.generate()).getLotto());
    }
  }

  getLottos() {
    return this.#lottos;
  }
}

export default Lottos;
