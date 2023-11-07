import { BonusNumberErrorMessage } from './models/message.js';
import { LottoRule } from './models/rule.js';

class Bonus {
  #number;

  get number() {
    return this.#number;
  }

  constructor(winningNumbers, number) {
    this.#validate(winningNumbers, number);
    this.#number = number;
  }

  #validate(winningNumbers, number) {
    if (this.#isNotInteger(number)) {
      throw new Error(BonusNumberErrorMessage.NotInteger);
    }

    if (this.#outOfRange(number)) {
      throw new Error(BonusNumberErrorMessage.OutOfRange);
    }

    if (this.#duplicate(winningNumbers, number)) {
      throw new Error(BonusNumberErrorMessage.Duplicate);
    }
  }

  #isNotInteger(number) {
    return !Number.isInteger(number);
  }

  #outOfRange(number) {
    return LottoRule.MinNumber > number || LottoRule.MaxNumber < number;
  }

  #duplicate(winningNumbers, number) {
    return winningNumbers.includes(number);
  }
}
export default Bonus;
