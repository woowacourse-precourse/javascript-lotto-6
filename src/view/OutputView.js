import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import SET_LOTTO from '../constants/lotto.js';

class OutputView{

  print(output){
    Console.print(output)
  }

  printPurchase(number){
    Console.print(`${number}${MESSAGE.result.numberOfPurchase}`)
  }

}

export default OutputView