import { Console } from "@woowacourse/mission-utils";
import {
  isArrLengthSix,
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
    this.#validateArr(numbers);
    this.#validateElement(numbers);
  }

  #validateArr(numbers) {
    isArrLengthSix(numbers);
    hasDuplicate(numbers);
  }

  #validateElement(numbers) {
    numbers.forEach((number) => {
      isInputEmpty(number);
      isInputNumeric(number);
      isNumberInRange(number);
    });
  }

  printNumbers() {
    this.#numbers.sort((a, b) => a - b);
    Console.print(this.#numbers);
  }
}

export default Lotto;
