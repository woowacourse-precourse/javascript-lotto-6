import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoShop {
  static lottoPrice = 1000;

  #generateLotto() {
    const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(lottoNumber);
  }

  sellLottos(user, count) {
    for (let i = 0; i < count; i++) {
      const lotto = this.#generateLotto();
      user.buyLotto(lotto, this.lottoPrice);
    }
  }
}

export default LottoShop;
