import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  #money;

  static isPositiveInteger(input) {
    const regex = /^\d+$/;
    return regex.test(input);
  }

  static validateMoney(money) {
    if (!App.isPositiveInteger(money)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    if (Number(money) % 1000 !== 0) {
      throw new Error(
        "[ERROR] 구입금액은 1,000원 단위이며 1,000원으로 나누어 떨어져야 합니다.",
      );
    }
  }

  async getMoneyInput() {
    const money = await MissionUtils.Console.readLineAsync(
      "구입금액을 입력해 주세요.",
    );
    App.validateMoney(money);
    this.money = money;
  }

  async play() {
    await this.getMoneyInput();
  }
}

export default App;
