import { Console } from '@woowacourse/mission-utils';
import InputViewValidator from '../utils/validators/InputViewValidator.js';

const InputView = {
  async readInteger(message) {
    const userInput = await Console.readLineAsync(`${message}\n`);
    InputViewValidator.isIntegerInput(userInput);
    return userInput;
  },

  async readMultipleIntegers(message) {
    const userInput = await Console.readLineAsync(`${message}\n`);
    InputViewValidator.isIntegerArrayInput(userInput);
    return userInput;
  },
};

export default InputView;
