import { Console, Random } from '@woowacourse/mission-utils';

class Util {
  static readLineAsyncConsole(message) {
    return Console.readLineAsync(message);
  }

  static printConsole(message) {
    return Console.print(message);
  }
}

export default Util;
