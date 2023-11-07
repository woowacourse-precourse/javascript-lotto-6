import { Random } from '@woowacourse/mission-utils';
import { NUMBER, MESSAGE, RANDOM, SYMBOLS } from '../constants/index.js';
import Lotto from '../Lotto.js';

class LottoMachine {
  #purchaseAmount;

  #lottos;

  constructor() {
    this.#purchaseAmount = 0;
    this.#lottos = [];
  }

  #pickLottos(lottoCount) {
    return Array.from({ length: lottoCount }, () => {
      const numbers = Random.pickUniqueNumbersInRange(
        RANDOM.min,
        RANDOM.max,
        NUMBER.lottoCount,
      );
      return new Lotto(numbers);
    });
  }

  buy(purchaseAmount) {
    const lottoCount = purchaseAmount / NUMBER.lottoPurchaseUnit;
    this.#purchaseAmount = purchaseAmount;
    this.#lottos = this.#pickLottos(lottoCount);

    const lottoStrings = this.#lottos
      .map((lotto) => lotto.formatString())
      .join(SYMBOLS.lineBreak);
    return `${SYMBOLS.lineBreak}${lottoCount}${MESSAGE.purchase}${lottoStrings}`;
  }
}

export default LottoMachine;
