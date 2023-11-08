import { Console } from "@woowacourse/mission-utils";
import GAME_MESSAGES from "./constants/GameMessages.js";
import ERROR_MESSAGES from "./constants/ErrorMessage.js";

class Money {
  async userMoney() {
    const inputMoney = await Console.readLineAsync(GAME_MESSAGES.INPUT_MONEY);
    if (isNaN(parseInt(inputMoney, 10))) {
      throw new Error(ERROR_MESSAGES.IS_NUMBER);
    }
    if (parseInt(inputMoney, 10) % 1000 !== 0) {
      throw new Error(ERROR_MESSAGES.IS_ONE_THOUSAND_WON);
    }
    if (parseInt(inputMoney, 10) / 1000 === 0) {
      throw new Error(ERROR_MESSAGES.IS_ZERO);
    }
    return inputMoney;
  }
}

export default Money;
