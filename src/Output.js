import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './constant.js';

class Output {
  static printPurchase(count) {
    Console.print(MESSAGE.purchase(count));
  }
}
export default Output;
