import { ERROR_MESSAGE } from "./common/OutputMessage";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) throw new Error(ERROR_MESSAGE.NUMBER_COUNT);
    if (numbers.length !== new Set(numbers).length) throw new Error(ERROR_MESSAGE.NUMBER_DUPLICATE);
    if ((numbers<46 && numbers > 0) !== true) throw new Error(ERROR_MESSAGE.NUMBER_RANGE);
    if (typeof numbers !== number) throw new Error(ERROR_MESSAGE.NUMBER_TYPE);
  }
  // TODO: 추가 기능 구현
}

export default Lotto;
