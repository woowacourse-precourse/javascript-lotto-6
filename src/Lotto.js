import { ERROR } from './message.js';
import { RANKING } from './constant.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.array.quantityMismatch);
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR.array.duplicate);
    }
  }

  getNumbers() {
    return `[${this.#numbers.join(', ')}]`;
  }

  checkResult(winningNumbers, bonusNumber) {
    const array = new Set(this.#numbers.concat(winningNumbers));

    switch (array.size) {
      case 6:
        return RANKING.first;
      case 7:
        return array.has(bonusNumber) ? RANKING.second : RANKING.third;
      case 8:
        return RANKING.fourth;
      case 9:
        return RANKING.fifth;
      default:
        return RANKING.outOfRanking;
    }
  }
}
export default Lotto;
