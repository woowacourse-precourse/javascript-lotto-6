import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from '../../Lotto.js';

class LottoStore {
  static buyLotto(userMoney) {
    const target = [];
    for (let i = 0; i < userMoney / 1000; i++) {
      const GET_LOTTO = new Lotto(
        MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
      );
      const GET_LOTTO_RESULT = GET_LOTTO.numbersValueResult();
      target.push(GET_LOTTO_RESULT);
    }
    return target;
  }
}

export default LottoStore;
