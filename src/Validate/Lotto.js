import { MissionUtils } from '@woowacourse/mission-utils';
import { CommonError } from './CommonError.js';

export class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
  }

  #validate(numbers) {
    numbers.forEach((number) => {
      CommonError.numberError(number);
    });
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if ([...new Set(numbers)].length !== numbers.length) {
      throw new Error('[ERROR] 중복 숫자가 있습니다.');
    }

    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }
}
