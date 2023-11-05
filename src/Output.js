import { Console } from '@woowacourse/mission-utils';

class Output {
  purchaseHistory(purchaseList) {
    Console.print(`${purchaseList.length}개 구매했습니다.`);
    for (const lotto in purchaseList) {
      Console.print(purchaseList[lotto]);
    }
  }
}

export default Output;
