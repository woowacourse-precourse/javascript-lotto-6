import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME, ERROR } from "../pages/text.js";
import InputValidator from "../utils/inputValids.js";
import Lotto from "../Lotto.js";

export default class inputUserLotto {
  constructor(count, numbers, bonus) {
    this.count = count;
    this.numbers = numbers || [];
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

    const NUMBER_STRING = userInput
      .split(",")
      .map((numStr) => parseInt(numStr, 10));

    if (TYPE === "BONUS") {
      this.bonus = this.inputValidator.validateNumber(NUMBER_STRING, TYPE);
      if (this.numbers.includes(this.bonus))
        throw new Error(ERROR.input_lotto_bonus_in_numbers);
    } else {
      let lotto = new Lotto(NUMBER_STRING);
      this.numbers = this.inputValidator.validateNumber(NUMBER_STRING, TYPE);
    }
  }
}
