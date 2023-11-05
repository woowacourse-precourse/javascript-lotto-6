import Lotto from "./Lotto.js";
import LottoView from "./LottoView.js";
import { Random } from "@woowacourse/mission-utils";

class LottoController {
  constructor() {
    this.view = new LottoView();
    this.lottos = [];
  }

  async purchaseLottos() {
    console.log("purchase test");
    const amount = await this.view.askPayment();
    const countOfLotto = Math.floor(amount / 1000);
    this.lottos = this.makeLottoNumbers(countOfLotto);
    this.view.showLottoNumbers(this.lottos);
  }

  makeLottoNumbers(countOfLotto) {
    return Array.from({ length: countOfLotto }, () => {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      return new Lotto(numbers);
    });
  }
}

export default LottoController;
