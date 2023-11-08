import {
  isValidLottoLength,
  isMadeWithUniqueNumber,
} from '../validator/lottoValidate.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#sortLotto();
  }

  #validate(numbers) {
    isValidLottoLength(numbers.length);
    isMadeWithUniqueNumber(numbers);
  }

  #sortLotto() {
    this.#numbers.sort((a, b) => a - b);
  }

  getNumbers() {
    return this.#numbers;
  }

  toString() {
    const addDelimiter = this.#numbers.join(', ');
    return `[${addDelimiter}]`;
  }

  checkNumberContain(targetNumber) {
    let left = 0;
    let right = this.#numbers.length - 1;
    while (left <= right) {
      const mid = Number.parseInt((left + right) / 2, 10);
      if (targetNumber === this.#numbers[mid]) return true;
      if (targetNumber < this.#numbers[mid]) right = mid - 1;
      if (targetNumber > this.#numbers[mid]) left = mid + 1;
    }
    return false;
  }
}

export default Lotto;
