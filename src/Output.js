import { Console } from '@woowacourse/mission-utils';

class Output {
  purchaseHistory(purchaseList) {
    Console.print(`${purchaseList.length}개 구매했습니다.`);
    for (const lotto in purchaseList) {
      Console.print(purchaseList[lotto]);
    }
  }

  winningDetails(matchNum, rateReturn) {
    for (let i = 0; i < matchNum.length; i++) {
      Console.print(`${PRIZE_MESSAGES[i]} - ${matchNum[i]}개`);
    }
    Console.print(`총 수익률은 ${rateReturn}입니다.`);
  }
}

export default Output;
