import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "../../constants/gameMessage.js";
import bonusIsValid from "../../utils/bonusIsValid.js";

class BonusInput {
  async #userInput() {
    return await Console.readLineAsync(`${GAME_MESSAGE.bonus_number}`);
  }
  
  async number(winningNumbers) {
    let valid, number;
    do {
      number = await this.#userInput();
      try {
        valid = bonusIsValid(number, winningNumbers);
      } catch (error) {
        Console.print(error.message);
        valid = false;
      }
    } while (!valid);
    return number;
  }
}

export default BonusInput;
