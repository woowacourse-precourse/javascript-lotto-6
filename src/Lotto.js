import MESSAGES from "./constants/Messages.js";
import { LOTTO } from "./constants/Standard.js";
import { isOnlyNumber, isInRangeNumber } from "./utils/Validation.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO.LENGTH) {
      throw new Error(MESSAGES.ERROR.INVAILD_LOTTO_LENGTH);
    }
    if (!isOnlyNumber(numbers.join(""))) {
      throw new Error(MESSAGES.ERROR.PLEASE_ONLY_NUMBER);
    }
    if (!isInRangeNumber(numbers)) {
      throw new Error(MESSAGES.ERROR.INVAILD_LOTTO_NUMBER);
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(MESSAGES.ERROR.DUPLICATE_LOTTO_NUMBER);
    }
    return true;
  }

  checkSameNumber(winningNumbers, bonusNumber) {
    const correct =
      this.#numbers.length +
      winningNumbers.length -
      new Set([...this.#numbers, ...winningNumbers]).size;

    if (correct === 5) {
      if (this.#numbers.includes(bonusNumber)) {
        return 5.5;
      }
    }

    return correct;
  }
}

export default Lotto;
