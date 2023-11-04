import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static displayNumberOfPurchase(purchaseAmount) {
    const numberOfPurchase = purchaseAmount / 1000;
    Console.print(`${numberOfPurchase}개를 구매했습니다.\n`);
    return numberOfPurchase;
  }
}

export default OutputView;
