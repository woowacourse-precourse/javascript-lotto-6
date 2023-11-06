import { MissionUtils } from "@woowacourse/mission-utils";

class LottoGame {
  makeRandomNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  sortAscending(numbers) {
    return numbers.sort((a, b) => a - b);
  }

}

export default LottoGame;