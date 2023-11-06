import { LOTTO_RANGE, ERROR_MESSAGE } from "./constants/constants";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.lottoCount);
    }
  }

  // TODO: 추가 기능 구현

}

export default Lotto;
