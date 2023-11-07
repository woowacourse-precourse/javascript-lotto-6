import print from '../utils/print.js';
import PRINT_PHRASE from '../constants/print.js';

class InputView {
  static printInputPurchaseAmountPhrase() {
    print(PRINT_PHRASE.inputPurchaseAmountPhrase);
  }

  static printInputWinnigNumbersPhrase() {
    print(PRINT_PHRASE.inputWinningNumberPhrase);
  }

  static printInputBonusNumberPhrase() {
    print(PRINT_PHRASE.inputBonusNumberPhrase);
  }
}

export default InputView;
