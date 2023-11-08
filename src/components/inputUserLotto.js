import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME, ERROR } from "../pages/text.js";
import InputValidator from "../utils/inputValids.js";

export default class inputUserLotto {
  constructor(count, numbers, bonus) {
    this.count = count;
    this.numbers = numbers;
    this.bonus = bonus;
    this.inputValidator = new InputValidator();
  }

  async getUserCostToLotto() {
    const userInput = await MissionUtils.Console.readLineAsync(GAME.input_cost);
    this.inputValidator.validateCost(userInput);
    this.count = userInput / 1000;
    return userInput / 1000;
  }

  async getUserNumber(TYPE) {
    const userInput = await MissionUtils.Console.readLineAsync(
      TYPE === "BONUS" ? GAME.input_bonus : GAME.input_number
    );

    if (TYPE === "BONUS") {
      this.bonus = this.inputValidator.validateNumber(userInput, TYPE);
      if (this.numbers.includes(this.bonus))
        throw new Error(ERROR.input_lotto_bonus_in_numbers);
    } else {
      this.numbers = this.inputValidator.validateNumber(userInput, TYPE);
    }
  }
}
