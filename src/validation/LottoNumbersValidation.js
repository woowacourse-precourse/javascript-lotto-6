import { ERROR_MESSAGES as ERROR } from "../constant/ErrorMessages.js";

const LottoNumbersValidation = {

  /**
   * 로또번호(Lotto.numbers)에 대하여 유효성검사를 수행한다.
   * @param {Array} value 로또번호(Lotto.numbers)
   */
  validate(value) {
    this.checkIsNumeric(value);
    this.checkIsInteger(value);
    this.checkIsValidRange(value);
    this.checkIsNotInWinningNumbers(value, winningNumbers);
  },

  /** @throws 배열의 길이가 6이 아니라면 에러를 발생시킨다. */
  checkIsLengthSix(value) {
    if (value.length !== 6) {
      throw new Error(ERROR.invalid_winning_numbers_length);
    }
  },

  /** @throws 숫자가 아닌 값이 포함되어 있다면 에러를 발생시킨다. */
  checkIsNumeric(value) {
    value.forEach((item) => {
      if (typeof item !== 'number') {
        throw new Error(ERROR.invalid_winning_numbers_format);
      }
    });
  },

  /** @throws 정수가 아닌 값이 포함되어 있다면 에러를 발생시킨다. */
  checkIsInteger(value) {
    value.forEach((item) => {
      if (!Number.isInteger(item)) {
        throw new Error(ERROR.invalid_winning_numbers_integer);
      }
    });
  },

  /** @throws 1~45 밖의 값이 포함되어 있다면 에러를 발생시킨다. */
  checkIsValidRange(value) {
    value.forEach((item) => {
      if (item < 1 || item > 45) {
        throw new Error(ERROR.invalid_winning_numbers_range);
      }
    });
  },

  /** @throws 중복된 값이 포함되어 있다면 에러를 발생시킨다. */
  checkIsUnique(value) {
    if (value.length !== new Set(value).size) {
      throw new Error(ERROR.duplicate_winning_numbers);
    }
  }
}

export default LottoNumbersValidation;
