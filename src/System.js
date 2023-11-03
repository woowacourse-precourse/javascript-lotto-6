import { Console, Random } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, INPUT_MESSAGE } from "./constants/constants";

class System {
  async getMoney() {
    let money = 0;
    while (true) {
      try {
        const inputMoney = await Console.readLineAsync(INPUT_MESSAGE.money);

        if (Object.is(Number(inputMoney), NaN)) {
          throw new Error(ERROR_MESSAGE.moneyError);
        }
        money = Number(inputMoney);
        if (money % 1000 !== 0 || money < 1000) {
          throw new Error("[ERROR] 1,000원 단위로 입력해 주세요.");
        }

        break;
      } catch (error) {
        await Console.print(error.message);
      }
    }

    return money;
  }
}

export default System;
