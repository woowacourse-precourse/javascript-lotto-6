import { Random } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";

export default class Generator {
  random() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  lotto(random) {
    return new Lotto(random);
  }
}
