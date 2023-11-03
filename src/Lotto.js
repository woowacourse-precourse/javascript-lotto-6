import LottoValidate from "./validate/LottoValidate.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    new LottoValidate().randomNumberValidate(numbers);
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
