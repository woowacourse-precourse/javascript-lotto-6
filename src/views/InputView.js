import { Console } from '@woowacourse/mission-utils';
import INPUT_MESSAGE from '../constants/InputMessage.js';
import OUTPUT_MESSAGE from '../constants/OutputMessage.js';

class InputView {
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor() {}

  static async askPurchaseAmount() {
    Console.print(INPUT_MESSAGE.ASK_PURCHASE_AMOUNT_MESSAGE);
    const purchaseAmount = await Console.readLineAsync('');
    return purchaseAmount;
  }

  static async askWinningNumber() {
    Console.print(INPUT_MESSAGE.ASK_WINNING_NUMBER);
    const winningNumber = await Console.readLineAsync('');
    return winningNumber;
  }

  static async askBonusNumber() {
    Console.print(OUTPUT_MESSAGE.PRINT_ENTER);
    Console.print(INPUT_MESSAGE.ASK_BONUS_NUMBER);
    const BonusNumber = await Console.readLineAsync('');
    return BonusNumber;
  }
}

export default InputView;
