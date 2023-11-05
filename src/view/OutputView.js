import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import SET_LOTTO from '../constants/lotto.js';

class OutputView{

  print(output){
    Console.print(output)
  }

  printPurchase(amounts){
    const numberOfLotto = amounts / SET_LOTTO.lotto.price
    Console.print(`${numberOfLotto}${MESSAGE.result.numberOfPurchase}`)
  }

}

export default OutputView