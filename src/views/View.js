import { MissionUtils } from '@woowacourse/mission-utils';
import PurChaseValidator from '../validators/PurchaseValidator.js';

class View {
  static async askPurchase(message) {
    const answer = await MissionUtils.Console.readLineAsync(message);
    PurChaseValidator.checkPurchase(answer);
    return answer;
  }
}
export default View;
