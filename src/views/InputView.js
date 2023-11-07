import { Console } from '@woowacourse/mission-utils';
import InputViewValidator from '../utils/validators/InputViewValidator';

const InputView = {
  async readInteger(message) {
    const userInput = await Console.readLineAsync(`${message}\n`);
    InputViewValidator.isValidInput(userInput);
    return userInput;
  },

  async readMultipleIntegers(message) {
    const userInput = await Console.readLineAsync(`${message}\n`);
    InputViewValidator.areValidMultipleInputs(userInput);
    return userInput;
  },
};

export default InputView;
