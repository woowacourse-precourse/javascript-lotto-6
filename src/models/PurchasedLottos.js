import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class PurchasedLotto {
  createLottos(purchaseCost) {
    const lottoCount = purchaseCost / 1000;
    const lottos = Array.from({ length: lottoCount }, () => {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      return new Lotto(numbers).numbers;
    });
    return lottos;
  }
}

export default PurchasedLotto;
