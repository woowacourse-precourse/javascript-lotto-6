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
  compareLottos(lotto, bonusNumber) {
    let sameCnt = 0;
    let bonusCnt = 0;

    for (let i = 0; i < lotto.length; i++) {
      if (this.#numbers.includes(lotto[i])) {
        sameCnt += 1;
      } else if (bonusNumber === lotto[i]) {
        bonusCnt += 1;
      }
    }

    return [sameCnt, bonusCnt];
  }
}

export default Lotto;
