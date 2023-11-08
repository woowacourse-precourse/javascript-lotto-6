import { Random } from '@woowacourse/mission-utils';
import { LOTTO } from '../Constant.js';
import Lotto from './Lotto.js';

class LottoFactory {
  exchangeLottos(money) {
    const amount = money / LOTTO.MONEY_UNIT;
    const lottos = Array.from({ length: amount }, this.#generateLotto);
    return lottos;
  }

  #generateLotto() {
    const randomLottoNumbers = Random.pickUniqueNumbersInRange(
      LOTTO.MIN_NUMBER,
      LOTTO.MAX_NUMBER,
      LOTTO.COUNT
    );
    return new Lotto(randomLottoNumbers);
  }
}

export default LottoFactory;
