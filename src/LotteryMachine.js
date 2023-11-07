import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LotteryMachine {
  constructor(lottoPrice) {
    this.lottoPrice = lottoPrice;
  }

  buyLottos(purchaseAmount) {
    const lottoCount = this.calculateLottoCount(purchaseAmount);
    return this.generateLottos(lottoCount);
  }

  calculateLottoCount(purchaseAmount) {
    return Math.floor(purchaseAmount / this.lottoPrice);
  }

  generateLottos(count) {
    return Array.from(
      { length: count },
      () => new Lotto(this.pickLottoNumbers())
    );
  }

  pickLottoNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers.sort((a, b) => a - b);
  }
}

export default LotteryMachine;
