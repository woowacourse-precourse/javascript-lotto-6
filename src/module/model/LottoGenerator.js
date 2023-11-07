import Lotto from '../../Lotto.js';
import {MissionUtils} from "@woowacourse/mission-utils";

class LottoGenerator {
  #lottos = [];

  constructor(count) {
    this.#generateLottos(count);
  }

  #generateLottos(count) {
    let lotto;

    for (let i = 0; i < this.#count; i += 1) {
      lotto = new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
      this.#lottos.push(lotto);
    }
  }
}

export default LottoGenerator;
