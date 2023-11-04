import ERROR from './constants/error.js';
import LOTTO from './constants/lotto.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO.size) {
      throw new Error(ERROR.lotto.numberOfLottoNumbers);
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
