import { Console, Random } from '@woowacourse/mission-utils';

class Util {
  static readLineAsyncConsole(message) {
    return Console.readLineAsync(message);
  }

  static printConsole(message) {
    return Console.print(message);
  }

  static randomNumber(min, max) {
    return Random.pickNumberInRange(min, max);
  }

  static toAscendingArray(arr) {
    return arr.sort((a, b) => a - b);
  }
}

export default Util;
