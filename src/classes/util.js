import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";
import Validation from "./validation.js";

const Console = MissionUtils.Console;

class Util {
  static async userMoney() {
    const userMoney = await Console.readLineAsync("구입 금액을 입력해주세요.");
    return userMoney;
  }

  static async validateUserMoney() {
    while (true) {
      try {
        const money = await Util.userMoney();
        Validation.userMoney(money);
        return money;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default Util;
