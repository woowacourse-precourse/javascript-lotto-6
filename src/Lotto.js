import { checkHasDuplicate } from './util/validate/checkHasDuplicate.js';
import { checkLottoIsEmptyOrZero } from './util/validate/checkIsEmpty.js';
import { checkLottoIsNaN } from './util/validate/checkIsNaN.js';
import { checkLottoIsOutOfRange } from './util/validate/checkIsNotInRange.js';
import { checkLottoIsInteger } from './util/validate/checkisInteger.js';

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
    checkLottoIsNaN(numbers);
    checkLottoIsEmptyOrZero(numbers);
    checkLottoIsOutOfRange(numbers);
    checkLottoIsInteger(numbers);
    checkHasDuplicate(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
  // TODO: 추가 기능 구현
}

export default Lotto;
