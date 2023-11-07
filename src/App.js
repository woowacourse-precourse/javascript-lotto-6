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

  async changeMoneyToLottoCnt(money) {
    const lottoCnt = ~~(+money / 1000);

    MissionUtils.Console.print(`${lottoCnt}개를 구매했습니다.`);
    return lottoCnt;
  }

  async getUserMoney() {
    const input = await this.getInput("구입금액을 입력해 주세요.");
    if (+input % 1000 !== 0)
      throw new error("[ERROR] 돈은 천원 단위로 입력해주세요");
    return this.changeMoneyToLottoCnt(input);
  }

  async play() {
    const lottoCnt = await this.getUserMoney();

    for (let i = 0; i < lottoCnt; i++) {
      const lotto = new Lotto();
      lotto.printLottoNum();
    }
  }
}

export default App;
