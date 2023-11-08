import { ERROR } from "../pages/text.js";

export default class InputValidator {
  validateCost(userInput) {
    const inputAsNumber = parseInt(userInput, 10);
    if (userInput === Number.isNaN(userInput))
      throw new Error(ERROR.input_double_num);

    if (inputAsNumber < 1000) throw new Error(ERROR.input_minimum);

    if (inputAsNumber % 1000 !== 0) throw new Error(ERROR.input_1000);
  }

  validateNumber(NUMBER_STRING, TYPE) {
    console.log(NUMBER_STRING);
    if (!NUMBER_STRING.every((number) => number < 1 || number > 45)) {
      throw new Error(ERROR.input_1_45);
    }

    if (new Set(NUMBER_STRING).size !== NUMBER_STRING.length)
      throw new Error(ERROR.input_double_num);

    this.check(
      NUMBER_STRING,
      TYPE === "BONUS" ? 1 : 6,
      ERROR.input_lotto_bonus
    );

    return NUMBER_STRING;
  }

  checkNumbers(NUMBER_STRING) {
    this.check(NUMBER_STRING, 6, ERROR.input_lotto_num);
  }

  checkBonus(NUMBER_STRING) {
    this.check(NUMBER_STRING, 1, ERROR.input_lotto_bonus);
  }

  check(NUMBER_STRING, expectedLength, error) {
    if (NUMBER_STRING.length !== expectedLength) {
      throw new Error(error);
    }
  }
}
