import { Console } from '@woowacourse/mission-utils';
import CustomError from '../customs/CustomError.js';
import ValidatableString from '../validators/ValidatableString.js';
import PROMPT from '../constants/prompt.js';
import ERROR_MESSAGE from '../constants/error.js';

class Input {
  /**
   * 로또 구입 금액을 입력받아 number로 반환하는 메서드
   * @returns {Promise<number>} 구입금액
   */
  static async getCost() {
    const cost = await Input.readValidatableAsync(PROMPT.BUY_COST);
    console.log(cost.isDivisibleBy(1000));
    if (!cost.isDivisibleBy(1000)) {
      throw new CustomError(ERROR_MESSAGE.NOT_DIVISIBLE_BY_1000);
    }

    return cost;
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
