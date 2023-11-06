import { Random } from "@woowacourse/mission-utils";
import { LOTTO_ERROR } from "./constants/ErrorMsg";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    //1. 로또 번호가 6개가 아닌 경우
    if (numbers.length !== 6) {
      throw new Error(LOTTO_ERROR.LOTTO_LENGTH_ERROR);
    }
  }

}

export default Lotto;
