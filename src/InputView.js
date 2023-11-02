import { Console } from '@woowacourse/mission-utils';
import { splitAndTrim } from './utils.js';

const InputView = {
  async inputCommon(message) {
    let userInputRemoveSpaces;
    while (true) {
      try {
        const userInput = await Console.readLineAsync(message);
        userInputRemoveSpaces = splitAndTrim(userInput);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return userInputRemoveSpaces;
  },
};

export default InputView;
