import { Console } from '@woowacourse/mission-utils';
import { ERROR } from '../constant/index.js';

class InputView {
  static async #readLine(message) {
    const input = await Console.readLineAsync(message);
    return InputView.#removeWhiteSpace(input);
  }

  static #removeWhiteSpace(input) {
    return input.replace(/\s+/g, '');
  }

  static async readNumber(message) {
    const input = await InputView.#readLine(message);
    InputView.#validateNumber(input);
    return Number(input);
  }

  static #validateNumber(value) {
    if (InputView.#isNaN(value)) {
      throw new Error(ERROR.NUMBER);
    }
  }

  static #isNaN(value) {
    return !/^\d*$/.test(value);
  }

  static async readNumbers(message) {
    const input = await InputView.#readLine(message);
    InputView.#validateNumbers(input);
    return input.split(',').map(Number);
  }

  static #validateNumbers(values) {
    values //
      .split(',')
      .forEach(value => InputView.#validateNumber(value));
  }
}

export default InputView;
