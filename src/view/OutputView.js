import { Console } from '@woowacourse/mission-utils';

import { CONSOLE_MESSAGE } from './../constants/constants';

class OutputView {
  static printError(message) {
    Console.print(message);
  }
}

export default OutputView;
