import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constant/constant.js';

class Output {
  static print(message) {
    Console.print(message);
  }

  static printPurchaseCount(count) {
    Output.print(MESSAGE.purchase(count));
  }

  static printPurchasedLottoList(lottoList) {
    lottoList.forEach(Output.print);
  }
}
export default Output;
