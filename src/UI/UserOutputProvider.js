import { MissionUtils } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE, WINNING_NUMBERS } from '../constants/Message';

class UserOutputProvider {
  constructor() {}

  showNumberOfLotts(NUMBER_OF_LOTTOS) {
    MissionUtils.Console.print('');
    MissionUtils.Console.print(OUTPUT_MESSAGE.numberOfLottos(NUMBER_OF_LOTTOS));
  }

  showPurchasedLottos(lottos) {
    const NUMBER_OF_LOTTOS = lottos.length;
    this.showNumberOfLotts(NUMBER_OF_LOTTOS);
    for (let i = 0; i < NUMBER_OF_LOTTOS; i += 1) {
      MissionUtils.Console.print(OUTPUT_MESSAGE.purchasedLottos(lottos[i]));
    }
    MissionUtils.Console.print('\n');
  }

  showWinnigStatus(winnigStatus) {
    MissionUtils.Console.print(OUTPUT_MESSAGE.winningStatusGuide);
    for (const index in WINNING_NUMBERS) {
      const MATHING_COUNT = WINNING_NUMBERS[index];
      MissionUtils.Console.print(
        OUTPUT_MESSAGE.winningStatus(MATHING_COUNT, winnigStatus),
      );
    }
  }

  showRateOfReturn(rateOfReturn) {
    MissionUtils.Console.print(OUTPUT_MESSAGE.rateOfReturn(rateOfReturn));
  }
}
export default UserOutputProvider;
