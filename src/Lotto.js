import { Console } from '@woowacourse/mission-utils';

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
