import { MissionUtils } from "@woowacourse/mission-utils";
import { model } from "./Model.js";
import { errorComments } from "./Comment.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#validateDuplicate(numbers);
    this.#validateRange(numbers);
    this.#numbers = numbers;
    model.lottoNumbers.push(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(errorComments.lotto[0]);
    }
  }

  #validateDuplicate(numbers) {
    for (let i = 0; i < numbers.length-1; i++) {
      if (numbers[i] === numbers[i+1]) {
        throw new Error(errorComments.lotto[1])
      }
    }
  }
  #validateRange(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      this.#validateRangeEachNumber(numbers[i]);
    }
  }

  #validateRangeEachNumber(number) {
    if (number > 45 || number < 1) {
      throw new Error(errorComments.lotto[2])
    }
  }

  numberSort() {
    this.#numbers.sort((a, b) => a - b);
    return this.#numbers;
  }

  printNumbers() {
    this.numberSort();

    MissionUtils.Console.print(`[${this.#numbers.join(', ')}]`);
  }
}

export default Lotto;
