import BonusNumber from './BonusNumber.js';
import WinningNumbers from './WinningNumbers.js';

class Lotto {
  #numbers;

  /**
   * @param {number[]} numbers
   */
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }

  /**
   * @param {WinningNumbers} winningNumbers
   * @param {BonusNumber} bonusNumber
   */
  checkResult(winningNumbers, bonusNumber) {
    const winningSet = new Set(winningNumbers.getValues());
    const intersect = new Set(this.#numbers.filter(x => winningSet.has(x)));

    return this.#mapSizeToResult(intersect, bonusNumber);
  }

  /**
   * @param {Set<number>} intersect
   * @param {number} bonusNumber
   * @returns
   */
  #mapSizeToResult(intersect, bonusNumber) {
    if (intersect.size === 6) {
      return 1;
    }
    if (intersect.size === 5) {
      return this.#checkBonusNumber(intersect, bonusNumber);
    }
    if (intersect.size === 4) {
      return 4;
    }
    if (intersect.size === 3) {
      return 5;
    }

    return 0;
  }

  /**
   * @param {Set<number>} intersect
   * @param {number} bonusNumber
   */
  #checkBonusNumber(intersect, bonusNumber) {
    if (intersect.has(bonusNumber)) {
      return 2;
    }

    return 3;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    const deduplicated = new Set(numbers);

    if (numbers.length !== deduplicated.size) {
      throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
    }
  }
}

export default Lotto;
