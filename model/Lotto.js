import { Random } from '@woowacourse/mission-utils';
import Exception from '../utils/Exception.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Exception.isValidDigit(numbers);
    Exception.isDuplicate(numbers);
    Exception.isAscending(numbers);
    numbers.map((num) => {
      Exception.isValidRange(num);
    });
  }

  getLottoNumbers() {
    return this.#numbers;
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
}

export default Lotto;
