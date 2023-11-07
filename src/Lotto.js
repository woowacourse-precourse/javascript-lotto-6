import { Console } from "@woowacourse/mission-utils";
import { formatArrayToString } from "./libs/formatter.js";
import {
  isArrayLengthSix,
  hasDuplicate,
  isNumberInRange,
  isInputEmpty,
  isInputNumeric,
} from "./libs/validate.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    isArrayLengthSix(numbers);
    hasDuplicate(numbers);

    numbers.forEach((number) => {
      isInputEmpty(number);
      isInputNumeric(number);
      isNumberInRange(number);
    });
  }

  printNumbers() {
    this.#numbers.sort((a, b) => a - b);

    const formattedNumbers = formatArrayToString(this.#numbers);
    Console.print(formattedNumbers);
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
