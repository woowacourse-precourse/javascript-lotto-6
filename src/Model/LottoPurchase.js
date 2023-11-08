import { MissionUtils } from '@woowacourse/mission-utils';
import LottoInput from '../View/LottoInput';

class LottoPurchase {
  static async purchaseLottoAmount() {
    let purchaseAmount;

    while (true) {
      try {
        purchaseAmount = await LottoInput.getLottoAmount();
        LottoInput.validateAmount(purchaseAmount);
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    return purchaseAmount;
  }
}

export default LottoPurchase;
