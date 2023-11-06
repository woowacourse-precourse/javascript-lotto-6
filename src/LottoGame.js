import { MissionUtils } from "@woowacourse/mission-utils";

class LottoGame {
  makeRandomNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

}

export default LottoGame;