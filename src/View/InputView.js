import { Console } from '@woowacourse/mission-utils';

class InputView {
  async getInput(message) {
    return Console.readLineAsync(`${message}\n`);
  }
}

export default InputView;
