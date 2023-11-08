import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static print(message) {
    Console.print(message);
  }

  static printNewLine() {
    Console.print('');
  }
}

export default OutputView;
