import { Console } from "@woowacourse/mission-utils";
import GAME_MESSAGE from "../../constants/gameMessage.js";
import BonusValid from "../../utils/BonusValid.js";

class BonusInput {
  constructor() {
    this.bonusValid = new BonusValid();
  }
  async userInput() {
    return await Console.readLineAsync(`${GAME_MESSAGE.bonus_number}`);
  }
  async bonusNumber() {
    let valid, number;
    do {
      number = await this.userInput();
      try {
        valid = this.bonusValid.BonusIsValid(number);
      } catch (error) {
        Console.print(error.message);
        valid = false;
      }
    } while (!valid);
    return parseInt(number, 10);
  }
}

export default BonusInput;
