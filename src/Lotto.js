import { ERROR_MESSAGE } from "./constants/errors.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#validate(numbers);
    this.#isNumbersUnique(numbers); // 중복 번호 검증
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  #isNumbersUnique(numbers) {
    let checkDuplicateSet = new Set();
    for (const number of numbers) {
      if (checkDuplicateSet.has(number)) {
        throw new Error(ERROR_MESSAGE.isNumberDuplicated);
      }
      checkDuplicateSet.add(number);
    }
  }
}

export default Lotto;
