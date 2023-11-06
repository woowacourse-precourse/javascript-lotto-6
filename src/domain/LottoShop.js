import { MissionUtils } from '@woowacourse/mission-utils';
import LOTTO from '../constant/Lotto.js';
import Lotto from './Lotto.js';

class LottoShop {
  static buyLottos(money) {
    const count = money.get() / LOTTO.price;
    const lottos = new Array(count).fill();

    // TODO: 새로운 배열을 만들어 반환하므로 효율성 문제가 있을 수도 있다.
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
  // static create(money) {
  //   // 제일복권 또는 스포츠 토토인 경우를 위해 팩토리 메서드
  //   return new LottoShop(money);
  // }
}

export default LottoShop;
