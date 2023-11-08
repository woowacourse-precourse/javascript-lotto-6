import { Random } from '@woowacourse/mission-utils';
import { lottoNumberRange } from './domain/constants/Constant.js';
import InputValidate from './domain/utils/InputValidate.js';

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
    this.#numbers = await Random.pickUniqueNumbersInRange(
      lottoNumberRange.from,
      lottoNumberRange.to,
      lottoNumberRange.pick,
    );
    return this.#numbers;
  }
}

export default Lotto;
