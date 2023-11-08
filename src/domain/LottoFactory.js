import { Random } from '@woowacourse/mission-utils';
import { LOTTO } from '../Constant.js';
import Lotto from './Lotto.js';

class LottoFactory {
  exchangeLottos(money) {
    const amount = money / LOTTO.MONEY_UNIT;

    const lottos = Array.from({ length: amount }, () => {
      const randomLottoNumbers = this.#generateLottoNumbers();
      return new Lotto(randomLottoNumbers);
    });

    return lottos;
  }

  #generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      LOTTO.MIN_NUMBER,
      LOTTO.MAX_NUMBER,
      LOTTO.COUNT
    );
  }
}

export default LottoFactory;
