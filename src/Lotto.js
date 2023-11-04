import { MissionUtils } from '@woowacourse/mission-utils';

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

    if (!numbers.every(num => !/\D/.test(num))) {
      throw new Error('[ERROR] 로또 번호는 숫자로만 이루어져야 합니다.');
    }

    const isDuplicate = new Set(numbers).size;
    if (isDuplicate !== 6) {
      throw new Error('[ERROR] 중복되지 않는 6개의 숫자로 입력해 주세요.');
    }
  }

  getLottoNumber() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
