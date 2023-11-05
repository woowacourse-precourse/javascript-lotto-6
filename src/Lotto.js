import { Random } from '@woowacourse/mission-utils';
import LOTTO_NUMBER from './constants/lottoNumber.js';

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

  getLottoNumber() {
    return this.#numbers;
  }

  static getRandomLottoNumber() {
    const { minNum, maxNum, count } = LOTTO_NUMBER;
    const randomLottoNumber = Random.pickUniqueNumbersInRange(minNum, maxNum, count);
    const sortLottoNumber = randomLottoNumber.sort((a, b) => a - b);
    return sortLottoNumber;
  }
}

export default Lotto;
