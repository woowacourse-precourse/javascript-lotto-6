import { Console } from '@woowacourse/mission-utils';

class InputView {
  static async readLine(message) {
    const input = await Console.readLineAsync(message);
    return InputView.#removeWhiteSpace(input);
  }

  static #removeWhiteSpace(input) {
    return input.replace(/\s+/g, '');
  }
}

export default InputView;
