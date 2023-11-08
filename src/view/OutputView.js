import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static printErrorMessage(error) {
    Console.print(error.message);
  }
}

export default OutputView;
