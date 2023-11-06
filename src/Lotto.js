import { Console } from '@woowacourse/mission-utils';
import { LOTTO_ERROR } from './constants/Messages';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(LOTTO_ERROR.length);
    }
  }

  printLottoNumbers() {
    Console.print(`[${this.#numbers.join(', ')}]`);
  }

  calculateLottoWinning(winningNumbers, bonusNumber) {
    const matchNumberCount =
      12 - new Set([...this.#numbers, ...winningNumbers]).size;

    switch (matchNumberCount) {
      case 6:
        return '1';
      case 5:
        return this.#numbers.includes(bonusNumber) ? '2' : '3';
      case 4:
        return '4';
      case 3:
        return '5';
      default:
        return '0';
    }
  }
}

export default Lotto;
