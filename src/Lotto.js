import { MissionUtils } from "@woowacourse/mission-utils";

import PRINT from "../src/constant/print.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  getLottoNumber() {
    return this.#numbers;
  }

  getCorrectNumber(winNumber) {
    let correct = 0;
    winNumber.forEach((win) => {
      if (this.#numbers.includes(parseInt(win))) {
        correct++;
      }
    });
    return correct;
  }
}

export default Lotto;
