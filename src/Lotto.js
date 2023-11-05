import { Console } from "@woowacourse/mission-utils";
import LottoError from "./LottoError.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#sortAscend(numbers);
    this.#numbers = numbers;
    Console.print(this.#numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new LottoError("로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  #sortAscend(numbers){
    numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
