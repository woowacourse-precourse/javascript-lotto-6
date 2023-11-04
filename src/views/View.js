import { MissionUtils } from '@woowacourse/mission-utils';
import PurChaseValidator from '../validators/PurchaseValidator.js';
import LottoValidator from '../validators/LottoValidator.js';

class View {
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
}
export default View;
