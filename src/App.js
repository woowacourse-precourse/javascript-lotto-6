import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";

class App {
  constructor() {
    this.gameStatus = true;
  }

  async play() {
    while (this.gameStatus) {
      const userMoney = await MissionUtils.Console.readLineAsync(
        "구입금액을 입력해 주세요."
      );
      await this.checkUserMoneyPossible(userMoney);
    }
  }
  async checkUserMoneyPossible(userMoney) {
    if (isNaN(userMoney) || userMoney % 1000 !== 0 || userMoney < 1000) {
      throw new Error("[ERROR] 1000단위의 숫자를 입력해주세요");
    }
  }
}

export default App;
