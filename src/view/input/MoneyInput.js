import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "../../constants/gameMessage.js";
import NUMBERS from "../../constants/numbers.js";
import moneyIsValid from "../../utils/moneyIsValid.js";

class MoneyInput {
  async #userInput() {
    return await Console.readLineAsync(`${GAME_MESSAGE.buy_money}`);
  }

  async buyMoney() {
    let valid, money;
    do {
      money = await this.#userInput();
      try {
        valid = moneyIsValid(money);
      } catch (error) {
        Console.print(error.message);
        valid = false;
      }
    } while (!valid);
    return money / NUMBERS.purchase_money;
  }
}

export default MoneyInput;
