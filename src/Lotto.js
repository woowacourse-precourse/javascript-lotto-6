import PRIZE from './constants/Prize.js';
import Validate from './Validate.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validate.checkNumberCount(numbers);
    Validate.checkDuplicateNumber(numbers);

    numbers.forEach((number) => Validate.checkNumberRange(number));
    numbers.forEach((number) => Validate.checkNumberType(number));
  }

  #choosePrize(number, bonus) {
    switch (number) {
      case 6:
        return PRIZE.six;
      case 5:
        if (this.#numbers.includes(bonus)) {
          return PRIZE.fivePlus;
        }
        return PRIZE.five;
      case 4:
        return PRIZE.four;
      case 3:
        return PRIZE.three;
      default:
        return 0;
    }
  }

  compareLotto(answer, bonus) {
    const correct = this.#numbers.filter((number) => answer.includes(number));
    const number = correct.length;
    return this.#choosePrize(number, bonus);
  }
}

export default Lotto;
