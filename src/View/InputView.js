import { Console } from '@woowacourse/mission-utils';
import { Validator } from '../Validator.js';

const InputView = {
  async inputLine(message) {
    const userInput = await Console.readLineAsync(message);
    Validator.validateCommonInput(userInput);

    return userInput;
  },
};

export default InputView;
