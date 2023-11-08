import { Random } from '@woowacourse/mission-utils';
import LottoResult from './LottoResult';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#sortAscending();
  }

  #validate(numbers) {
    if (numbers.length !== 6) throw new Error('[ERROR]');

    if (numbers.length !== new Set(numbers).size) throw new Error('[ERROR]');
  }

  #sortAscending() {
    const sortedLottoNumbers = this.#numbers.sort((number1, number2) => (number1 = number2));

    this.#numbers = sortedLottoNumbers;
  }

  determineResult(userLottoArray, userBonusNumber) {
    const lottoMatched = userLottoArray.filter((userLottoNum) => {
      return this.#numbers.includes(userLottoNum);
    });

    const bounsMatched = this.#numbers.includes(userBonusNumber);

    return LottoResult.getPrize(lottoMatched.length, bounsMatched);
  }

  getLottoNumbersString() {
    return `[${this.#numbers.join(', ')}]`;
  }
}

export default Lotto;
