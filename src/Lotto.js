import { ERROR_MESSAGE } from "./constants/errorMessage.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const numberSet = [...new Set(numbers)];

    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.lottoIsExceedCount);
    }

    if (numberSet.length !== numbers.length) {
      throw new Error(ERROR_MESSAGE.lottoIsDuplicated);
    }

    numbers.forEach((number) => {
      if (number > 45 || number < 1) {
        throw new Error(ERROR_MESSAGE.lottoIsExceedNumber);
      }
    });
  }

  // TODO: 추가 기능 구현

  getLotto() {
    this.#numbers = this.#numbers.map((number) => parseInt(number));
    return this.#numbers;
  }
}

export default Lotto;
