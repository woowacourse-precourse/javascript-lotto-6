import { LOTTO_CONSTANTS } from "./util/constants";
const { LENGTH, MIN, MAX } = LOTTO_CONSTANTS;
import { MissionUtils } from "@woowacourse/mission-utils";
const { Random } = MissionUtils;
class LottoPurchase {
  #lottoCount;
  #boughtLotto = [];

  constructor(lottoCount) {
    this.#lottoCount = lottoCount;
  }

  get getLottoCount() {
    return this.#lottoCount;
  }

  get getBoughtLotto() {
    return this.#boughtLotto;
  }

  buyOneLotto() {
    const numbers = Random.pickUniqueNumbersInRange(MIN, MAX, LENGTH);
    return numbers;
  }

  buyLottos() {
    const lotto = [];
    for (let i = 0; i < this.getLottoCount; i++) {
      lotto.push(this.buyOneLotto());
    }

    this.#boughtLotto = lotto;
  }
}

export default LottoPurchase;
