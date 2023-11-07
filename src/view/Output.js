import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, RateOfReturn } from '../constant/constant.js';

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

  static printRateOrReturn(number) {
    Output.print(RateOfReturn(number));
  }
}
export default Output;
