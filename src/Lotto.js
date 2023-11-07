import { validateBonusNumber, validateWinnigNumber } from './utils.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    validateWinnigNumber(numbers);
  }

  validateBonusNumber(bonusNumber) {
    validateBonusNumber(bonusNumber, this.#numbers);
  }

  countMatchedNumbers(lotto) {
    return this.#numbers.filter((number) => lotto.includes(parseInt(number)))
      .length;
  }

  isBonusNumberMatch(lotto, bonusNumber) {
    return lotto.includes(parseInt(bonusNumber));
  }
}

export default Lotto;
