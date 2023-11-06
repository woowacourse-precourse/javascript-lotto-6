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
    // 로또 번호는 외부에서 접근할 수 없는 필드, 내부에서 비교해야 함!
    // 당첨 번호와 현재 로또 번호 비교하기
    // 일치하는 숫자가 3개 이상이면 유의미
    // 보너스 번호는 5개가 일치하는 경우에만 사용됨
  }
}

export default Lotto;
