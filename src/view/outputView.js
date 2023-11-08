import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static async printError(message) {
    Console.print(message);
  }
}

export default OutputView;
