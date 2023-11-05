import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/Messages.js';

export default class InputView {
  static async readPurchaseAmount() {
    return await Console.readLineAsync(INPUT_MESSAGE.purchaseAmount);
  }
}
