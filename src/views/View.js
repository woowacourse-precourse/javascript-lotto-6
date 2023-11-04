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
}
export default View;
