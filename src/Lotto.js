import { Random } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "./constants/messages.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.USE_SIX_NUMBERS);
    } else if (new Set(numbers).size !== 6) {
      throw new Error(ERROR_MESSAGES.CANT_USE_SAME_NUMBER);
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
