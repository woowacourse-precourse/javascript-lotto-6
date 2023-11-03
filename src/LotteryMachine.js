import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LotteryMachine {
  constructor(lottoPrice) {
    this.lottoPrice = lottoPrice;
  }

  buyLottos(purchaseAmount) {
    const lottoCount = Math.floor(purchaseAmount / this.lottoPrice);
    const lottos = [];

    for (let i = 0; i < lottoCount; i++) {
      const numbers = this.pickLottoNumbers();
      lottos.push(new Lotto(numbers));
    }

    return lottos;
  }

  pickLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
  }
}

export default LotteryMachine;
