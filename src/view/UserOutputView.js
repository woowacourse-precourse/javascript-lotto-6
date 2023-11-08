import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/Constants.js';

class UserOutputView {
  static printError(error) {
    MissionUtils.Console.print(error);
  }

  static printLotto(lottos) {
    lottos.forEach((lotto) => {
      MissionUtils.Console.print(`[${lotto.join(', ')}]`);
    });
  }

  static printTicketCount(ticketCount) {
    MissionUtils.Console.print(`\n${ticketCount}${MESSAGE.purchaseAmount}`);
  }
}

export default UserOutputView;
