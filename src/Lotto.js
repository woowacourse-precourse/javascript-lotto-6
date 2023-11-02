import { INPUT, ERROR } from "./Constants/Constants.js";
import { Console } from "@woowacourse/mission-utils";
import { Random } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.lotto_count_error);
    }
  }
}

export default Lotto;
