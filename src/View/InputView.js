import { Console } from '@woowacourse/mission-utils';
import { validateCommonInput } from '../util/Validator.js';

const InputView = {
  async inputLine(message) {
    const userInput = await Console.readLineAsync(message);
    validateCommonInput(userInput);

    return userInput;
  },
};

export default InputView;
