import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constant/constant.js';
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

  static printResultHeader(){
    Output.print('당첨 통계');
    Output.print('---');
  }

  static printRateOrReturn(number) {
    Output.print(MESSAGE.rateOfReturn(number));
  }
}
export default Output;
