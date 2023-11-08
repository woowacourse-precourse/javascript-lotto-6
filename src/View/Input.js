import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../Contents/Message.js';
import VALIDATE from '../Validate.js';

class Input {
  #validate;

  constructor() {
    this.#validate = new VALIDATE();
  }

  async #ask(message) {
    return Console.readLineAsync(`${message}\n`);
  }

  async Price() {
    const input = await this.#ask(MESSAGE.input.price);
    this.#validate.validateAmount(input.trim());
    return Number(input);
  }

  async Number() {
    const input = await this.#ask(MESSAGE.input.number);
    return input
      .trim()
      .split(",")
      .map((v) => Number(v.trim()));
  }

  async BonusNumber() {
    const input = await this.#ask(MESSAGE.input.bonus_number);
    return Number(input.trim());
  }

}

export default Input;