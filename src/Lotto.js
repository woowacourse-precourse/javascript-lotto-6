import { Console } from '@woowacourse/mission-utils';
import CustomError from './errors/CustomError';
import { ERROR_MESSAGES } from './constants/messages';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) throw new CustomError(ERROR_MESSAGES.lottoNumber);
  }
  get numbers() {
    return this.#numbers;
  }
  // TODO: 추가 기능 구현
}

export default Lotto;
