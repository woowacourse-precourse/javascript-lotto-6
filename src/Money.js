import { Console } from "@woowacourse/mission-utils";
import GAME_MESSAGES from "./constants/GameMessages.js";
import ERROR_MESSAGES from "./constants/ErrorMessage.js";

class Money {
  async userMoney() {
    const inputMoney = await Console.readLineAsync(GAME_MESSAGES.INPUT_MONEY);

    if (isNaN(inputMoney)) {
      throw new Error(ERROR_MESSAGES.IS_NUMBER);
    }
    if (inputMoney % 1000 !== 0) {
      throw new Error(ERROR_MESSAGES.IS_ONE_THOUSAND_WON);
    }

    return inputMoney;
  }

}

export default Money;
