import PRICE from './constants/price.js';

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
  compareLotto(answer, bonus) {
    const correct = this.#numbers.filter((number) => answer.includes(number));

    const number = correct.length;
    if (number === 6) {
      return PRICE.six;
    } else if (number === 5 && this.#numbers.includes(bonus)) {
      return PRICE.fivePlus;
    } else if (number === 5) {
      return PRICE.five;
    } else if (number === 4) {
      return PRICE.four;
    } else if (number === 3) {
      return PRICE.three;
    } else {
      return 0;
    }
  }
}

export default Lotto;
