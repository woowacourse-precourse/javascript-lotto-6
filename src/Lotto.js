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

  printLottoNumbers() {
    Console.print(this.#numbers);
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
