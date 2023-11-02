/**
 * 1. numbers의 #을 변경할 수 없다.
 * 2. 필드를 추가할 수 없다.
 */
import { ERROR_MESSAGE } from "./constants/error.js";

import OutputView from "./View/OutputView.js";
import LottoValidator from "./Validator/lottoValidator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;

    this.getNumbers();
  }

  #validate(numbers) {
    if (!LottoValidator.isLengthSix(numbers)) {
      throw new Error(ERROR_MESSAGE.notSixLength);
    }
    if (!LottoValidator.isRepeat(numbers)) {
      throw new Error(ERROR_MESSAGE.isRepeat);
    }
  }

  // 2-2. 구매한 로또 번호를 출력한다.
  getNumbers() {
    OutputView.printLottoNumbers(this.#numbers);
  }

  calculateMatchCount(luckyNumbers, bonusNumber) {
    const cnt = this.#numbers.filter((number) => luckyNumbers.includes(number)).length;
    const bonus = this.#numbers.includes(bonusNumber);

    const matchResult = {
      cnt,
      bonus
    };

    return matchResult;
  }
}

export default Lotto;
