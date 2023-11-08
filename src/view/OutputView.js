import { Console } from '@woowacourse/mission-utils';

import { CONSOLE_MESSAGE } from './../constants/constants';

class OutputView {
  static printError(message) {
    Console.print(message);
  }

  static printPurchaseCount(count) {
    Console.print(`${count}${CONSOLE_MESSAGE.PURCHASED_MESSAGE}`);
  }

  static printLotto(lotto) {
    const lottoNumbers = lotto.join(', ');
    Console.print(`[${lottoNumbers}]`);
  }
}

export default OutputView;
