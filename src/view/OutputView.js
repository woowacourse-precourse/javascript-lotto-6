import { Console } from '@woowacourse/mission-utils';

class OutputView {
  print(message = '') {
    return Console.print(message);
  }
}

export default OutputView;
