import { Console } from '@woowacourse/mission-utils';
import CustomError from '../customs/CustomError.js';
import ValidatableString from '../validators/ValidatableString.js';
import PROMPT from '../constants/prompt.js';
import ERROR_MESSAGE from '../constants/error.js';

/**
 * @classdesc 사용자 입력을 담당하는 클래스,
 *
 * 입력과 관련된 조건만을 검사하며, 정책적인 검사는 하지 않는다.
 */
class Input {
  /**
   * 로또 구입 금액을 입력받아 ValidatableString으로 반환하는 메서드
   *
   * 입력값은 양의 정수여야 한다.
   * @returns {Promise<ValidatableString>} 구입금액
   */
  static async getCost() {
    const cost = await Input.readValidatableAsync(PROMPT.BUY_COST);

    if (!cost.isPositiveInteger()) {
      throw new CustomError(ERROR_MESSAGE.NOT_INTEGER);
    }

    return cost;
  }

  /**
   * 당첨 번호를 입력받아 ValidatableArray로 반환하는 메서드
   *
   * 입력 값은 콤마로 구분된 숫자여야 한다.
   * @returns {Promise<ValidatableArray>} 당첨번호
   */
  static async getWinningNumbers() {
    const winningNumbers = await Input.readValidatableAsync(PROMPT.WINNING_NUMBERS);

    if (!winningNumbers.isCommaSeparatedNumbers()) {
      throw new CustomError(ERROR_MESSAGE.NOT_COMMA_SEPARATED_NUMBERS);
    }

    return winningNumbers.toValidatableArray();
  }

  /**
   * 문자열을 읽어서 검증 가능한 객체로 반환하는 메서드
   *
   * 비어있다면 에러를 던진다.
   * @param {string} message
   * @returns {Promise<ValidatableString>}
   */
  static async readValidatableAsync(message) {
    const userInput = await Console.readLineAsync(message);
    const validatable = new ValidatableString(userInput);

    if (validatable.isEmpty()) {
      throw new CustomError(ERROR_MESSAGE.EMPTY_STRING);
    }

    return validatable;
  }
}

export default Input;
