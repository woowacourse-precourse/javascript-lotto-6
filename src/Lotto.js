import Validation from './Validation.js';
import {
  LOTTO_NUMBER,
  FIRST_PRIZE,
  SECOND_PRIZE,
  THIRD_PRIZE,
  FOURTH_PRIZE,
  FIFTH_PRIZE,
  NO_PRIZE,
} from './constants/Condition.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
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
      [FIRST_PRIZE.match]: FIRST_PRIZE.rank,
      [SECOND_PRIZE.match]: this.#numbers.includes(bonusNumber)
        ? SECOND_PRIZE.rank
        : THIRD_PRIZE.rank,
      [FOURTH_PRIZE.match]: FOURTH_PRIZE.rank,
      [FIFTH_PRIZE.match]: FIFTH_PRIZE.rank,
    };

    return resultMap[matchNumberCount] || NO_PRIZE.rank;
  }

  calculateLottoResult(winningNumbers, bonusNumber) {
    const matchNumberCount = this.calculateMatchNumber(winningNumbers);
    const result = this.compareMatchNumberWithPrize(matchNumberCount, bonusNumber);
    return result;
  }
}

export default Lotto;
