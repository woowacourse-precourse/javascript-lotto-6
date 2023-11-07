import { ERROR } from './ErrorText.js';

export default class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.LENGTH);
    }
    const uniqueNumbers = [...new Set(numbers)]; // 중복 제거
    if (uniqueNumbers.length !== 6) {
      throw new Error(ERROR.DUPLICATION);
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}

