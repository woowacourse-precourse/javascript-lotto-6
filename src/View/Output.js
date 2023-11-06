import { Console } from '@woowacourse/mission-utils';

class Print {
  static output(message) {
    Console.print(message);
  }

  static repeatLottery(array) {
    array.forEach((el) => Console.print(`[${el.join(', ')}]`));
  }

  static repeatResult(array) {
    array.forEach((el) => Console.print(el));
  }
}

export default Print;
