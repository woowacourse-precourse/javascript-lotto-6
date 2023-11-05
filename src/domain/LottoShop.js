import { MissionUtils } from '@woowacourse/mission-utils';
import LOTTO from '../constant/Lotto.js';

class LottoShop {
  static buyLottos(money) {
    const count = money.getMoney() / LOTTO.price;
    const lottos = new Array(count).fill();

    // TODO: 새로운 배열을 만들어 반환하므로 효율성 문제가 있을 수도 있다.
    return lottos.map(() => this.#generateLottoNumbers());
  }

  static #generateLottoNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO.minLottoNum,
      LOTTO.maxLottoNum,
      LOTTO.count,
    );
  }
  // static create(money) {
  //   // 제일복권 또는 스포츠 토토인 경우를 위해 팩토리 메서드
  //   return new LottoShop(money);
  // }
}

export default LottoShop;
