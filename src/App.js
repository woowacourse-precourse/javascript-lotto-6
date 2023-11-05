import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";

class App {
  async play() {}

  static getRandomSixNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
  }

  static getLottoWithMoney(money) {
    const LOTTO_PIRCE = 1000;
    const NUMBER_OF_LOTTO = Math.floor(money / LOTTO_PIRCE);
    return Array.from(
      { length: NUMBER_OF_LOTTO },
      () => new Lotto(this.getRandomSixNumbers())
    );
  }
}

export default App;
