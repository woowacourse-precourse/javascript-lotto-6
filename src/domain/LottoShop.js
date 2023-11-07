import { Random } from '@woowacourse/mission-utils';

import { LOTTO_NUMBER, LOTTO_PRICE } from '../constants/setting.js';
import OutputView from '../views/OutputView.js';
import Lotto from './Lotto.js';

class LottoShop {
  static purchaseLotto(money) {
    const lottoCount = money / LOTTO_PRICE;
    OutputView.printPurchaseMessage(lottoCount);
    const lottos = [];

    for (let i = 0; i < lottoCount; i += 1) {
      const lotto = this.generateLotto();
      lottos.push(lotto);
    }

    OutputView.printLottos(lottos);
    return lottos;
  }

  static generateLotto() {
    const lottoNumbers = Random.pickUniqueNumbersInRange(
      LOTTO_NUMBER.min,
      LOTTO_NUMBER.max,
      LOTTO_NUMBER.count,
    );
    const lotto = new Lotto(lottoNumbers);

    return lotto;
  }
}

export default LottoShop;
