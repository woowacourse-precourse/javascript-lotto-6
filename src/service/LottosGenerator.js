import { MissionUtils } from '@woowacourse/mission-utils';
import { utils } from '../utils/utils.js';
import { LOTTO } from '../constants/lotto.js';
import Lotto from '../Lotto.js';

class LottosGenerator {
  #lottos = [];

  constructor(money) {
    this.#createLottos(this.#getTotalIssueCount(money));
  }

  #createLottos(totalIssueCount) {
    let currentIssueCount = 1;

    while (currentIssueCount <= totalIssueCount) {
      const numbers = this.#createLottoNumbers();
      const lotto = new Lotto(numbers);

      this.#lottos.push(lotto);

      currentIssueCount += 1;
    }
  }

  #createLottoNumbers() {
    const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO.minNumber,
      LOTTO.maxNumber,
      LOTTO.length,
    );
    // TODO: 오름차순 정렬을 어디서 해야할까?
    return utils.ascendingNumbers(lottoNumbers);
  }

  #getTotalIssueCount(money) {
    return money / LOTTO.unitPrice;
  }

  getLottos() {
    return this.#lottos.map((lotto) => lotto.getNumbers());
  }
}

export default LottosGenerator;
