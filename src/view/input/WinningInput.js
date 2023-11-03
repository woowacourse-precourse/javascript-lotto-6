import { Console } from "@woowacourse/mission-utils";
import GAME_MESSAGE from "../../constants/gameMessage.js";
import WinningValid from "../../utils/WinningValid.js";

class WinningInput {
  constructor() {
    this.winningValid = new WinningValid();
  }
  async userInput() {
    const input = await Console.readLineAsync(`${GAME_MESSAGE.winning_number}`); 
    return input.split(',').map(str => parseInt(str, 10));
  }

  async winningNumbers() {
    let valid, numbers;
    do {
      numbers = await this.userInput();
      Console.print("");
      valid = this.winningValid.winningIsValid(numbers);
    } while (!valid);
    return numbers;
  }
}

export default WinningInput;
