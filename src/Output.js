import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MSG, MATCH_DATA } from './constant/message.js';

class Output {
  
  async printPurchaseAmonut() {
    await Console.print(OUTPUT_MSG.PURCHASE_AMOUNT)
  }

}

export default Output