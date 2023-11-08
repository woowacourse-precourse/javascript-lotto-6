import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoList {
  #amount;

  #lottos;

  constructor(amount) {
    this.#amount = amount;
    this.#lottos = this.#generateLottos();
  }

  #generateLottos() {
    return new Array(this.#amount)
      .fill(0)
      .map(() =>
        new Lotto(
          Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b)
        ).getLotto()
      );
  }

  getLottoList() {
    return this.#lottos;
  }
}

export default LottoList;
