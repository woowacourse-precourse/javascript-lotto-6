import { Console } from '@woowacourse/mission-utils';

class InputView {
  /**
   * message를 출력하고 입력 값을 받습니다.
   * @param {string} message
   * @returns {Promise<string>} input
   */
  static async writeInput(message) {
    const input = await Console.readLineAsync(message);
    return input;
  }
}

export default InputView;
