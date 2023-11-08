import { ERROR } from "../pages/text.js";

export default class InputValidator {
  validateCost(userInput) {
    if (isNaN(userInput)) {
      throw new Error(ERROR.input_double_num);
    }
    const inputAsNumber = parseInt(userInput, 10);
    if (inputAsNumber < 1000) throw new Error(ERROR.input_minimum);
    if (inputAsNumber % 1000 !== 0) throw new Error(ERROR.input_1000);
  }

  validateNumber(userInput, TYPE) {
    const NUMBER_STRING = userInput.split(",").map((numStr) => {
      if (!isNaN(numStr)) {
        return parseInt(numStr, 10);
      } else {
        throw new Error(ERROR.input_1_45);
      }
    });

    //console.log(NUMBER_STRING);

    if (!NUMBER_STRING.every((number) => number >= 1 && number <= 45)) {
      const ERROR = { input_1_45: "입력값은 1과 45 사이의 수여야 합니다." };
      throw new Error(ERROR.input_1_45);
    }

    // if (NUMBER_STRING.forEach((number) => number < 1 || number > 45)) {
    //   throw new Error(ERROR.input_1_45);
    // }

    // NUMBER_STRING.map((number) => {
    //   {
    //     console.log(Number(number));
    //     if (number < 1 || number > 45) {
    //       throw new Error(ERROR.input_1_45);
    //     }
    //   }
    // });

    if (new Set(NUMBER_STRING).size !== NUMBER_STRING.length)
      throw new Error(ERROR.input_double_num);

    if (TYPE === "BONUS") {
      this.checkBonus(NUMBER_STRING);
    } else {
      this.checkNumbers(NUMBER_STRING);
    }

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
