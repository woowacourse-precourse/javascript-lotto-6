import { Random, Console } from '@woowacourse/mission-utils';
import INPUT_VIEW from './View/inputView.js';
import {
  LOTTO_MESSAGE,
  NUMBERS,
  ERROR_MESSAGE,
} from './Constants/Constants.js';
import VALIDATION from './Controller/Validation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    VALIDATION.lottoNumValidation(numbers);
  }

  // TODO: 추가 기능 구현
  getResult(myLotto, bonus) {
    let matchNum = 0;
    this.#numbers.forEach((element) => {
      if (myLotto.includes(element)) matchNum += 1;
    });

    if (matchNum < 3) {
      return null;
    }
    if (matchNum === 6) {
      // 1등
      return 1;
    }

    if (matchNum === 5 && this.#numbers.includes(bonus)) {
      // 2등
      return 2;
    }
    // 등수를 return
    return 8 - matchNum;
  }

  getNumbers() {
    return this.#numbers;
  }

  toString() {
    Console.print(`[${this.#numbers.join(', ')}]`);
  }
}

export default Lotto;
