import { Random } from '@woowacourse/mission-utils';
import { lottoNumberRange } from '../constants/Constant.js';
import InputValidate from './InputValidate.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  // constructor(numbers) {
  //   this.#validate(numbers);
  //   this.#numbers = numbers;
  // }

  static async createLottoInstance(numbers) {
    const inputValidate = new InputValidate();
    await inputValidate.lottoNumber(numbers);
    return new Lotto(numbers);
  }

  // #validate(numbers) {
  //   if (numbers.length !== 6) {
  //     throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
  //   }

  //   if (new Set(numbers).size !== 6) {
  //     throw new Error('[ERROR] 로또 번호가 중복되었습니다.');
  //   }
  // }

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
