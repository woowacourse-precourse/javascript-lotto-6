import { ERROR_MSG } from './constant.js';
import validation from './validation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    validation.checkLottoNum(numbers);
  }

  getMatchCount(winningNum) {
    let matchCount = 0;
    winningNum.forEach((num) => {
      if (this.#numbers.includes(num))
        matchCount += 1;
    });
    return matchCount;
  }

  hasBonusNumber(bonusNum) {
    return this.#numbers.includes(bonusNum);
  }
}

export default Lotto;