import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/Constants.js';

const UserInputView = {
  async inputPrice() {
    const purchasePrice = await MissionUtils.Console.readLineAsync(
      MESSAGE.enterPurchasePrice,
    );
    return purchasePrice;
  },
};

export default UserInputView;
