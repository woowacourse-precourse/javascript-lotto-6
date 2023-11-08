import Lotto from '../../Lotto.js';
import {MissionUtils} from "@woowacourse/mission-utils";

class LottoGenerator {
  #lottoList = [];

  constructor(count) {
    this.#generateLottos(count);
  }

  #generateLottos(count) {
    let lotto;

    for (let i = 0; i < count; i += 1) {
      lotto = new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b));
      this.#lottoList.push(lotto);
    }
  }

  get lottoList() {
    return this.#lottoList;
  }
}

export default LottoGenerator;
