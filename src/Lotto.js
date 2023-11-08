import { WINNING_RANK, WINNING_RANK_COUNT } from './constants/lotto';
import { ZERO } from './constants/validate';
import validationUtils from './services/utils/validation';

const validateWinningNumber = (winningNumber) => {
  validationUtils.isArrayToThrow(winningNumber);
  validationUtils.isArrayValueTypeNumberToThrow(winningNumber);
  validationUtils.checkArrayDuplicate(winningNumber);
};

const validationBonusNumber = (bonusNumber) => {
  validationUtils.isIntegerToThrow(bonusNumber);
  validationUtils.checkRange(bonusNumber);
};

class Lotto {
  #numbers;

  /**
   * @param {number[]} numbers
   */
  constructor(numbers) {
    this.#numbers = numbers;
    this.#validate(numbers);
    validationUtils.checkArrayDuplicate(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  /**
   * 로또 번호와 배열안에 일치하는 값의 개수를 반환한다
   * @param {number[]} winningNumber
   */
  #countMatchingValuesInArrays(winningNumber) {
    const count = this.#numbers.filter(
      (number) => winningNumber.includes(number) === true,
    );
    return count.length.toString();
  }

  #isSecondPlace(rank, bonusNumber) {
    return this.#numbers.includes(bonusNumber) === true
      ? WINNING_RANK_COUNT.secondPlace
      : rank;
  }

  /**
   * 당첨 등수를 반환한다
   * @param {number[]} winningNumber - 당첨 번호
   * @param {number} bonusNumber - 보너스 번호
   * @returns {number} - 당첨 순위, 미당첨시 0 반환
   */
  getWinningRank(winningNumber, bonusNumber) {
    validationBonusNumber(bonusNumber);
    validateWinningNumber(winningNumber);
    const rank = WINNING_RANK[this.#countMatchingValuesInArrays(winningNumber)];
    if (rank === WINNING_RANK_COUNT.thirdPlace) {
      return this.#isSecondPlace(rank, bonusNumber);
    }
    return rank || ZERO;
  }
}

export default Lotto;
