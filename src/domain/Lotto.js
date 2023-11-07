import { MissionUtils } from '@woowacourse/mission-utils';
import {
  PICK_NUMBERS,
  RANGE,
  ZERO,
  WINNING_RANK,
  WINNING_RANK_COUNT,
} from '../constants/lotto/numbers';
import validationUtils from '../services/utils/validation';

const validateWinningNumber = (winningNumber) => {
  validationUtils.isArray(winningNumber);
  validationUtils.isArrayValueTypeNumber(winningNumber);
  validationUtils.checkArrayDuplicate(winningNumber);
};

const validationBonusNumber = (bonusNumber) => {
  validationUtils.isInteger(bonusNumber);
  validationUtils.checkRange(bonusNumber);
};
class Lotto {
  #numbers;

  /**
   * @param {number[]} numbers
   */
  constructor(numbers) {
    this.#numbers = numbers;
    this.#validateNumberCount();
    validationUtils.checkArrayDuplicate(numbers);
  }

  #validateNumberCount() {
    if (this.#numbers.length !== PICK_NUMBERS) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  /**
   * 무작위 로또 번호를 반환한다
   * @returns {number[]} - 무작위로 선별된 6자리 로또 번호
   */
  static drawLottoNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      RANGE.smallNumber,
      RANGE.largestNumber,
      PICK_NUMBERS,
    );
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
