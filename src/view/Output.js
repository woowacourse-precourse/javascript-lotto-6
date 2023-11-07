import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, RateOfReturn } from '../constant/constant.js';
import Util from '../utils/Util.js';

class Output {
  static print(message) {
    Console.print(message);
  }

  static printPurchaseCount(count) {
    Output.print(MESSAGE.purchase(count));
  }

  static printPurchasedLottoList(lottoList) {
    lottoList.forEach((lotto) => {
      const stringArrayLotto = Util.arrayToStringArray(lotto);
      Output.print(stringArrayLotto);
    });
  }

  static printRateOrReturn(number) {
    Output.print(RateOfReturn(number));
  }
}
export default Output;
