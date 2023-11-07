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

  printEarnings(number){
    const roundOff = number.toFixed(1)

    Console.print(`총 수익률은 ${Number(roundOff).toLocaleString("ko-KR")}%입니다.`)
  }

}

export default OutputView