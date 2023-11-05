import { ERROR } from "../constants/messages";
import { LOTTO } from '../constants/values';
import { Console } from "@woowacourse/mission-utils";

class Lotto { //예외처리 및 값 저장
  #numbers;
  pass;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#validate();
  }

  #validate() {
    try {
      this.pass = true;
      if (this.#numbers.length < LOTTO.LEN) throw new Error(ERROR.LOTTO_LENGTH);
      if (this.#numbers.filter(v => v < LOTTO.MIN || v > LOTTO.MAX).length > 0) throw new Error(ERROR.LOTTO_RANGE);
      if (this.#numbers.length !== new Set(this.#numbers).size) throw new Error(ERROR.LOTTO_DUPILICATE);
      if (this.#numbers.filter(v => isNaN(v)).length > 0) throw new Error(ERROR.LOTTO_DIVISION);
    }
    catch (error) {
      this.pass = false;
      Console.print(error.message);
    }
  }
}

export default Lotto;
