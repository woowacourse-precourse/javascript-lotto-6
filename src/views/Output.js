import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static printErrorMessage(error) {
    Console.print(`${error}\n`);
  }
}

export default OutputView;
