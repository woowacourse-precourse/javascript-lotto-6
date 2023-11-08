import Validation from './utils/Validation.js';
import { LOTTO_NUMBER, PRIZE } from './constants/Condition.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validateNumbers(numbers);
    this.#numbers = numbers;
  }

  #validateNumbers(numbers) {
    Validation.validateInputDuplicate(numbers);
    Validation.validateInputLength(numbers, LOTTO_NUMBER.length);
  }

  getNumbers() {
    return this.#numbers;
  }

  calculateMatchNumber(winningNumbers) {
    return this.#numbers.filter((number) => winningNumbers.includes(number)).length;
  }

  compareMatchNumberWithPrize(matchNumberCount, bonusNumber) {
    const resultMap = {
      [PRIZE[1].match]: PRIZE[1].rank,
      [PRIZE[2].match]: this.#numbers.includes(bonusNumber) ? PRIZE[2].rank : PRIZE[3].rank,
      [PRIZE[4].match]: PRIZE[4].rank,
      [PRIZE[5].match]: PRIZE[5].rank,
    };

    return resultMap[matchNumberCount] || PRIZE[0].rank;
  }

  calculateLottoResult(winningNumbers, bonusNumber) {
    const matchNumberCount = this.calculateMatchNumber(winningNumbers);
    const lottoResult = this.compareMatchNumberWithPrize(matchNumberCount, bonusNumber);
    return lottoResult;
  }
}

export default Lotto;
