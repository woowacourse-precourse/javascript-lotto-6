import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";

class App {
  async play() {}

  static getRandomSixNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  static getLottoWithMoney(money) {
    const NUMBER_OF_LOTTO = Math.floor(money / 1000);
    return Array.from(
      { length: NUMBER_OF_LOTTO },
      () => new Lotto(this.getRandomSixNumbers())
    );
  }
}

export default App;
