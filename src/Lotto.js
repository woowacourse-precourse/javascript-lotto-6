/**
 * 1. numbers의 #을 변경할 수 없다.
 * 2. 필드를 추가할 수 없다.
 */
import { ERROR_MESSAGE } from "./constants/error.js";

import OutputView from "./View/OutputView.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;

    this.getNumbers();
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.notSixLength);
    }
  }

  // 2-2. 구매한 로또 번호를 출력한다.
  getNumbers() {
    OutputView.printLottoNumbers(this.#numbers);
    return this.#numbers;
  }
}

export default Lotto;
