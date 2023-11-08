import { ERROR_MESSAGE } from "./constant/message.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;

    this.#validate(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw ERROR_MESSAGE.NUMBER_LENGTH;
    }

    if (numbers.length !== new Set(numbers).size)
      throw `${ERROR_MESSAGE.NUMBER_DUPLICATE}`;

    numbers.forEach((element) => {
      if (isNaN(element)) throw new Error(`${ERROR_MESSAGE.NUMBER_TYPE}`);
      if (element > 45 || element < 0) throw `${ERROR_MESSAGE.NUMBER_RANGE}`;
    });

    return true;
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
