import { Random } from '@woowacourse/mission-utils';
import { NUMBER, MESSAGE, RANDOM, SYMBOLS } from '../constants/index.js';
import Lotto from '../Lotto.js';

class LottoMachine {
  #lottos;

  constructor() {
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

  buy(lottoCount) {
    this.#lottos = this.#pickLottos(lottoCount);
    const lottoStrings = this.#lottos
      .map((lotto) => lotto.formatString())
      .join(SYMBOLS.lineBreak);

    return `${lottoCount}${MESSAGE.purchase}${lottoStrings}`;
  }
}

export default LottoMachine;
