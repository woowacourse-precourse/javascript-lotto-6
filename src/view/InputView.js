import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/messages';

class InputView {
  static async InputPurchaseAmount() {
    return Console.readLineAsync(MESSAGES.purchaseAmount);
  }

  static async InputLottoNumbers() {
    return Console.readLineAsync(MESSAGES.userLottoNumberInput);
  }

  static async InputBonusNumber() {
    return Console.readLineAsync(MESSAGES.askBonusNumber);
  }
}

export default InputView;
