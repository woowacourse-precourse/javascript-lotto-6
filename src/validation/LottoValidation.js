import ValidationError from '../error/ValidationError.js';
import { SELECT_NUMBER_ERROR } from '../constants/error.js';
import { MAX_NUMBER, MIN_NUMBER, LOTTO_LENGTH } from '../constants/constant.js';

class LottoValidation {
  /**
   * 입력번호가 6자리인지 확인
   * @param {number[]} numbers
   */
  static checkLength(numbers) {
    if (numbers.length !== LOTTO_LENGTH) throw new ValidationError(SELECT_NUMBER_ERROR.COUNT);
  }

  /**
   * 입력번호가 1~45 범위에 포함되는지 확인
   * @param {number[]} numbers
   */
  static checkNumber(numbers) {
    numbers.forEach((number) => {
      if (Number.isNaN(number) || number < MIN_NUMBER || number > MAX_NUMBER)
        throw new ValidationError(SELECT_NUMBER_ERROR.NUMBER);
    });
  }

  /**
   * 입력번호중 중복된 수가 있는지 확인
   * @param {number[]} numbers
   */
  static checkDuplicate(numbers) {
    const numberSet = new Set(numbers);
    if (numberSet.size !== numbers.length) throw new ValidationError(SELECT_NUMBER_ERROR.DUPLICATE);
  }
}

export default LottoValidation;
