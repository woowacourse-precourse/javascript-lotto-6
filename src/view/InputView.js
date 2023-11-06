import { Console } from '@woowacourse/mission-utils';
import { VIEWMESSAGE, CHARACTER } from '../constants/constants.js';

class InputView {
  async readPurchaseAmount() {
    try {
      const purchaseAmount = await Console.readLineAsync(
        `${CHARACTER.newline}${VIEWMESSAGE.purchaseInput}`
      );
      return purchaseAmount;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async readLottoNumber() {
    try {
      const lottoNumber = await Console.readLineAsync(
        `${CHARACTER.newline}${VIEWMESSAGE.lottoInput}`
      );
      return lottoNumber;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async readBonusNumber() {
    try {
      const bonusNumber = await Console.readLineAsync(
        `${CHARACTER.newline}${VIEWMESSAGE.bonusInput}`
      );
      return bonusNumber;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default InputView;
