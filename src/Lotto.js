import Validator from './validator/Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sort(numbers);
  }

  #validate(numbers) {
    Validator.length(numbers);
    Validator.range(numbers);
    Validator.duplication(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  #sort(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  includes(number) {
    return this.#numbers.includes(number);
  }

  filterSameNumber(numbers) {
    const sameNumbers = numbers.filter((number) =>
      this.#numbers.includes(number)
    );

    return sameNumbers.length;
  }

  countSameNumber(lotto) {
    return lotto.filterSameNumber(this.#numbers);
  }
}

export default Lotto;
