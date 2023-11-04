import { MissionUtils } from '@woowacourse/mission-utils';
import PurChaseValidator from '../validators/PurchaseValidator.js';
import LottoValidator from '../validators/LottoValidator.js';
import { OUTPUT_MESSAGE } from '../constant.js';

class View {
  static print(message) {
    MissionUtils.Console.print(message);
  }

  static async askPurchase(message) {
    const answer = await MissionUtils.Console.readLineAsync(message);
    PurChaseValidator.checkPurchase(answer);

    return answer;
  }

  static async askWinningNumber(message) {
    const answer = await MissionUtils.Console.readLineAsync(message);
    LottoValidator.isLotto(answer);

    return answer;
  }

  static async askBonusNumber(winningNumbers, message) {
    const answer = await MissionUtils.Console.readLineAsync(message);
    LottoValidator.bonusValidate(winningNumbers, answer);

    return answer;
  }

  static printLotto(lottos) {
    this.print(`${lottos.length}${OUTPUT_MESSAGE.purchase}`);

    lottos.forEach((lotto) => {
      this.print(lotto);
    });
  }

  static winningStatistics(winningResult, yieldRate) {
    this.print(OUTPUT_MESSAGE.statistics);
    this.print(OUTPUT_MESSAGE.divider);

    [...Object.entries(winningResult)].forEach((result) => {
      const rank = result[0];
      const count = result[1];
      this.print(`${OUTPUT_MESSAGE[rank]}${count}개`);
    });

    this.print(`총 수익률은 ${yieldRate}%입니다.`);
  }
}
export default View;
