import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './constant.js';

class Output {
  static printPurchase(count) {
    Console.print(MESSAGE.purchase(count));
  }

  static printPurchasedLottoList(lottoList) {
    lottoList.forEach(Console.print);
  }
}
export default Output;
