import { Console } from '@woowacourse/mission-utils';

class Util {
  static readLineAsyncConsole(message) {
    return Console.readLineAsync(message);
  }

  static printConsole(message) {
    return Console.print(message);
  }

  static toAscendingArray(arr) {
    return arr.sort((a, b) => a - b);
  }

  static numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}

export default Util;
