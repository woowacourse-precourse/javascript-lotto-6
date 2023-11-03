import { Console } from "@woowacourse/mission-utils";
import GAME_MESSAGE from "../../constants/gameMessage.js";
import WinningValid from "../../utils/WinningValid.js";

class WinningInput {
  constructor() {
    this.winningValid = new WinningValid();
  }
  async userInput() {
    const input = await Console.readLineAsync(`${GAME_MESSAGE.winning_number}`);
    return input.split(",").map((str) => parseFloat(str));
  }

  async winningNumbers() {
    let valid, numbers;
    do {
      numbers = await this.userInput();
      try {
        valid = this.winningValid.winningIsValid(numbers);
      } catch (error) {
        Console.print(error.message);
        valid = false;
      }
    } while (!valid);
    return numbers;
  }
}

export default WinningInput;
