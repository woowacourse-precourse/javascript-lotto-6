import { MissionUtils } from '@woowacourse/mission-utils';
import LOTTO from '../constant/Lotto.js';
import Lotto from './Lotto.js';

class LottoShop {
  static buyLottos(money) {
    const count = money.get() / LOTTO.price;
    const lottos = new Array(count).fill();

    return lottos.map(() => this.#generateLotto());
  }

  static #generateLotto() {
    const lotto = MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO.minLottoNum,
      LOTTO.maxLottoNum,
      LOTTO.count,
    );

    return new Lotto(lotto);
  }
}

export default LottoShop;
