import { Console } from "@woowacourse/mission-utils";
import { LOTTO } from "./constants/lotto.js";
import { ERROR_MESSAGE } from "./constants/message.js";
import { Validator } from "./utils/validator.js";

class Lotto {
  numbers;

  constructor(numbers) {
    this.#validate(numbers.toString());
    this.numbers = numbers;
  }

  #validate(numbers) {
    const numberArray = numbers.split(",").map(Number);
    Console.print(numberArray);

    if (!this.isLottoFormat(numberArray)) {
      throw new Error(ERROR_MESSAGE.formatError);
    }
    if (!this.isLengthValid(numberArray)) {
      throw new Error(ERROR_MESSAGE.lengthError);
    }
    if (this.isDuplicates(numberArray)) {
      throw new Error(ERROR_MESSAGE.duplicateError);
    }
  }

  isLengthValid(numbers) {
    return numbers.length === LOTTO.length;
  }

  isDuplicates(numbers) {
    const numberSet = new Set(numbers);
    return numbers.length !== numberSet.size;
  }

  isLottoFormat(numbers) {
    return numbers.every(
      (number) =>
        Validator.isNumberInRange(number) && Validator.isNumber(number)
    );
  }
}

export default Lotto;
