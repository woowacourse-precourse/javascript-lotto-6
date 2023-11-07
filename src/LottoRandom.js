import { MissionUtils } from "@woowacourse/mission-utils";
import { Lotto } from "./Lotto.js";

export class LottoRandom {
  constructor(lotto_num) {
    this.num = lotto_num;
    this.lotto_arr_total = [];
  }

  makeOneLottoSet() {
    let one_lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}
