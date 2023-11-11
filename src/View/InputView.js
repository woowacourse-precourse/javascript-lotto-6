import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/messages.js';

const InputView = {
  async readPurchaseAmount() {
    try {
      const purchaseAmount = await Console.readLineAsync(INPUT_MESSAGE.purchase_amount);

      return purchaseAmount;
    } catch (error) {
      throw new Error(error);
    }
  },

  async readLottoNumber() {
    try {
      const lottoNumber = await Console.readLineAsync(INPUT_MESSAGE.lotto_numbers);

      return lottoNumber;
    } catch (error) {
      throw new Error(error);
    }
  },

  async readBonusNumber() {
    try {
      const bonusNumber = await Console.readLineAsync(INPUT_MESSAGE.bonus_number);

      return bonusNumber;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default InputView;