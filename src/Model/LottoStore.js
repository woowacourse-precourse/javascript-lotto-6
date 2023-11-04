import Lotto from "../Lotto.js";
import { Random } from "@woowacourse/mission-utils";

class LottoStore {
  #lottos = [];

  constructor(purchaseQuantity) {
    const randomLottoNumbers = this.#createRandomLottoNumbers(purchaseQuantity);
  }

  #createRandomLottoNumbers(purchaseQuantity) {
    const randomLottoNumbers = Array.from({ length: purchaseQuantity }, () =>
      this.#pickRandomNumbers()
    );

    return randomLottoNumbers;
  }

  #pickRandomNumbers() {
    const RandomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return RandomNumbers;
  }
}

export default LottoStore;
