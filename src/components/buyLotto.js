import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME, ERROR } from "../pages/text.js";

export default class BuyLotto {
  constructor(count, numbers) {
    this.count = count;
    this.numbers = numbers;
  }

  async getUserCostToLotto() {
    const userInput = await MissionUtils.Console.readLineAsync(GAME.input_cost);
    this.#validateCost(userInput);
    this.count = userInput / 1000;
    return userInput / 1000;
  }

  async getUserNumber() {
    const userInput = await MissionUtils.Console.readLineAsync(
      GAME.input_number
    );
    this.#validateNumber(userInput);
    return userInput;
  }

  #validateCost(userInput) {
    const inputAsNumber = parseInt(userInput, 10);
    if (inputAsNumber % 1000 !== 0) throw new Error(ERROR.input_1000);
  }

  #validateNumber(userInput) {
    console.log(userInput);

    const NUMBER_STRING = userInput
      .split(",")
      .map((numStr) => parseInt(numStr, 10));

    if (!NUMBER_STRING.every((number) => 1 <= number && number <= 45)) {
      throw new Error(ERROR.INPUT_1_45);
    }

    console.log(NUMBER_STRING);
    if (NUMBER_STRING.length !== 6) throw new Error(ERROR.input_lotto_num);

    if (new Set(NUMBER_STRING).size !== NUMBER_STRING.length)
      throw new Error(ERROR.input_double);

    return NUMBER_STRING;
  }
}
