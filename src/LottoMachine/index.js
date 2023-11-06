import { Random } from '@woowacourse/mission-utils';
import { NUMBER, RANDOM } from '../constants/index.js';
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
}

export default LottoMachine;
