import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "../../constants/gameMessage.js";
import bonusIsValid from "../../utils/bonusIsValid.js";

class BonusInput {
  async userInput() {
    return await Console.readLineAsync(`${GAME_MESSAGE.bonus_number}`);
  }

  async number(winningNumbers) {
    let number;
    while (true) {
      number = await this.userInput();
      if (bonusIsValid(number, winningNumbers)) {
        break;
      }
      Console.print(GAME_MESSAGE.invalid_bonus);
    }
    return number;
  }
}

export default BonusInput;
