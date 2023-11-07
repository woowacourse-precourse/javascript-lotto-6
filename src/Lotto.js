import OPTION from './constants/option.js';
import InputError from './error/InputError.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== OPTION.lottoLength) {
      throw new InputError(`로또 번호는 ${OPTION.lottoLength}개여야 합니다.`);
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new InputError('로또 번호는 중복되지 않아야 합니다.');
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
