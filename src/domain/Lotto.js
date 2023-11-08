import { VALIDATION_RULE, ERROR_MESSAGE } from '../utils/constant';
import { Validator } from '../utils/validator';

export default class Lotto {
  #numbers;
  /* 배열로 초기화, 초기화 할때 validate */
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate = (numbers) => {
    if (numbers.length !== VALIDATION_RULE.LOTTO_LENGTH) {
      throw new Error(ERROR_MESSAGE.INVALID_COUNT);
    }
    Validator.Has_sixLength(numbers);
    Validator.Is_Duplicate(numbers);
  };

  convert_toString = () => {
    return this.#numbers.join(', ');
  };

  matchCounter = (anotherlotto) => {
    let count = 0;
    this.#numbers.map((number) => {
      if (anotherlotto.includes(number)) {
        count += 1;
      }
    });
    return count;
  };

  matchBonus = (number) => {
    return this.#numbers.includes(number);
  };
  // TODO: 추가 기능 구현
}
