import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../Lotto";

export default class GameModel {
  constructor() {
    this.LOTTO_COUNT = 0;
    this.LOTTOS = [];
  }

  lottoCount(buyingMoney) {
    const lottoCount = Math.floor(buyingMoney / 1000);
    this.LOTTO_COUNT = lottoCount;
    return lottoCount;
  }

  generateLotto(lottoCount) {
    for (let i = 0; i < lottoCount; i++) {
      const number = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(number);
      this.LOTTOS.push(lotto);
    }
  }
}
