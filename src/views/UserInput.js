import { Console } from '@woowacourse/mission-utils';

class UserInput {
  async userInput(input) {
    const inputValue = await Console.readLineAsync(input);
    return inputValue;
  }
}

export default UserInput;
