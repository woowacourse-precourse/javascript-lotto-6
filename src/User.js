import * as MissionUtils from "@woowacourse/mission-utils";
import { LOTTO_PRICE } from "./Constants.js";
import { INPUT_MONEY_MESSAGE } from "./Constants.js";
import { INPUT_MONEY_ERROR_MESSAGE } from "./Constants.js";

class User {
  constructor() {
    this.#inputMoney();
  }

  async #inputMoney() {
    await MissionUtils.Console.print(INPUT_MONEY_MESSAGE);
    const INPUT_MONEY = await MissionUtils.Console.readLineAsync("");
    const money = Number(INPUT_MONEY);

    this.#validate(money);

    return money;
  }

  #validate(money) {
    if (money % LOTTO_PRICE !== 0 || money < 0) {
      throw new Error(INPUT_MONEY_ERROR_MESSAGE);
    }
  }
}

export default User;
