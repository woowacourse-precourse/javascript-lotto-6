import PRIZE from './constants/Prize.js';
import Validate from './Validate.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#validateDuplicate(numbers);
    this.#validateRange(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
  #validateDuplicate(numbers) {
    Validate.checkDuplicateNumber(numbers);
  }

  #validateRange(numbers) {
    numbers.forEach((number) => Validate.checkNumberRange(number));
  }

  compareLotto(answer, bonus) {
    const correct = this.#numbers.filter((number) => answer.includes(number));

    const number = correct.length;
    if (number === 6) {
      return PRIZE.six;
    }
    if (number === 5 && this.#numbers.includes(bonus)) {
      return PRIZE.fivePlus;
    }
    if (number === 5) {
      return PRIZE.five;
    }
    if (number === 4) {
      return PRIZE.four;
    }
    if (number === 3) {
      return PRIZE.three;
    }
    return 0;
  }
}

export default Lotto;
