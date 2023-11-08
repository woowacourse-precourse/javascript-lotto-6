import { ERROR_MESSAGES as ERROR } from "../constant/ErrorMessages.js";

const BonusNumberValidation = {

  /**
   * 보너스 번호에 대하여 유효성검사를 수행한다.
   * @param {string} value 보너스 번호
   * @param {Array<number>} winningNumbers 당첨 번호 배열
   */
  validate(value, winningNumbers) {
    this.checkIsNumeric(value);
    this.checkIsInteger(value);
    this.checkIsValidRange(value);
    this.checkIsNotInWinningNumbers(value, winningNumbers);
  },

  /** @throws 숫자로 치환할 수 없다면 에러를 발생시킨다. */
  checkIsNumeric(value) {
    if (isNaN(value)) {
      throw new Error(ERROR.invalid_bonus_number_format);
    }
  },

  /** @throws 정수가 아니라면 에러를 발생시킨다. */
  checkIsInteger(value) {
    if (!Number.isInteger(Number(value))) {
      throw new Error(ERROR.invalid_bonus_number_integer);
    }
  },

  /** @throws 1~45 밖의 값을 갖는다면 에러를 발생시킨다. */
  checkIsValidRange(value) {
    if (Number(value) < 1 || Number(value) > 45) {
      throw new Error(ERROR.invalid_bonus_number_range);
    }
  },

  /** @throws 당첨 번호와 중복되는 경우 에러를 발생시킨다. */
  checkIsNotInWinningNumbers(value, winningNumbers) {
    if (winningNumbers.includes(Number(value))) {
      throw new Error(ERROR.bonus_number_duplicate_winning);
    }
  }
}

export default BonusNumberValidation;
