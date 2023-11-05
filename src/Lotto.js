import { Random } from '@woowacourse/mission-utils';
import InputValidate from './utils/InputValidate.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  static async createLottoInstance(numbers) {
    const inputValidate = new InputValidate();
    await inputValidate.lottoNumber(numbers);
    return new Lotto(numbers);
  }

  // TODO: 추가 기능 구현
  sortingNumber() {
    this.#numbers.sort((a, b) => a - b);
    return this.#numbers.join(', ');
  }

  async generator() {
    this.#numbers = await Random.pickUniqueNumbersInRange(1, 45, 6);
    return this.#numbers;
  }
}

export default Lotto;
