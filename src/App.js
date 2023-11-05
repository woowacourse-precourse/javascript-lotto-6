import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {}

  static getRandomSixNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

export default App;
