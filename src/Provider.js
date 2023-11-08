import { Random } from "@woowacourse/mission-utils";
import { RULES } from "./constants/index.js";

export default class Provider {
  static createProvider(purchaseAmount) {
    return new this(purchaseAmount);
  }

  countLottos(purchaseAmount) {
    return purchaseAmount / RULES.lottoPrice;
  }

  provideLotto() {
    return Random.pickUniqueNumbersInRange(RULES.range.start, RULES.range.end, RULES.lottoLength).sort((first, second) => first - second);
  }
}
