import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/Constants.js';

class UserInputView {
  static async inputPrice() {
    const purchasePrice = await MissionUtils.Console.readLineAsync(
      MESSAGE.enterPurchasePrice,
    );
    return purchasePrice;
  }

  static async inputWinningNumbers() {
    const winningNumber = await MissionUtils.Console.readLineAsync(
      MESSAGE.enterWinningNumbers,
    );
    return winningNumber;
  }
}

export default UserInputView;
