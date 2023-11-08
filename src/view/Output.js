import { Console } from '@woowacourse/mission-utils';
import Util from '../utils/Util.js';
import { messageFormat } from '../constant/mesaageFormat.js';

class Output {
  static print(message) {
    Console.print(message);
  }

  static printPurchaseCount(count) {
    Output.print(messageFormat.purchase(count));
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
    Output.print(messageFormat.rateOfReturn(number));
  }
}
export default Output;
