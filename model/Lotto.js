import { Random } from '@woowacourse/mission-utils';
import Exception from '../utils/Exception.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#numbers = numbers;
    Exception.isValidDigit(this.#numbers);
    Exception.isDuplicate(this.#numbers);
    Exception.isAscending(this.#numbers);
    this.#numbers.map((num) => Exception.isValidRange(num));
  }

  static generateRandomLotto() {
    const lottoNum = Random.pickUniqueNumbersInRange(1, 45, 6);
    const sortedLottoNum = lottoNum.sort((a, b) => a - b);
    return new Lotto(sortedLottoNum);
  }

  static generateAndStoreLotto(arr) {
    const lottoNumbers = Lotto.generateRandomLotto();
    arr.push(lottoNumbers);
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
