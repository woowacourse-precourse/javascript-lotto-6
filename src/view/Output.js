import { Console } from '@woowacourse/mission-utils';

class Output {
  printPurchaseCount(purchaseAmount) {
    Console.print(`\n${purchaseAmount}개를 구매했습니다.`);
  }
}

export default Output;