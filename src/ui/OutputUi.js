import { MissionUtils } from '@woowacourse/mission-utils';
import { WINNIG_PROFITS, WINNING_NUMBERS } from '../Constants.js';
import GameUtils from '../lotto/GameUtils.js';
class OutputUi {
  constructor() {}

  printPurchasedLottos(lottos) {
    const NUMBER_OF_LOTTOS = lottos.length;
    MissionUtils.Console.print(`\n${NUMBER_OF_LOTTOS}개를 구매했습니다.`);
    for (let i = 0; i < NUMBER_OF_LOTTOS; i++) {
      MissionUtils.Console.print(lottos[i]);
    }
    MissionUtils.Console.print('\n');
  }

  

  printWinnigStatus(winnigStatus) {
    MissionUtils.Console.print('\n당첨 통계');
    MissionUtils.Console.print('---\n');
    for (const index in WINNING_NUMBERS) {
        const MATHING_COUNT = WINNING_NUMBERS[index];
        MissionUtils.Console.print(GameUtils.winningStatusForUser(MATHING_COUNT,winnigStatus));
    }
  }
}
export default OutputUi;
