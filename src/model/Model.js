import { Random } from "@woowacourse/mission-utils";
import Statics from "../static/Statics.js";
import Lotto from "../Lotto.js";

class Model {
  #lottos;
  #purchaseBudget;

  constructor(purchaseBudget) {
    this.#purchaseBudget = purchaseBudget;
    this.#lottos = this.purchaseLottos(purchaseBudget)
  }
  
  purchaseLottos(purchaseBudget) {
    const MAXpurchasableAmount = Math.floor(purchaseBudget / Statics.lotto.price);
    return Array(MAXpurchasableAmount).fill(null).map(() => {
      return new Lotto(Random.pickUniqueNumbersInRange(
        Statics.lotto.condition.low, Statics.lotto.condition.high, Statics.lotto.condition.digit
      ).sort((a, b) => a - b))
    })
  }
}

export default Model;