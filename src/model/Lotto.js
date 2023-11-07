import { ERROR_MESSAGE } from "../constatns/message.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.WINNING_NUM_COUNT);
    }
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error(ERROR_MESSAGE.NUM_RANGE);
      }
    })
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
