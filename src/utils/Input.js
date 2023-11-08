import { Console } from '@woowacourse/mission-utils';
import CustomError from '../exceptions/CustomError.js';
import ERROR_MESSAGE from '../constants/error.js';
import { TypeValidator, StringValidator } from '../validators/index.js';
import reTryCatch from '../exceptions/reTryCatch.js';

/**
 * @classdesc 사용자 입력을 담당하는 클래스,
 *
 * 입력과 관련된 조건만을 검사하며, 정책적인 검사는 하지 않는다.
 */
class Input {
  /**
   * 사용자로부터 양의 정수를 입력 받아 number로 반환하는 메서드
   * @returns {Promise<number>} 구입금액
   */
  static async readIntegerAsync(message) {
    const userInput = await reTryCatch(async () => this.readNonEmptyAsync(message));

    if (!StringValidator.isPositiveInteger(userInput)) {
      throw new CustomError(ERROR_MESSAGE.NOT_POSITIVE_INTEGER);
    }

    return Number(userInput);
  }

  /**
   * 사용자로부터 콤마로 구분된 정수를 입력 받아 number[]으로 반환하는 메서드
   *
   * 입력 값은 콤마로 구분된 숫자여야 한다.
   * @returns {Promise<number[]>} 당첨번호
   */
  static async readCommaSeparatedAsync(message) {
    const userInput = await reTryCatch(async () => this.readNonEmptyAsync(message));

    if (!StringValidator.isCommaSeparatedNumbers(userInput.replace(/\s/g, ''))) {
      throw new CustomError(ERROR_MESSAGE.NOT_COMMA_SEPARATED_NUMBERS);
    }

    const parsed = userInput.split(',').map(Number);

    if (parsed.some((number) => !TypeValidator.isPositiveInteger(number))) {
      throw new CustomError(ERROR_MESSAGE.NOT_POSITIVE_INTEGER);
    }

    return parsed;
  }

  /**
   * 문자열을 읽어서 반환하는 메서드
   *
   * 비어있다면 에러를 던진다.
   * @param {string} message
   * @returns {Promise<string>}
   */
  static async readNonEmptyAsync(message) {
    const userInput = await Console.readLineAsync(message);

    if (TypeValidator.isEmpty(userInput)) {
      throw new CustomError(ERROR_MESSAGE.EMPTY_STRING);
    }

    return userInput;
  }
}

export default Input;
