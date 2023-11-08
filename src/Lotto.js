import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from './Constant.js';
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
    if (new Set(numbers).size !== numbers.length)
      throw new Error(ERROR_MESSAGE.CHECK_LOTTO_NUMBER_DUPLICATE);

    if (numbers.join('').replace(/[0-9]/g, '').length > 0)
      throw new Error(ERROR_MESSAGE.CHECK_LOTTO_NUMBER);
  }

  printLotto() {
    Console.print(`[${this.#numbers.join(', ')}]`);
  }

  checkMatchNumber(winNumbers, bonusNumber) {
    const match = winNumbers.filter((win) =>
      this.#numbers.includes(win)
    ).length;
    const bonus = this.#numbers.includes(bonusNumber);
    return { match, bonus };
  }
  // TODO: 추가 기능 구현
}

export default Lotto;
