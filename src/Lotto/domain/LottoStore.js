import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from '../../Lotto.js';

class lottoStore {
  static buyLotto(userMoney, target) {
    for (let i = 0; i < userMoney / 1000; i++) {
      const getLotto = new Lotto(
        MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
      );
      target.push(getLotto);
    }
  }
}

export default GenerateNumbers;
