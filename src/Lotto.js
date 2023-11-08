/* eslint-disable class-methods-use-this */
// import { MissionUtils } from '@woowacourse/mission-utils';

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
    if (numbers.some((num) => isNaN(num))) {
      throw new Error('[ERROR] 로또 번호는 숫자의 형태로 입력해야 합니다.');
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호는 증복되는 숫자가 없어야 합니다.');
    }
    if (numbers.some((num) => num < 1 || num > 45)) {
      throw new Error('[ERROR] 로또 번호는 1~45 범위에 있어야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
