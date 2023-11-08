import { MissionUtils } from '@woowacourse/mission-utils';
import { CommonError } from './CommonError.js';

export class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if ([...new Set(numbers)].length !== numbers.length) {
      throw new Error('[ERROR] 중복 숫자가 있습니다.');
    }
    const numberError = new CommonError();
    numbers.forEach((number) => {
      numberError.numberError(number);
    });
  }

  get numbers() {
    return this.#numbers;
  }
}
