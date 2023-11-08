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

  static printMatchResult(matchCounts) {
    MissionUtils.Console.print(MESSAGE.winningResult);
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${matchCounts[1]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${matchCounts[2]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${matchCounts[3]}개`);
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchCounts[4]}개`,
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${matchCounts[5]}개`,
    );
  }

  static printProfitResult(profit) {
    const profitOutput = profit
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    MissionUtils.Console.print(
      `${MESSAGE.profitPercentageA}${profitOutput}${MESSAGE.profitPercentageZ}`,
    );
  }
}

export default UserOutputView;
