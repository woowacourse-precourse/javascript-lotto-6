import { LOTTO_NUMBER_AMOUNT } from './utils';
import { MissionUtils } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#print(this.#numbers);
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_NUMBER_AMOUNT) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new Error('[ERROR] 로또 번호는 중복되선 안됩니다.');
    }
  }

  // TODO: 추가 기능 구현
  #print(numbers) {
    MissionUtils.Console.print(numbers);
  }
}

export default Lotto;
