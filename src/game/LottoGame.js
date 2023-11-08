import Lotto from "./Lotto.js";
import RandomGenerator from "../utils/Random.js";
import LOTTO from "../constants/LOTTO.js";
import NUMBER from "../constants/NUMBER.js";

class LottoGame {
  #lottoCount;
  #lottos;
  #results;

  constructor(purchaseAmount) {
    this.#lottoCount = this.#calculateCount(purchaseAmount);
    this.#results = LOTTO.RESULTS;
  }

  get countOfLotto() {
    return this.#lottoCount;
  }

  get lottos() {
    return this.#lottos;
  }

  get results() {
    return this.#results;
  }

  #calculateCount(purchaseAmount) {
    return purchaseAmount / NUMBER.PURCHASE.UNIT;
  }

  #createLotto() {
    const numbers = RandomGenerator.lottoWinningNumbers();
    const lotto = new Lotto(numbers);
    return lotto;
  }

  createLottos() {
    const lottos = [];
    for (let i = 0; i < this.#lottoCount; i++) {
      lottos.push(this.#createLotto());
    }
    this.#lottos = lottos;
    return this;
  }
}

export default LottoGame;
