import { ERROR_MSG } from "./constants/constants.js";
import { validateLottoResult } from "./utility/validation.js";

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

    // TODO: 추가 기능 구현
    numbers.map((number) => {
      validateLottoResult(number, numbers);
    });
  }
}

export default Lotto;
