import { Console } from '@woowacourse/mission-utils';
import { message } from '../Constants.js';

function printPurchasedLottoAmount(lottoAmount) {
  Console.print('\n' + lottoAmount + message.PRINT_PURCHASE_AMOUNT);
}

export default printPurchasedLottoAmount;
