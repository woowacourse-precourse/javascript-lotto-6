import LottoError from "../Error/LottoError.js";
import LOTTO_SETTINGS from "../config/gameSetting.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new LottoError(
        `로또 번호는 ${LOTTO_SETTINGS.NUMBER_PER_TICKET}개여야 합니다.`
      );
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
