import { Console } from '@woowacourse/mission-utils';
import { outputString } from '../consts';

const OutputView = {
  print(string) {
    Console.print(string);
  },

  printPurchaseCount(count) {
    this.print(`${count}${outputString.purchaseCount}`;)
  },
}

export default OutputView;