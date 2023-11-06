import { MissionUtils } from '@woowacourse/mission-utils';
import { WINNIG_PROFITS, WINNING_NUMBERS } from '../Constants.js';
import GameUtils from '../lotto/GameUtils.js';
class OutputUi {
  constructor() {}
  printNumberOfLotts(NUMBER_OF_LOTTOS) {
    MissionUtils.Console.print('');
    MissionUtils.Console.print(`${NUMBER_OF_LOTTOS}개를 구매했습니다.`);
  }
  printPurchasedLottos(lottos) {
    const NUMBER_OF_LOTTOS = lottos.length;
    this.printNumberOfLotts(NUMBER_OF_LOTTOS);
    for (let i = 0; i < NUMBER_OF_LOTTOS; i++) {
      MissionUtils.Console.print(`[${lottos[i].join(', ')}]`);
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

  printRateOfReturn(rateOfReturn) {
    MissionUtils.Console.print(`총 수익률은 ${rateOfReturn}%입니다.`)
  }
}
export default OutputUi;
