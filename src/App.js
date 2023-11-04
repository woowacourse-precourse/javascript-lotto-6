import { MissionUtils } from "@woowacourse/mission-utils";

import PRINT from "../src/constant/print.js";
import ERROR from "../src/constant/error.js";

class App {
  async askMoney() {
    const money = await MissionUtils.Console.readLineAsync(PRINT.ASK_BUY);
    return parseInt(money);
  }

  moneyTypeCheck(money) {
    if (isNaN(money)) {
      throw new Error(ERROR.NOT_NUMBER);
    }
    if (money % 1000 !== 0) {
      throw new Error(ERROR.NOT_1000N);
    }
  }

  async play() {
    const inputMoney = await this.askMoney();
    this.moneyTypeCheck(inputMoney);
  }
}

export default App;
