import { Random } from '@woowacourse/mission-utils';

class Lotto {
  #numbers = [];
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    numbers.forEach((number) => {
      if (this.duplicateCount(numbers, number) >= 2) {
        throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
      }
    });
  }

  duplicateCount(numbers, number) {
    return numbers.filter((currnt) => currnt === number).length;
  }
}

export default Lotto;
