import {
  LOTTO_END,
  LOTTO_LENGTH,
  LOTTO_PRICE,
  LOTTO_START,
} from '../constants/Constants';
import { ERROR_MESSAGE } from '../constants/Message';

class ValidationUtils {
  // 입력 값이 있는지 유효성 검사
  static isinvalidEmptyInput(input) {
    if (!input) {
      throw new Error(ERROR_MESSAGE.invalidEmptyInput);
    }
  }

  // 음수 입력했는지 유효성 검사
  static isinvalidPositiveInteger(input) {
    if (input % 1 !== 0 || input < 1) {
      throw new Error(ERROR_MESSAGE.invalidPositiveInteger);
    }
  }

  // 로또 1000단위로 떨어지지 않는지 유효성 검사
  static isinvalidDivisibleLottoPrice(input) {
    if (input % LOTTO_PRICE !== 0) {
      throw new Error(ERROR_MESSAGE.invalidDivisible);
    }
  }

  // 로또 번호 유효 범위안에 들어가는지 유효성 검사
  static inLottoNumberRange(input) {
    if (input < LOTTO_START || input > LOTTO_END) {
      throw new Error(ERROR_MESSAGE.invalidLottoRange);
    }
  }

  // 로또 번호의 길이 유효성 검사
  static isLottoLength(input) {
    if (input !== LOTTO_LENGTH) {
      throw new Error(ERROR_MESSAGE.invalidLottoLength);
    }
  }

  // 중복되지 않는지 유효성 검사
  static isUniqueElements(arr) {
    const SET = new Set(arr);
    if (SET.size !== LOTTO_LENGTH) {
      throw new Error(ERROR_MESSAGE.invalidNumberDuplicate);
    }
  }
}
export default ValidationUtils;
