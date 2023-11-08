import Validator from "./utils/Validator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validator.lottoNumCount(numbers);
    Validator.isRedundancy(numbers);
    numbers.forEach((number) => {
      Validator.isNum(number);
      Validator.checkRange(number);
    });
  }

  returnNumbers() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
