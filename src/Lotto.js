import { numberCheck, numbersCheck } from './validation.js';
import { LOTTO_NUMBER } from './constants/policy.js';
import { MESSAGE } from './constants/messages.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    console.log(numbers.length);
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    numbers.forEach((number) => {
      numbersCheck.duplicate(numbers, number, MESSAGE.ERROR.duplicate);
      numberCheck.number(number, MESSAGE.ERROR.number);
      numberCheck.rangeCheck(number, LOTTO_NUMBER.startNumber, LOTTO_NUMBER.endNumber, MESSAGE.ERROR.lottoRange);
    });
  }

  getLuckyNumber() {
    return this.#numbers;
  }
}

export default Lotto;
