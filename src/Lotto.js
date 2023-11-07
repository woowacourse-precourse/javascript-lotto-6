import Validate from './Validate.js';

class Lotto {
  // winning lotto
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validate.isItLengthOfSix(numbers);
    numbers.forEach((number) => {
      Validate.isItNumber(number);
      Validate.isItInRangeOfNumber(number);
    });
    Validate.cannotBeDuplicated(numbers);
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }

  computeMatchWithLotto(lottos) {
    let matches = 0;
    this.#numbers.forEach((num) => {
      if (lottos.includes(Number(num))) {
        matches += 1;
      }
    });
    return matches;
  }
}

export default Lotto;
