import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO } from '../constants/lotto.js';
import { COMMON } from '../constants/common.js';
import Lotto from '../Lotto.js';

class LottosGenerator {
  #lottos = [];

  constructor(money) {
    this.#generateLottos(this.getTotalIssueCount(money));
  }

  #generateLottos(totalIssueCount) {
    let currentIssueCount = COMMON.zero;

    while (currentIssueCount < totalIssueCount) {
      const numbers = this.#generateLottoNumbers();
      const lotto = new Lotto(numbers);

      this.#lottos.push(lotto);

      currentIssueCount += LOTTO.increseLottoUnit;
    }
  }

  #generateLottoNumbers() {
    const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO.minNumber,
      LOTTO.maxNumber,
      LOTTO.length,
    );

    return lottoNumbers;
  }

  getTotalIssueCount(money) {
    return money / LOTTO.unitPrice;
  }

  getLottos() {
    return this.#lottos.map((lotto) => lotto.getNumbers());
  }
}

export default LottosGenerator;
