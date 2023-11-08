import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME, ERROR } from "../pages/text.js";
import InputValidator from "../utils/valids.js";

export default class BuyLotto {
  constructor(count, numbers) {
    this.count = count;
    this.numbers = numbers;
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
    return this.inputValidator.validateNumber(userInput, TYPE);
  }
}
