import Lotto from "../Lotto.js";
import { Random } from "@woowacourse/mission-utils";

class LottoStore {
  #lottos = [];

  constructor(purchaseQuantity) {
    const randomLottoNumbers = this.#createRandomLottoNumbers(purchaseQuantity);
    this.#createLottos(randomLottoNumbers);
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

  #createLottos(randomLottoNumbers) {
    this.#lottos = randomLottoNumbers.map(
      (randomNumbers) => new Lotto(randomNumbers)
    );
  }

  getLottoNumbers() {
    const lottoNumbers = this.#lottos.map((lotto) => lotto.getNumbers());
    return lottoNumbers;
  }
}

export default LottoStore;
