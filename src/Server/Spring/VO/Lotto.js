/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import CONSTANTS from '../../../Util/Constants.js';
import { ERROR_MESSAGE } from '../../../Util/Message.js';

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
    this.#validateNumberRange(numbers);
  }

  #validateNumberRange(numbers) {
    const filterNumbers = numbers.filter(
      (lottoNumber) => CONSTANTS.lottoMin <= lottoNumber && lottoNumber <= CONSTANTS.lottoMax,
    );
    if (filterNumbers.length !== CONSTANTS.lottoCount) throw new Error(ERROR_MESSAGE.isNotInRange);
  }

  get numbers() {
    return this.#numbers;
  }
  // TODO: 추가 기능 구현
}

export default Lotto;
