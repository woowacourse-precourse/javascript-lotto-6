import { Console } from "@woowacourse/mission-utils";
import GAME_MESSAGE from "../../constants/gameMessage.js";
import MoneyValid from "../../utils/MoneyValid.js";

class MoneyInput {
  constructor() {
    this.moneyValid = new MoneyValid();
  }
  async userInput() {
    return await Console.readLineAsync(`${GAME_MESSAGE.buy_money}`);
  }
  async buyMoney() {
    let valid, money;
    do {
      money = await this.userInput();
      Console.print("");
      valid = this.moneyValid.moneyIsValid(money);
    } while (!valid);
    return money / 1000;
  }
}

export default MoneyInput;
