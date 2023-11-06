import { LOTTO_LENGTH } from "./constant/Constant";
import errorMessage from "./constant/ErrorMessage";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_LENGTH) {
      errorMessage.lengthError();
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
