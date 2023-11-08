import { Validators } from './Service/Validators.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validators.lottoNumbersValidator.validateLottoNumbers(numbers);
  }

  getLottoNumbers() {
    return this.#numbers;
  }

  getMatchingResultWithWinningNumbers(winningNumbers) {
    return {
      matchingCountWithWinningNumbers:
        this.getMatchingCountWithWinningNumbers(winningNumbers),
      matchingCountWithBonusNumber:
        this.getMatchingCountWithBonusNumber(winningNumbers),
    };
  }

  getMatchingCountWithWinningNumbers(winningNumbers) {
    let matchingCountWithWinningNumbers = 0;
    this.#numbers.forEach((number) => {
      if (winningNumbers.includes(number)) {
        matchingCountWithWinningNumbers += 1;
      }
    });
    return matchingCountWithWinningNumbers;
  }

  getMatchingCountWithBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber) ? 1 : 0;
  }
}

export default Lotto;
