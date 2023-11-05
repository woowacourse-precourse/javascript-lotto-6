import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoManagement {
  constructor() {}

  getLottoArray(count) {
    return Array.from(
      { length: count },
      () => new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6))
    );
  }
}

export default LottoManagement;
