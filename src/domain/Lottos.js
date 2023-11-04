import Lotto from "./Lotto.js";
import LottoNumberGenerator from "../utils/LottoNumberGenerator.js";

class Lottos {
  #lottos;

  constructor(count) {
    this.#lottos = new Array(count);
    for (let i = 0; i < count; i += 1) {
      this.#lottos[i] = new Lotto(LottoNumberGenerator.generate());
    }
  }

  getLottos() {
    return this.#lottos;
  }
}

export default Lottos;
