import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MSG, MATCH_DATA } from './constant/message.js';

class Output {
  
  async printPurchaseAmonut() {
    await Console.print(OUTPUT_MSG.PURCHASE_AMOUNT)
  }

  async printLottoArray(amount, array) {
    await Console.print(`\n${amount}${OUTPUT_MSG.PURCHASE_ITEM_COUNT}`)
    for(let i=0; i<array.length; i += 1) {
      Console.print(array[i])
    }
  }
}

export default Output