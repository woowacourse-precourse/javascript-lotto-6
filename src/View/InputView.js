import { Console } from '@woowacourse/mission-utils';
import Validator from '../utils/Validator.js';

const InputView = {
  defaultRadix: 10,

  async readLineAsync(message) {
    const userInput = await Console.readLineAsync(message);
    Validator.validateUserInput(userInput);

    return userInput;
  },

  async readPositiveIntegerAsync(message, radix) {
    const userInput = await this.readLineAsync(message);
    Validator.validatePositiveInteger(userInput);

    return parseInt(userInput, radix || this.defaultRadix);
  },
};

export default InputView;
