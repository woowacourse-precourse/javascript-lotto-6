import { Random } from "@woowacourse/mission-utils";
import Validate from "./Validate";
import { LOTTO } from "./constants/rule";
import Utils from "./Utils";

class Purchase {
  #amount;
  #lottos = [];

  constructor(sum) {
    this.#checkValidPurchaseSum(sum);
    this.#amount = Utils.getLottoAmount(sum);
    this.#purchaseLottos();
  }

  #checkValidPurchaseSum(sum) {
    const validate = new Validate();
    validate.isValidPurchaseSum(sum);
  }

  getAmount() {
    return this.#amount;
  }

  getLottos() {
    return this.#lottos;
  }

  #purchaseLottos() {
    for (let i = 0; i < this.#amount; i++) {
      const lotto = this.#purhcaseLotto();
      this.#lottos.push(lotto);
    }
  }

  #purhcaseLotto() {
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
