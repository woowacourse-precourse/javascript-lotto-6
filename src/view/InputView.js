import { Console } from '@woowacourse/mission-utils';
import { VIEWMESSAGE } from '../constants/constants.js';

class InputView {
  async readPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(
      VIEWMESSAGE.purchseInput
    );
    return purchaseAmount;
  }

  async readLottoNumber() {
    const winningLottoNumber = await Console.readLineAsync(
      VIEWMESSAGE.lottoInput
    );
    return winningLottoNumber;
  }

  async readBonusNumber() {
    const bonusNumber = await Console.readLineAsync(VIEWMESSAGE.bonusInput);
    return bonusNumber;
  }
}

export default InputView;
