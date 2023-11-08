import LOTTO from './constants/AboutLotto.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    this.#validateString(numbers);
    this.#validateMinMax(numbers);
    this.#validateOverlap(numbers);
  }

  #validateOverlap(numbers) {
    if ([...new Set(numbers)].length !== 6) {
      throw new Error('[ERROR] 로또 번호에 중복된 숫자가 있을 수 없습니다.');
    }
  }

  #validateString(numbers) {
    if (isNaN(numbers.join(''))) {
      throw new Error('[ERROR] 로또 번호에 문자가 있을 수 없습니다.');
    }
  }

  #validateMinMax(numbers) {
    if (
      !numbers.every(
        (number) => number >= LOTTO.MIN_NUMBER && number <= LOTTO.MAX_NUMBER
      )
    ) {
      throw new Error('[ERROR] 로또 번호는 1이상 45이하의 정수입니다..');
    }
  }

  // TODO: 추가 기능 구현
  getLotto() {
    return this.#numbers;
  }
}

export default Lotto;
