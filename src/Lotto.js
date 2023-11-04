import ERROR from './constants/error.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.lotto.numberOfLottoNumbers);
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
