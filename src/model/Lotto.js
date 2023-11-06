import Validator from '../validator/Validator.js';
import { LOTTO_NUMBER, RANK } from '../constants/Constant.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sortNumbers(numbers.map(Number));
  }

  #validate(numbers) {
    Validator.checkIsInvalidCount(numbers);
    Validator.checkHasNonNumericElements(numbers);
    Validator.checkHasOutOfRange(numbers);
    Validator.checkHasDuplicate(numbers);
  }

  #sortNumbers(numbers) {
    return numbers.sort((first, second) => first - second);
  }

  getNumberString() {
    return `[${this.#numbers.join(', ')}]`;
  findRank(winningLotto, bonusNumber) {
    const matchingCount = this.getMatchingCount(winningLotto, bonusNumber);
    return Object.keys(RANK).filter((prize) => RANK[prize].match === matchingCount);
  }

  getMatchingCount(winningLotto, bonusNumber) {
    const matchingCount = this.#countMatchingNumbers(winningLotto);
    if (matchingCount === RANK.second.match && this.#hasBonusNumber(bonusNumber)) {
      return RANK.bonus.match;
    }

    return matchingCount;
  }

  #countMatchingNumbers(winningLotto) {
    return 2 * LOTTO_NUMBER.count - new Set([...winningLotto.#numbers, ...this.#numbers]).size;
  }

  #hasBonusNumber(bonusNumber) {
    return !!this.#numbers.includes(bonusNumber);
  }
}

export default Lotto;
