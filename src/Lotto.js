import { ERROR_MESSAGE } from "./common/outputMessage.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) throw new Error(`${ERROR_MESSAGE.NUMBER_COUNT}`);
    numbers.forEach(e => {
      if (isNaN(e)) throw new Error(`${ERROR_MESSAGE.NUMBER_TYPE}`);
      if (e > 46 || e < 0) throw new Error(`${ERROR_MESSAGE.NUMBER_RANGE}`);
    });
    if (numbers.length !== new Set(numbers).size) throw new Error(`${ERROR_MESSAGE.NUMBER_DUPLICATE}`);
  }
  // TODO: 추가 기능 구현
}

export default Lotto
