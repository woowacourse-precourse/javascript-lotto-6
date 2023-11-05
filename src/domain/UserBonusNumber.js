import { readUserInput } from "../UI/inputView.js";
import { ERROR } from "../const/Messages.js";

class UserBonusNumber {
  constructor() {
    this.bonusNumber = null;
  }

  async getBonusNumber() {
    const input = await readUserInput();
    this.setBonusNumbers(input);
    return this.bonusNumber;
  }

  #validate(number) {
    if (isNaN(number)) {
      throw new Error(ERROR.ONE_NUMBER);
    }

    if (number < 1 || number > 45) {
      throw new Error(ERROR.NUMBER_RANGE);
    }
  }

  setBonusNumbers(input) {
    const trimmedInput = input.trim();
    const parsedNumber = parseInt(trimmedInput, 10);
    this.#validate(parsedNumber);
    this.bonusNumber = parsedNumber;
  }
}

export default UserBonusNumber;
