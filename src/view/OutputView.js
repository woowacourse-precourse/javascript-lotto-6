import { Console } from '@woowacourse/mission-utils';
import { CHARACTER, STATMESSAGE } from '../constants/constants.js';

class OutputView {
  print(message) {
    Console.print(message);
  }

  printNumberOfPurchase(numberOfPurchase) {
    Console.print(
      `${CHARACTER.newline}${numberOfPurchase}${CHARACTER.purchaseSuffix}`
    );
  }

  printStatPrefix() {
    Console.print(`${CHARACTER.newline}${STATMESSAGE.start}`);
  }

  printStatistic(statistic) {
    Console.print(
      `${STATMESSAGE[statistic.rank]}${statistic.count}${CHARACTER.countSuffix}`
    );
  }

  printRateOfReturns(rateOfReturns) {
    Console.print(
      `${CHARACTER.newline}${CHARACTER.returnPreffix}${rateOfReturns}${CHARACTER.returnSuffix}`
    );
  }
}

export default OutputView;
