import { Random } from "@woowacourse/mission-utils";
import { Console } from "@woowacourse/mission-utils";
import { OPTION } from "./Constants.js";

class LottoData {
  #lottoData;
  #lottoCount;

  constructor(lottoCount) {
    this.#lottoData = [];
    this.#lottoCount = lottoCount;
  }

  pickRandomLotto() {
    const pick = Random.pickUniqueNumbersInRange(
      OPTION.min_random_num,
      OPTION.max_random_num,
      OPTION.lotto_num_count
    );
    pick.sort((a, b) => a - b);
    Console.print(pick);
    this.#lottoData.push(pick);
  }

  iterLotto() {
    for (let i = 0; i < this.#lottoCount; i++) {
      this.pickRandomLotto();
    }
  }
}
export default LottoData;
