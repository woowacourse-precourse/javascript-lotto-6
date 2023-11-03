import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  #money;

  async getMoneyInput() {
    const money = await MissionUtils.Console.readLineAsync(
      "구입금액을 입력해 주세요.",
    );
    this.money = money;
  }

  async play() {
    await this.getMoneyInput();
  }
}

export default App;
