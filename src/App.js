import Lotto from "./Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async getInput(message) {
    try {
      const input = await MissionUtils.Console.readLineAsync(message);
      return input;
    } catch (error) {
      throw "[ERROR] 입력을 받는 중 실패하였습니다.";
    }
  }

  async getLottoCnt(money) {
    return ~~(+money / 1000);
  }

  async getUserMoney() {
    const input = await this.getInput("구입금액을 입력해 주세요.");
    if (+input % 1000 !== 0)
      throw new error("[ERROR] 돈은 천원 단위로 입력해주세요");
    return this.getLottoCnt(input);
  }

  async play() {
    const lottoCnt = await this.getUserMoney();
    console.log(lottoCnt);
  }
}

export default App;
