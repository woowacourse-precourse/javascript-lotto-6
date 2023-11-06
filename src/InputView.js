import { Console } from '@woowacourse/mission-utils';

class InputView {
  async getInput(message) {
    return Console.readLineAsync(`${message}\n`);
  }

  printError(errorMessage) {
    Console.print(`[ERROR] ${errorMessage}`);
  }
}

export default InputView;
