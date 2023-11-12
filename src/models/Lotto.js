import { sortNumbers } from '../utils/numberUtils.js';
import { checkListSameValue } from '../utils/listUtils.js';
import throwError from '../utils/throwError.js';
import ERROR_MESSAGES from '../constants/errorMessage.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = sortNumbers(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    checkListSameValue(numbers) && throwError(ERROR_MESSAGES.isSameLottoNumber);
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
