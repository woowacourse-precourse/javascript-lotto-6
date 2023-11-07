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

  // TODO: 추가 기능 구현
  sortNumbers() {
    this.#numbers.sort((a, b) => a - b);
  }

  printNumbers() {
    const printableNumbers = this.#numbers.join(', ');
    Console.print(`[${printableNumbers}]`);
  }

  checkWinning(winningNumbers, bonusNumber) {
    // reduce를 쓰거나 include랑 filter를 쓰든가....
    // 맞는 개수 리턴하자
    const winningCount = winningNumbers.reduce(
      (acc, cur) => (this.#numbers.includes(cur) ? acc + 1 : acc),
      0,
    );
    const hasBonus = this.#numbers.includes(bonusNumber);
    return { winning: winningCount, bonus: hasBonus };
  }
}

export default Lotto;
