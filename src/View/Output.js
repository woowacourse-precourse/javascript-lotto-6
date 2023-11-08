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

  static marginResult(margin) {
    Console.print(`총 수익률은 ${margin}%입니다.`);
  }
}

export default Print;
