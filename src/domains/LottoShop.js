import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

// TODO 상수 별도 분리
const LOTTO_PRICE = 1000;

class LottoShop {
  #generateLotto() {
    const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(lottoNumber);
  }

  sellLottos(user, count) {
    for (let i = 0; i < count; i++) {
      const lotto = this.#generateLotto();
      user.buyLotto(lotto, LOTTO_PRICE);
    }
  }

  getLottoPrice() {
    return LOTTO_PRICE;
  }
}

export default LottoShop;
