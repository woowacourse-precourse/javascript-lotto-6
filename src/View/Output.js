import { Console } from '@woowacourse/mission-utils';
import { PRIZE_MESSAGES } from './message.js';

class Output {
  purchaseHistory(purchaseList) {
    Console.print(`\n${purchaseList.length}개를 구매했습니다.`);
    for (const lotto in purchaseList) {
      const msg = purchaseList[lotto].join(', ');
      Console.print(`[${msg}]`);
    }
  }

  winningDetails(matchNum, rateReturn) {
    Console.print('\n당첨통계\n---');
    for (let i = 0; i < matchNum.length; i += 1) {
      Console.print(`${PRIZE_MESSAGES[i]} - ${matchNum[i]}개`);
    }
    Console.print(`총 수익률은 ${rateReturn}%입니다.`);
  }
}

export default Output;
