import {
  amountType,
  duplicateNum,
  numberCounter,
  numberRange,
} from "./Validation";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    numberCounter(numbers);
    numbers.forEach((v) => amountType(v));
    numbers.forEach((v) => numberRange(v));
    duplicateNum(numbers);
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
