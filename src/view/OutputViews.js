import { Console } from '@woowacourse/mission-utils';
import { outputString } from '../consts';

const OutputView = {
  print(string) {
    Console.print(string);
  },

  printPurchaseCount(count) {
    this.print(`${count}${outputString.purchaseCount}`);
  },

  printPublishedLotto(numbers) {
    this.print(numbers);
  },
};

export default OutputView;
