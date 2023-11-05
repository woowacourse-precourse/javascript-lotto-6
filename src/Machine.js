import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO } from './constants/lotto.js';
import { utils } from './utils/utils.js';
import Lotto from './Lotto.js';

class Machine {
  #lottos = [];

  purchaseLotto(money) {
    const sheetCount = money / LOTTO.unitPrice;
    let currentSheet = 1;

    while (currentSheet <= sheetCount) {
      const numbers = this.#createLottoNumbers();
      const lotto = new Lotto(numbers);

      this.#lottos.push(lotto);

      currentSheet += 1;
    }
  }

  #createLottoNumbers() {
    const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return utils.ascendingNumbers(lottoNumbers);
  }

  getLottoReturns(winningPrice, purchasePrice) {
    return ((winningPrice / purchasePrice) * LOTTO.percentage).toFixed(2);
  }

  getLottos() {
    return this.#lottos;
  }
}

export default Machine;
