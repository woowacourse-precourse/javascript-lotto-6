import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "./constants/Messages.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#validate(numbers);
  }

  #validate(numbers) {
    const NUMBER_SET = new Set(numbers);
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.LOTTO_LENGTH_NOT_SIX);
    }
    if (NUMBER_SET.size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.LOTTO_VALUE_DUPLICATED);
    }
    if (numbers.some((number) => typeof number === "string")) {
      throw new Error(ERROR_MESSAGES.LOTTO_INCLUDE_STRING);
    }
  }

  printLottoNumber() {
    MissionUtils.Console.print(
      `[${this.#numbers.sort((a, b) => a - b).join(", ")}]`
    );
  }

  compareLottoNumber(winningNumber, bonusNumber) {
    let correctCount = 0;
    let bonusFlag = false;
    const MATCHING_NUMBER = winningNumber.filter((element) =>
      this.#numbers.includes(element)
    );
    if (MATCHING_NUMBER.length >= 3) {
      correctCount += MATCHING_NUMBER.length;
    }
    if (MATCHING_NUMBER.length === 5 && this.#numbers.includes(bonusNumber)) {
      bonusFlag = true;
    }
    return { correctCount, bonusFlag };
  }
}

export default Lotto;
