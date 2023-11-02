import { Random } from "@woowacourse/mission-utils";
import { LOTTO } from "./constants/rule.js";

class Purchase {
  constructor(amount) {
    this.lottos = [];
    this.amount = amount;
  }

  getLottos() {
    for (let i = 0; i < this.amount; i++) {
      const lotto = this.getLotto();
      this.lottos.push(lotto);
    }
  }

  getLotto() {
    const lotto = Random.pickUniqueNumbersInRange(
      LOTTO.MIN_RANGE,
      LOTTO.MAX_RANGE,
      LOTTO.LENGTH
    );

    return lotto;
  }
}

export default Purchase;
