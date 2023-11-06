import { VALIDATION_RULE, ERROR_MESSAGE } from '../utils/constant';

export class Lotto {
  #numbers;
  /* 배열로 초기화, 초기화 할때 validate */
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate = (numbers) => {
    if (numbers.length !== VALIDATION_RULE.LOTTO_LENGTH) {
      throw ERROR_MESSAGE.INVALID_COUNT;
    }
  };

  convert_toString = () => {
    return this.#numbers.join(', ');
  };

  // TODO: 추가 기능 구현
}
