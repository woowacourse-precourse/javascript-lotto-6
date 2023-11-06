import { MissionUtils } from "@woowacourse/mission-utils";
import { ErrorMessage } from "./Message";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ErrorMessage.INVALID_LOTTO_LENGTH);
    }

    if (!numbers.every((num) => !/\D/.test(num))) {
      throw new Error(ErrorMessage.INVALID_LOTTO_TYPE);
    }

    if (numbers.every((num) => !(Number(num) >= 1) && !(Number(num) <= 45))) {
      throw new Error(ErrorMessage.INVALID_LOTTO_NUMBER);
    }

    const isDuplicate = new Set(numbers).size;
    if (isDuplicate !== 6) {
      throw new Error(ErrorMessage.DUPLICATE_LOTTO_NUMBER);
    }
  }

  getLottoNumber() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
