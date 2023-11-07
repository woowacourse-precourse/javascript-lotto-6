import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoManagement {
  constructor() {}

  getLottoArray(count) {
    return Array.from({ length: count }, () => {
      const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      return new Lotto(randomNumbers.sort((a, b) => a - b));
    });
  }
}

export default LottoManagement;
