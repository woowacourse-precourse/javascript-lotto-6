import { Console } from "@woowacourse/mission-utils";
import {
  checkLottoNumbersLength,
  hasDuplicate,
  isNumberInRange,
} from "./libs/validate.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    checkLottoNumbersLength(numbers);
    hasDuplicate(numbers);
    isNumberInRange(numbers);
  }

  printLotto() {
    this.#numbers.sort((a, b) => a - b);
    Console.print(this.#numbers);
  }
}

export default Lotto;
