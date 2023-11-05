import { Random } from '@woowacourse/mission-utils';

import { LOTTO } from '../constants/setting.js';
import Lotto from '../Lotto.js';
import OutputView from '../views/Output.js';

class LottoController {
  #money;
  #lottos;
  #statistics;

  constructor(money) {
    this.#money = money;
    this.#lottos = [];
    this.#statistics = this.initLottoStatistics();
  }

  initLottoStatistics() {
    return {
      match3: { count: 0, prize: 5000 },
      match4: { count: 0, prize: 50000 },
      match5: { count: 0, prize: 1500000 },
      match5Bonus: { count: 0, prize: 30000000 },
      match6: { count: 0, prize: 2000000000 },
    };
  }

  purchaseLotto() {
    const lottoCount = this.#money / LOTTO.price;
    OutputView.printPurchaseMessage(lottoCount);

    for (let i = 0; i < lottoCount; i += 1) {
      const lotto = this.issueLotto();
      this.#lottos.push(lotto);
    }
  }

  issueLotto() {
    const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    const lotto = new Lotto(lottoNumbers);

    return lotto;
  }
}

export default LottoController;
