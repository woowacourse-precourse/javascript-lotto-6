import { Console } from '@woowacourse/mission-utils';
import { VIEWMESSAGE, CHARACTER } from '../constants/constants.js';

class InputView {
  async readPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(
      `${CHARACTER.newline}${VIEWMESSAGE.purchaseInput}`
    );
    return purchaseAmount;
  }

  async readLottoNumber() {
    const winningLottoNumber = await Console.readLineAsync(
      `${CHARACTER.newline}${VIEWMESSAGE.lottoInput}`
    );
    return winningLottoNumber;
  }

  async readBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      `${CHARACTER.newline}${VIEWMESSAGE.bonusInput}`
    );
    return bonusNumber;
  }
}

export default InputView;
