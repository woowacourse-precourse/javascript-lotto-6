import { MissionUtils } from "@woowacourse/mission-utils";

class LottoNumberGenerator {
  #RANGE_START = 1;
  #RANGE_END = 45;
  #QUANTITY = 6;

  generate() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      this.#RANGE_START,
      this.#RANGE_END,
      this.#QUANTITY
    );
  }
}

export default LottoNumberGenerator;
