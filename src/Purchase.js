import { Random } from "@woowacourse/mission-utils";
import Validate from "./Validate.js";
import { LOTTO } from "./constants/rule.js";
import Utils from "./Utils.js";

class Purchase {
  constructor(sum) {
    this.checkValidPurchaseSum(sum);
    this.amount = Utils.getLottoAmount(sum);
    this.lottos = [];
  }

  checkValidPurchaseSum(sum) {
    const validate = new Validate();
    validate.isValidPurchaseSum(sum);
  }

  getAmount() {
    return this.amount;
  }

  getLottos() {
    for (let i = 0; i < this.amount; i++) {
      const lotto = this.getLotto();
      this.lottos.push(lotto);
    }

    return this.lottos;
  }

  getLotto() {
    const lotto = Random.pickUniqueNumbersInRange(
      LOTTO.MIN_RANGE,
      LOTTO.MAX_RANGE,
      LOTTO.LENGTH
    );

    const sortedLotto = Utils.getAscendingSortedArray(lotto);

    return sortedLotto;
  }
}

export default Purchase;
