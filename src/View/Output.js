import { Console } from '@woowacourse/mission-utils';

class Print {
  static output(message) {
    Console.print(message);
  }

  static repeat(array) {
    array.forEach((el) => Console.print(`[${el.join(', ')}]`));
  }
}

export default Print;
