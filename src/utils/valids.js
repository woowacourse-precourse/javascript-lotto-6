import { ERROR } from "../pages/text.js";

export default class InputValidator {
  validateCost(userInput) {
    const inputAsNumber = parseInt(userInput, 10);
    if (userInput === Number.isNaN(userInput))
      throw new Error(Error.input_double_num);

    if (inputAsNumber % 1000 !== 0) throw new Error(ERROR.input_1000);
  }

  validateNumber(userInput) {
    console.log(userInput);

    const NUMBER_STRING = userInput
      .split(",")
      .map((numStr) => parseInt(numStr, 10));

    if (!NUMBER_STRING.every((number) => 1 <= number && number <= 45)) {
      throw new Error(ERROR.INPUT_1_45);
    }

    if (NUMBER_STRING.length !== 6) throw new Error(ERROR.input_lotto_num);

    if (new Set(NUMBER_STRING).size !== NUMBER_STRING.length)
      throw new Error(ERROR.input_double_num);

    return NUMBER_STRING;
  }
}
