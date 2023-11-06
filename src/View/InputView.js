import { Console } from '@woowacourse/mission-utils';

class InputView {
  static async readValue(message) {
    const input = await Console.readLineAsync(message);
    InputView.#validate(input);
    return input;
  }

  static #validate(input) {
    // 공백 제거
    // trim
  }
}

export default InputView;
