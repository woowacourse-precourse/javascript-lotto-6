import { Console } from '@woowacourse/mission-utils';

class OutputView {
  print(message) {
    Console.print(message);
  }

  printNumberOfPurchase(numberOfPurchase) {
    Console.print(`${numberOfPurchase}${CHARACTER.purchaseSuffix}`)
  }
}

export default OutputView;
