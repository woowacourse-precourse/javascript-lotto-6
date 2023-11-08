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

  getLottoNumbersString() {
    return `[${this.#numbers.join(', ')}]`;
  }
}

export default Lotto;
