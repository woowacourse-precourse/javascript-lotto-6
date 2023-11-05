import Lotto from "./Lotto.js";
import LottoNumberGenerator from "../utils/LottoNumberGenerator.js";

class Lottos {
  #lottos;

  constructor(count) {
    this.#lottos = new Array(count)
      .fill(0)
      .map(() => new Lotto(LottoNumberGenerator.generate()).getLotto());
  }

  getLottos() {
    return this.#lottos;
  }
}

export default Lottos;
