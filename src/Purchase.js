import { Random } from "@woowacourse/mission-utils";
import Validate from "./Validate.js";
import { LOTTO } from "./constants/rule.js";
import Utils from "./Utils.js";

class Purchase {
  constructor(sum) {
    this.checkValidPurchaseSum(sum);
    this.amount = Utils.getLottoAmount(sum);
    this.lottos = this.purchaseLottos();
  }

  checkValidPurchaseSum(sum) {
    const validate = new Validate();
    validate.isValidPurchaseSum(sum);
  }

  getAmount() {
    return this.amount;
  }

  getLottos() {
    return this.lottos;
  }

  purchaseLottos() {
    let lottos = [];

    for (let i = 0; i < this.amount; i++) {
      const lotto = this.purhcaseLotto();
      lottos.push(lotto);
    }

    return lottos;
  }

  purhcaseLotto() {
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
