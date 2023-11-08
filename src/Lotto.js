import { COUNT } from './constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== COUNT) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (new Set(numbers).size !== COUNT) {
      throw new Error(
        '[ERROR] 로또 번호는 중복되지 않는 6개의 숫자여야 합니다.'
      );
    }
  }

  getNumbers() {
    return this.#numbers.sort((a, b) => a - b);
  }

  getRank(winningNumbers, bonusNumber) {
    const matchedCount = this.#numbers.filter((number) =>
      winningNumbers.includes(number)
    );

    switch (matchedCount.length) {
      case 6:
        return 1;
      case 5:
        if (this.#numbers.includes(bonusNumber)) return 2;
        return 3;
      case 4:
        return 4;
      case 3:
        return 5;
      default:
        return 0;
    }
  }
}

export default Lotto;
