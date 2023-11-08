import { Console } from "@woowacourse/mission-utils";
import GAME_MESSAGES from "./constants/GameMessages.js";
import ERROR_MESSAGES from "./constants/ErrorMessage.js";

class Money {
  async userMoney() {
    let validInput = false;
    let inputMoney;

    while (!validInput) {
      try {
        inputMoney = await Console.readLineAsync(GAME_MESSAGES.INPUT_MONEY);
        this.validateInputMoney(inputMoney);
        validInput = true;
      } catch (error) {
        Console.print(`${error.message}`);
      }
    }

    return inputMoney;
  }

  validateInputMoney(inputMoney) {
    const moneyValue = parseInt(inputMoney, 10);

    if (isNaN(moneyValue)) {
      throw new Error(ERROR_MESSAGES.IS_NUMBER);
    }
    if (moneyValue % 1000 !== 0) {
      throw new Error(ERROR_MESSAGES.IS_ONE_THOUSAND_WON);
    }
    if (moneyValue === 0) {
      throw new Error(ERROR_MESSAGES.IS_ZERO);
    }
  }
}

export default Money;
