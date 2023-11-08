import { Console } from '@woowacourse/mission-utils';
import { JOIN_SEPARATOR, JOIN_PREFIX, JOIN_SUFFIX, BONUS_MATCHES, RESULT } from './constant/Constant.js';
import Validation from './validation/Validation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validation.isLottoBadFormat(numbers);
    Validation.isLottoNotUnique(numbers);
    Validation.isLottoBadRange(numbers);
  }

  printLotto() {
    Console.print(`${JOIN_PREFIX}${this.#numbers.join(JOIN_SEPARATOR)}${JOIN_SUFFIX}`);
  }

  compareTo(lotto, bonus) {
    const result = this.#numbers.filter((number) => lotto.#numbers.includes(number)).length;
    if (result === BONUS_MATCHES && this.#numbers.includes(bonus)) return RESULT.BONUS;
    return result;
  }
}

export default Lotto;
