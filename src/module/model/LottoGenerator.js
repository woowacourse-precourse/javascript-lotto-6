import Lotto from '../../Lotto.js';
import {MissionUtils} from "@woowacourse/mission-utils";

class LottoGenerator {
  #lottos = [];
  #count;

  constructor(money) {
    this.#validateMoney(money);
    this.#count = this.#changeMoneyToCount(money);
    this.#generateLottos();
  }

  #generateLottos() {
    let lotto;

    for (let i = 0; i < this.#count; i += 1) {
      lotto = new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
      this.#lottos.push(lotto);
    }
  }

  #changeMoneyToCount(money) {
    return money / 1000;
  }

  #validateMoney(money) {
    if (money % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액이 1,000원 단위가 아닙니다.');
    };
  }
}

export default LottoGenerator;
