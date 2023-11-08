import { Random } from '@woowacourse/mission-utils';

class Lotto {
  #numbers; // 당첨 번호?

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
  getNumber() {
    return this.#numbers;
  }
}

export default Lotto;
